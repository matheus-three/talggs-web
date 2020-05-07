import React, { useState, useContext, Fragment } from 'react'
import { GraphicContext } from '../../../ContextApi/ContextGraphics';
import { SaveReportBehind } from '../../../Assets/styled-components/StylesCreateReportComponent';
import { SaveReportsStyle, ShowSavedStyle, ButtonSaveStyle } from '../../../Assets/styled-components/StylesSavedComponent';
import { colorsGender, colorsAge, GraphicsSaveStyle } from '../../../Assets/styled-components/StylesCreateGraphics';
import { renderActiveShape } from '../../CreateGraphics/Graphics/activeShapeGraphic'
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie, Cell } from 'recharts'

interface Iprops {
    name: string;
    id: string;
    graphicType: string;
    filter: string;
    saved: []
}

function SavedGraphics (props : Iprops) {
    const [showGraphic,setShowGraphic] = useState(false);
	const {arraySavedGraphics, removeGraphic} = useContext(GraphicContext)
    
    //CHART
	const [state, setState] = useState(0);
	const onPieEnter = (data, index) => {
		setState(index);
	};

    function handleClick () {
        showGraphic?
            setShowGraphic(false)
            :
            setShowGraphic(true)
    }

    const remove = () => {
        removeGraphic(props);
        console.log(arraySavedGraphics)
        handleClick();
    }

    return(
        <Fragment>
        	<SaveReportsStyle onClick = {handleClick}>{props.name}</SaveReportsStyle>

            {showGraphic?
                <SaveReportBehind top = {"72px"} left = {"0px"} height = {"89vh"} back = {"rgba(0,0,0,0.8)"}>
                    <ShowSavedStyle>
                        <span className="saveTitle">{props.name}</span>
                        

                    <GraphicsSaveStyle>
                        {props.graphicType === "1" && 
                            <BarChart className="BarChart" width={690} height={300} data={props.saved} style={{fontSize: "0.8em"}}>
                                <XAxis dataKey="name" style={{fontSize: "1.4em"}}/>
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pagas" fill="#2D9AA6"/>
                                <Bar dataKey="pendentes" fill="#F2A950"/>
                                <Bar dataKey="vencidas" fill="#FF6347"/>
                            </BarChart>
                        }
                        
                        {props.graphicType === "2" && props.filter === "sexo" &&
                            <PieChart width={600} height={400} style={{fontSize: "15px"}}>
                                <Pie
                                    activeIndex={state}
                                    activeShape={renderActiveShape}
                                    data={props.saved}
                                    cx={290}
                                    text={20}
                                    cy={200}
                                    innerRadius={60}
                                    outerRadius={80}
                                    dataKey="amountPeople"
                                    onMouseEnter={onPieEnter}
                                >
                                {
                                    props.saved.map((entry, index) => (	
                                        <Cell key={`cell-${index}`} fill={colorsGender[index]}/>
                                    ))
                                }
                                </Pie>         
                            </PieChart>
                        }

                        {props.graphicType === "2" && props.filter === "idade" &&
                            <PieChart width={600} height={400} style={{fontSize: "15px"}}>
                                <Pie
                                    activeIndex={state}
                                    activeShape={renderActiveShape}
                                    data={props.saved}
                                    cx={290}
                                    cy={200}
                                    innerRadius={60}
                                    outerRadius={80}
                                    dataKey="amountPeople"
                                    onMouseEnter={onPieEnter}
                                    >
                                    {
                                        props.saved.map((entry, index) => (	
                                            <Cell key={`cell-${index}`} fill={colorsAge[index]}/>
                                        ))
                                    }
                                    </Pie>
                            </PieChart>
                        }

                        {props.graphicType === "2" && props.filter === "localidade" &&
                            <PieChart width={600} height={400} style={{fontSize: "15px"}}>
                                <Pie
                                    activeIndex={state}
                                    activeShape={renderActiveShape}
                                    data={props.saved}
                                    cx={290}
                                    cy={200}
                                    innerRadius={60}
                                    outerRadius={80}
                                    dataKey="amountPeople"
                                    onMouseEnter={onPieEnter}
                                    fill="#FF6347"
                                />
                            </PieChart>
                        }
                    </GraphicsSaveStyle>

                    <ButtonSaveStyle>
                        <button onClick={handleClick}>Voltar</button>
                        <button onClick={remove}>Excluir</button>
                    </ButtonSaveStyle>
                        
                    </ShowSavedStyle>
                </SaveReportBehind>

            :undefined}
    </Fragment>
       
    );
}

export default SavedGraphics;