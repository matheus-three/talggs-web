import React, { useState, useContext } from 'react'
import { colorsGender, colorsAge, GraphicsStyle, ButtonsTopStyle, PositionStyle, CheckBoxStyle, BottomPositionStyle } from '../../Assets/styled-components/StylesCreateGraphics';
import { ButtonStyle } from '../../Assets/styled-components/StylesCreateReportComponent';
import {BarChart,XAxis,YAxis,Tooltip,Legend,Bar,PieChart,Pie, Cell, LineChart} from 'recharts'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { renderActiveShape } from './Graphics/activeShapeGraphic'
import { GraphicContext } from '../../ContextApi/ContextGraphics';
import SaveGraphic from './Graphics/SaveGraphic'

interface IGraphicContext {
    graphic: IGraphic;
}

interface IGraphic {
    dataAccounts: Array<any>
    dataAge: Array<any>
    dataGender: Array<any>
    dataLocation: Array<any>
}

const Graphics = () => {
    //context
    const context: IGraphicContext = useContext(GraphicContext);
    const { graphic } = context;
 
    //save
    const { setSaveNameGraphicState } = useContext(GraphicContext);

    //GRAPHIC TYPE
    const [graphicType, setgraphicType] = useState("1")
	
	//CHART
	const [state, setState] = useState(0);
	const onPieEnter = (data, index) => {
		setState(index);
	};

	//RADIO FILTER
	const [value, setValue] = React.useState('sexo');
	const handleChange = (event) => {
	  setValue(event.target.value);    
    };
    
	function handleClick(e){
		setgraphicType(e.target.id);

		if (document.getElementById("1").classList.contains('activeBtn')) {
			document.getElementById("1").classList.remove('activeBtn')
			document.getElementById("2").classList.add('activeBtn')
		} else {
			document.getElementById("1").classList.add('activeBtn')
			document.getElementById("2").classList.remove('activeBtn')
		}
    }
    
	function saveGraphic() {
        setSaveNameGraphicState(true)
	}

    return (
    <PositionStyle>
        <ButtonsTopStyle>
            <button id="1" className="activeBtn" onClick={handleClick}>Contas</button>
            <button id="2" onClick={handleClick}>Clientes</button>
        </ButtonsTopStyle>

        <GraphicsStyle>
            {graphicType === "1" && 
                <BarChart className="BarChart" width={690} height={300} fontSize={"1.3em"} data={graphic.dataAccounts}>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pagas" fill="#2D9AA6" />
                    <Bar dataKey="pendentes" fill="#F2A950" />
                    <Bar dataKey="vencidas" fill="#FF6347" />
                </BarChart>
            }

            {graphicType === "2" && value === "sexo" &&
                <PieChart width={600} height={400} style={{fontSize: "15px"}}>
                    <Pie
                        activeIndex={state}
                        activeShape={renderActiveShape}
                        data={graphic.dataGender}
                        cx={290}
                        text={20}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="amountPeople"
                        onMouseEnter={onPieEnter}
                    >
                    {
                        graphic.dataGender.map((entry, index) => (	
                            <Cell key={`cell-${index}`} fill={colorsGender[index]}/>
                        ))
                    }
                    </Pie>         
                </PieChart>
             }

            {graphicType === "2" && value === "idade" &&
                <PieChart width={600} height={400} style={{fontSize: "15px"}}>
                    <Pie
                        activeIndex={state}
                        activeShape={renderActiveShape}
                        data={graphic.dataAge}
                        cx={290}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="amountPeople"
                        onMouseEnter={onPieEnter}
                        >
                        {
                            graphic.dataAge.map((entry, index) => (	
                                <Cell key={`cell-${index}`} fill={colorsAge[index]}/>
                            ))
                        }
                        </Pie>
                </PieChart>
            }

            {graphicType === "2" && value === "localidade" &&
                <PieChart width={600} height={400} style={{fontSize: "15px"}}>
                    <Pie
                        activeIndex={state}
                        activeShape={renderActiveShape}
                        data={graphic.dataLocation}
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
        </GraphicsStyle>

        <BottomPositionStyle>	
        {graphicType === "2" &&
            <CheckBoxStyle>
                <FormControl component="fieldset">
                <FormLabel component="legend" style={{marginLeft: "5px", color: "#707070"}}>Filtro</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} style={{marginLeft: "5px"}}>
                    <FormControlLabel id="1" value="sexo" control={<Radio style={{color: "#2D9AA6"}}/>} label="Sexo" />
                    <FormControlLabel id="2" value="idade" control={<Radio style={{color: "#2D9AA6"}}/>} label="Idade"/>	
                    <FormControlLabel id="3" value="localidade" control={<Radio style={{color: "#2D9AA6"}}/>} label="Localidade" />
                </RadioGroup>
                </FormControl>
            </CheckBoxStyle>
        }

            <ButtonStyle>
                <button onClick={saveGraphic}>Salvar</button>
            </ButtonStyle>		

            <SaveGraphic graphicType={graphicType} filter={value}></SaveGraphic>

        </BottomPositionStyle>
    </PositionStyle>
    )
}

export default Graphics
