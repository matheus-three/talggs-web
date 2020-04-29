import React, {useState} from 'react'
import { GraphicsStyle, ButtonsTopStyle, PositionStyle, CheckBoxStyle, BoxPositionStyle, BottomPositionStyle } from '../../Assets/styled-components/StylesCreateGraphics';
import { ButtonStyle } from '../../Assets/styled-components/StylesCreateReportComponent';
import {BarChart,XAxis,YAxis,Tooltip,Legend,Bar,PieChart,Pie} from 'recharts'

function CreateGraphics () {
	const data = [
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
	
	const [graphic, setgraphic] = useState("1")
	
	function handleClick(e){
		setgraphic(e.target.id);
	}
	
	console.log(graphic)
	return (
      <div>
          <PositionStyle>
        		<ButtonsTopStyle>
					<button id = "1" onClick = {handleClick}>Barra</button>
					<button id = "2" onClick = {handleClick}> Donnuts</button>
				</ButtonsTopStyle>
				<GraphicsStyle>
					{graphic === "1"?
					<BarChart width={730} height={250} fontSize={"1.5em"} data={data}>
						<XAxis dataKey="name"  />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="pagas" fill="#A7E4F2" />
						<Bar dataKey="pendentes" fill="#ff1d92" />
						<Bar dataKey="vencidas" fill="#2D9AA6" />
					</BarChart>: undefined 
					}

					{graphic === "2"?
					<PieChart width={1030} height={450}>
						<Pie data={data01} dataKey="value"  nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#A7E4F2" />
						<Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#2D9AA6" label />
					</PieChart>: undefined
					}
				
				</GraphicsStyle>	
						
					
					<BottomPositionStyle>
						
						{graphic === "2"?
							<CheckBoxStyle>
								<span>Filtrar Donnuts:</span>
							<BoxPositionStyle>
								<input type = "checkbox" id = "1"/>
								<label htmlFor="1"> Sexo</label>
							</BoxPositionStyle>
							
							<BoxPositionStyle>
								<input type = "checkbox" id = "2"/>
								<label htmlFor="2"> Idade</label>
							</BoxPositionStyle>
							
							<BoxPositionStyle>
								<input type = "checkbox" id = "3"/>
								<label htmlFor="3"> Localidade</label>
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