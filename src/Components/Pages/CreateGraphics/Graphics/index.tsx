import React, { useState, useContext, useEffect } from 'react'
import { colorsGender, colorsAge, GraphicsStyle, ButtonsTopStyle, PositionStyle, CheckBoxStyle, BottomPositionStyle } from '../../../Assets/styled-components/StylesCreateGraphics';
import { ButtonStyle } from '../../../Assets/styled-components/StylesCreateReportComponent';
import {BarChart,XAxis,YAxis,Tooltip,Legend,Bar,PieChart,Pie, Cell, LineChart} from 'recharts'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { renderActiveShape } from './activeShapeGraphic'
import  GraphicsProvider, { GraphicContext } from '../../../ContextApi/ContextGraphics';


const Graphics = () => {
    //ISSO SÃO FUNCOES DOS GRAFICOS NAO ESTA RELACIONADO ---------------------------------------
    const [graphicType, setgraphicType] = useState("1")
	
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
    
    // FIM  ---------------------------------------

    interface IGraphicContext {
        graphic: IGraphic;
    }

    interface IGraphic {
        dataAccounts: Array<any>
        dataAge: Array<any>
        dataGender: Array<any>
        dataLocation: Array<any>
    }


    //AQUI É O CONTEXT 
    const context: IGraphicContext = useContext(GraphicContext);
    const { graphic } = context;
    console.log(graphic);
    console.log(graphic.dataAccounts);


    //E AQUI É UM EXEMPLO MINIMIZADO PARA O GRAFICO Q ESTA ENTRE <GRAPHICSSTYLE>
	const dataAccounts = [
		{
			"name": "Janeiro",
			"pagas": 400,
			"pendentes":600,
			"vencidas":600
		},
		{
			"name": "Fevereiro",
			"pagas": 800,
			"pendentes":600,
			"vencidas":400
		},
    ] 
    
    return (
    <PositionStyle>
        <ButtonsTopStyle>
            <button id="1" className="activeBtn" onClick={handleClick}>Contas</button>
            <button id="2" onClick={handleClick}>Clientes</button>
        </ButtonsTopStyle>

        <GraphicsStyle>
            {graphicType === "1" &&
                <BarChart className="BarChart" width={690} height={300} fontSize={"1.3em"} data={dataAccounts}>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pagas" fill="#2D9AA6" />
                    <Bar dataKey="pendentes" fill="#F2A950" />
                    <Bar dataKey="vencidas" fill="#FF6347" />
                </BarChart>
            }
        </GraphicsStyle>
    </PositionStyle>
    )
}

export default Graphics


/*

<PositionStyle>
    <ButtonsTopStyle>
        <button id="1" className="activeBtn" onClick={handleClick}>Contas</button>
        <button id="2" onClick={handleClick}>Clientes</button>
    </ButtonsTopStyle>
    <GraphicsStyle>
        {graphic === "1" &&
        <BarChart className="BarChart" width={690} height={300} fontSize={"1.3em"} data={data}>
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pagas" fill="#2D9AA6" />
            <Bar dataKey="pendentes" fill="#F2A950" />
            <Bar dataKey="vencidas" fill="#FF6347" />
        </BarChart>
        }

        {graphic === "2" && value === "sexo" &&
        <PieChart width={600} height={400} style={{fontSize: "15px"}}>
            <Pie
                activeIndex={state}
                activeShape={renderActiveShape}
                data={dataGender}
                cx={290}
                text={20}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                dataKey="amountPeople"
                onMouseEnter={onPieEnter}
            >
            {
                data.map((entry, index) => (	
                    <Cell key={`cell-${index}`} fill={colorsGender[index]}/>
                ))
            }
            </Pie>
            
        </PieChart>
        }

        {graphic === "2" && value === "idade" &&
        <PieChart width={600} height={400} style={{fontSize: "15px"}}>
        <Pie
            activeIndex={state}
            activeShape={renderActiveShape}
            data={dataAge}
            cx={290}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            dataKey="amountPeople"
            onMouseEnter={onPieEnter}
            >
            {
                data.map((entry, index) => (	
                    <Cell key={`cell-${index}`} fill={colorsAge[index]}/>
                ))
            }
            </Pie>
        </PieChart>
        }

        {graphic === "2" && value === "localidade" &&
        <PieChart width={600} height={400} style={{fontSize: "15px"}}>
            <Pie
                activeIndex={state}
                activeShape={renderActiveShape}
                data={dataLocation}
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
    {graphic === "2" &&
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
            <button onClick={handleClick}>Salvar</button>
        </ButtonStyle>		
    </BottomPositionStyle>
</PositionStyle>

*/