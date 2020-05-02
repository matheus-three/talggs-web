import React, {useState} from 'react'
import { GraphicsStyle, ButtonsTopStyle, PositionStyle, CheckBoxStyle, BottomPositionStyle } from '../../Assets/styled-components/StylesCreateGraphics';
import { ButtonStyle } from '../../Assets/styled-components/StylesCreateReportComponent';
import {BarChart,XAxis,YAxis,Tooltip,Legend,Bar,PieChart,Pie} from 'recharts'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { renderActiveShape } from './activeShapeGraphic'

//https://recharts.org/en-US/examples/CustomActiveShapePieChart
//json-server --watch public/data/db.json


function CreateGraphics () {
	//ja tava	
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
	


	console.log(graphic)

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
		{ group: 'AC', amountPeople: 0 },
		{ group: 'AL', amountPeople: 20 },
		{ group: 'AP', amountPeople: 10 },
		{ group: 'AM', amountPeople: 0 },
		{ group: 'BA', amountPeople: 220 },
		{ group: 'CE', amountPeople: 137 },
		{ group: 'ES', amountPeople: 20 },
		{ group: 'GO', amountPeople: 0 },
		{ group: 'MA', amountPeople: 10 },
		{ group: 'MT', amountPeople: 935 },
		{ group: 'MS', amountPeople: 20 },
		{ group: 'MG', amountPeople: 1210 },
		{ group: 'PA', amountPeople: 120 },
		{ group: 'PB', amountPeople: 130 },
		{ group: 'PR', amountPeople: 430 },
		{ group: 'PE', amountPeople: 0 },
		{ group: 'PI', amountPeople: 220 },
		{ group: 'RJ', amountPeople: 770 },
		{ group: 'RN', amountPeople: 230 },
		{ group: 'RS', amountPeople: 203 },
		{ group: 'RO', amountPeople: 123 },
		{ group: 'RR', amountPeople: 32 },
		{ group: 'SC', amountPeople: 89 },
		{ group: 'SP', amountPeople: 2930 },
		{ group: 'SE', amountPeople: 220 },
		{ group: 'TO', amountPeople: 320 },
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
	  
	const [state, setState] = useState(0);
	
	const onPieEnter = (data, index) => {
		setState(index);
	};

	//RADIO
	const [value, setValue] = React.useState('idade');

	const handleChange = (event) => {
	  setValue(event.target.value);
	};

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
						<XAxis dataKey="name"  />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="pagas" fill="#A7E4F2" />
						<Bar dataKey="pendentes" fill="#ff1d92" />
						<Bar dataKey="vencidas" fill="#2D9AA6" />
					</BarChart>
					}


					{graphic === "2" && value === "idade" &&
					<PieChart width={600} height={400}>
					<Pie
					  activeIndex={state}
					  activeShape={renderActiveShape}
					  data={dataAge}
					  cx={290}
					  cy={200}
					  innerRadius={60}
					  outerRadius={80}
					  fill="#8884d8"
					  dataKey="amountPeople"
					  onMouseEnter={onPieEnter}
					/>
					</PieChart>
					}

					{graphic === "2" && value === "localidade" && //pie 1 = meio, pie 2 = fora
					<PieChart width={600} height={400}>
					<Pie
						activeIndex={state}
						activeShape={renderActiveShape}
						data={dataLocation}
						cx={290}
						cy={200}
						innerRadius={60}
						outerRadius={80}
						fill="#8884d8"
						dataKey="amountPeople"
						onMouseEnter={onPieEnter}
					/>
					</PieChart>
					}

					{graphic === "2" && value === "sexo" &&
					<PieChart width={600} height={400}>
					<Pie
						activeIndex={state}
						activeShape={renderActiveShape}
						data={dataGender}
						cx={290}
						cy={200}
						innerRadius={60}
						outerRadius={80}
						fill="#8884d8"
						dataKey="amountPeople"
						onMouseEnter={onPieEnter}
					/>
					</PieChart>
					}
				</GraphicsStyle>	
					
				<BottomPositionStyle>	
				{graphic === "2" &&
					<CheckBoxStyle>
						<FormControl component="fieldset">
						<FormLabel component="legend">Filtro</FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel id="1" value="idade" control={<Radio />} label="Idade" />
							<FormControlLabel id="2" value="localidade" control={<Radio />} label="Localidade" />
							<FormControlLabel id="3" value="sexo" control={<Radio />} label="Sexo" />
						</RadioGroup>
						</FormControl>
					</CheckBoxStyle>
				}
					<ButtonStyle>
						<button>Salvar</button>
					</ButtonStyle>		
				</BottomPositionStyle>
			</PositionStyle>
      </div>
    )
}

export default CreateGraphics;