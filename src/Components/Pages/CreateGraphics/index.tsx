import React, {useState} from 'react'
import { GraphicsStyle, ButtonsTopStyle, PositionStyle, CheckBoxStyle, BoxPositionStyle, BottomPositionStyle } from '../../Assets/styled-components/StylesCreateGraphics';
import { ButtonStyle } from '../../Assets/styled-components/StylesCreateReportComponent';
import {BarChart,XAxis,YAxis,Tooltip,Legend,Bar,PieChart,Pie} from 'recharts'

import { renderActiveShape } from './ageGraphics'

function CreateGraphics () {
	const datap = [
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
		{
			"name": "Março",
			"pagas": 400,
			"pendentes":60,
			"vencidas":20
		},
		{
			"name": "Abril",
			"pagas": 1500,
			"pendentes":900,
			"vencidas":800
		},
		{
			"name": "Maio",
			"pagas": 2000,
			"pendentes":0,
			"vencidas":200
		},
		{
			"name": "Junho",
			"pagas": 2400,
			"pendentes":200,
			"vencidas":2200
		},
		{
			"name": "Julho",
			"pagas": 200,
			"pendentes":600,
			"vencidas":150
		}
	] 

	const data01 = [
		{
			"name": "Group A",
			"value": 400
		},
		{
			"name": "Group B",
			"value": 300
		},
		{
			"name": "Group C",
			"value": 300
		},
		{
			"name": "Group D",
			"value": 200
		},
		{
			"name": "Group E",
			"value": 278
		},
		{
			"name": "Group F",
			"value": 189
		}
	];
	const data02 = [
		{
			"name": "Group A",
			"value": 2400
		},
		{
			"name": "Group B",
			"value": 4567
		},
		{
			"name": "Group C",
			"value": 1398
		},
		{
			"name": "Group D",
			"value": 9800
		},
		{
			"name": "Group E",
			"value": 3908
		},
		{
			"name": "Group F",
			"value": 4800
		}
	];

	const data03 = [
		{
			"name": "Graça Silva",
			"gender": "F",
			"age": 20,
			"city": "MG"
		},
		{
			"name": "Sergio Silva",
			"gender": "M",
			"age": 32,
			"city": "SP"
		},
		{
			"name": "Sergio Silva",
			"gender": "M",
			"age": 32,
			"city": "SP"
		}
	];


	//tests
	//logica para o dunnet
	/**
	 *   mapear data03, se F, women =+ 1, senao, men =+1, = 1o grafico de sexo
	 * 	 mapear data04, se age, 
	 */
	//age
	const dataAge = [
		{ name: 'Group A', value: 400 }, 
		{ name: 'Group B', value: 300 },
		{ name: 'Group C', value: 300 }, 
		{ name: 'Group D', value: 200 },
	  ];
	  const dataAge2 = [
		{ name: 'A', value: 10 },
		{ name: 'A', value: 29 },
		{ name: 'B', value: 30 },
		{ name: 'B', value: 30 },
		{ name: 'B', value: 15 },
		{ name: 'B', value: 53 },
		{ name: 'B', value: 53 },
		{ name: 'C', value: 11 },
		{ name: 'C', value: 26 },
		{ name: 'D', value: 17 },
		{ name: 'D', value: 50 },
	  ];


	//ja tava
	
	const [graphic, setgraphic] = useState("1")
	
	function handleClick(e){
		setgraphic(e.target.id);
	}
	
	console.log(graphic)



	//AGEE
	/////////////////////////////////////////////////////////////////////////////////////
	const data = [
		{ name: 'Idade: 18-28', value: 400 },
		{ name: 'Idade: 29-39', value: 600 },
		{ name: 'Idade: 40-50', value: 300 },
		{ name: 'Idade: 51-61', value: 200 },
		{ name: 'Idade: 62-72', value: 30 },
		{ name: 'Idade: 73-83', value: 20 },
		{ name: 'Idade: 83-93', value: 10 },
		{ name: 'Idade: 93+', value: 0 },
	  ];
	  
	const [state, setState] = useState(0);
	
	const onPieEnter = (data, index) => {
		setState(index);
	};
	//https://recharts.org/en-US/examples/CustomActiveShapePieChart
	//json-server --watch public/data/db.json
	/////////////////////////////////////////////////////////////////////////////////////
	return (
      <div>
          <PositionStyle>
        		<ButtonsTopStyle>
					<button id = "1" onClick = {handleClick}>Barra</button>
					<button id = "2" onClick = {handleClick}> Donnuts</button>
				</ButtonsTopStyle>
				<GraphicsStyle>
					{graphic === "1"?
					<BarChart width={730} height={250} fontSize={"1.5em"} data={datap}>
						<XAxis dataKey="name"  />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="pagas" fill="#A7E4F2" />
						<Bar dataKey="pendentes" fill="#ff1d92" />
						<Bar dataKey="vencidas" fill="#2D9AA6" />
					</BarChart>: undefined 
					}

					{graphic === "2"? //pie 1 = meio, pie 2 = fora
					/*
					<PieChart width={400} height={400}>
						<Pie data={dataAge} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" label />
						<Pie data={dataAge2} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
						<Tooltip />
					</PieChart>: undefined
					*/
					<PieChart width={600} height={400}>
					<Pie
					  activeIndex={state}
					  activeShape={renderActiveShape}
					  data={data}
					  cx={290}
					  cy={200}
					  innerRadius={60}
					  outerRadius={80}
					  fill="#8884d8"
					  dataKey="value"
					  onMouseEnter={onPieEnter}
					/>
				  	</PieChart>:undefined
					}
				
				</GraphicsStyle>	
						
					
					<BottomPositionStyle>
						
						{graphic === "2"?
							<CheckBoxStyle>
								<span>Filtrar Donnuts:</span>
							<BoxPositionStyle>
								<input type = "checkbox" id = "1" checked/>
								<label htmlFor="1"> Idade</label>
							</BoxPositionStyle>
							
							<BoxPositionStyle>
								<input type = "checkbox" id = "2"/>
								<label htmlFor="2"> Localidade</label>
							</BoxPositionStyle>
							
							<BoxPositionStyle>
								<input type = "checkbox" id = "3"/>
								<label htmlFor="3"> Sexo</label>
							</BoxPositionStyle>
						</CheckBoxStyle>: undefined}
						
						<ButtonStyle>
						<button>Salvar</button>
						</ButtonStyle>
						
					</BottomPositionStyle>
          

				</PositionStyle>
      </div>
    )
}

export default CreateGraphics;