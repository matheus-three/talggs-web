/*
import React, { useState, useContext, useEffect } from 'react'
import { colorsGender, colorsAge, GraphicsStyle, ButtonsTopStyle, PositionStyle, CheckBoxStyle, BottomPositionStyle } from '../../Assets/styled-components/StylesCreateGraphics';
import { ButtonStyle } from '../../Assets/styled-components/StylesCreateReportComponent';
import {BarChart,XAxis,YAxis,Tooltip,Legend,Bar,PieChart,Pie, Cell, LineChart} from 'recharts'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
*/

import React from 'react'
import  GraphicsProvider from '../../ContextApi/ContextGraphics';
import Graphics from './Graphics/index'


function CreateGraphics () {	
	
	return (
		<GraphicsProvider>
          <Graphics></Graphics>
		</GraphicsProvider>
    )
}

export default CreateGraphics;



/*
OQ TINHA ANTES, NAO MEXE!!!!



//IGNORE
//https://recharts.org/en-US/examples/CustomActiveShapePieChart
//json-server --watch public/data/db.json


const [graphicType, setgraphicType] = useState("1")
	
	function handleClick(e){
		setgraphicType(e.target.id);

		if (document.getElementById("1").classList.contains		('activeBtn')) {
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
	
	+++ 



*/