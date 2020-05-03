import React, {useState} from 'react'
import { colorsGender, colorsAge, GraphicsStyle, ButtonsTopStyle, PositionStyle, CheckBoxStyle, BottomPositionStyle } from '../../Assets/styled-components/StylesCreateGraphics';
import { ButtonStyle } from '../../Assets/styled-components/StylesCreateReportComponent';
import {BarChart,XAxis,YAxis,Tooltip,Legend,Bar,PieChart,Pie, Cell, LineChart} from 'recharts'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { renderActiveShape } from './activeShapeGraphic'

//https://recharts.org/en-US/examples/CustomActiveShapePieChart
//json-server --watch public/data/db.json

function CreateGraphics () {	
	const [graphic, setgraphic] = useState("1")
	
	function handleClick(e){
		setgraphic(e.target.id);

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
	


	//DATA QUE VIRÁ DA API
	//Graphic 1
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


	//Graphic 2
	//LOCATION
	const dataLocation = [
		{ group: 'AC', amountPeople: 100 },
		{ group: 'AL', amountPeople: 2310 },
		{ group: 'AP', amountPeople: 120 },
		{ group: 'AM', amountPeople: 320 },
		{ group: 'BA', amountPeople: 120 },
		{ group: 'CE', amountPeople: 3130 },
		{ group: 'ES', amountPeople: 320 },
		{ group: 'GO', amountPeople: 0 },
		{ group: 'MA', amountPeople: 0 },
		{ group: 'MT', amountPeople: 0 },
		{ group: 'MS', amountPeople: 0 },
		{ group: 'MG', amountPeople: 1210 },
		{ group: 'PA', amountPeople: 0 },
		{ group: 'PB', amountPeople: 0 },
		{ group: 'PR', amountPeople: 0 },
		{ group: 'PE', amountPeople: 0 },
		{ group: 'PI', amountPeople: 320 },
		{ group: 'RJ', amountPeople: 10 },
		{ group: 'RN', amountPeople: 0 },
		{ group: 'RS', amountPeople: 3210 },
		{ group: 'RO', amountPeople: 0 },
		{ group: 'RR', amountPeople: 0 },
		{ group: 'SC', amountPeople: 0 },
		{ group: 'SP', amountPeople: 20 },
		{ group: 'SE', amountPeople: 0 },
		{ group: 'TO', amountPeople: 0 },
		{ group: 'DF', amountPeople: 1020 },
	];	  

	//GENDER
	const dataGender = [
		{ group: 'Homem', amountPeople: 2410 },
		{ group: 'Mulher', amountPeople: 2730 },
	];	  

	//AGEE
	const dataAge = [
		{ group: 'Idade: 18-28', amountPeople: 400 },
		{ group: 'Idade: 29-39', amountPeople: 600 },
		{ group: 'Idade: 40-50', amountPeople: 300 },
		{ group: 'Idade: 51-61', amountPeople: 200 },
		{ group: 'Idade: 62-72', amountPeople: 30 },
		{ group: 'Idade: 73-83', amountPeople: 20 },
		{ group: 'Idade: 83-93', amountPeople: 10 },
		{ group: 'Idade: 93+', amountPeople: 0 },
	];
	
	return (
      <div>
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
      </div>
    )
}

export default CreateGraphics;