import React, { useState } from "react"
import { FilterStyle, OptionFilterStatusStyle, FilterStatusStyle } from "../../../Assets/Styles";


function Filter () {
	const [filterStatus,setFilterStatus] = useState(false);
	const [nameStatus,setNameStatus] = useState(false);
	const [cpfStatus,setCpfStatus] = useState(false);
	const [dateLaunchStatus, setDateLaunchStatus] = useState(false);
	const [dateDueStatus, setDateDueStatus] = useState(false)

	function handleStatusClick () {
		filterStatus?
			setFilterStatus(false)
		:
			setFilterStatus(true)
	}

	function handleNameClick () {
		nameStatus?
			setNameStatus(false)
		:
			setNameStatus(true)
	}

	function handleCpfClick () {
		cpfStatus?
			setCpfStatus(false)
		:
			setCpfStatus(true)
	}

	function handleDateLaunchClick () {
		dateLaunchStatus?
			setDateLaunchStatus(false)
		:
			setDateLaunchStatus(true)
	}

	function handleDateDueClick () {
		dateDueStatus?
			setDateDueStatus(false)
		:
			setDateDueStatus(true)
	}

	return(
        <FilterStyle>
            <span>Filtrar por:</span>
						<button onClick = {handleDateLaunchClick}>Dta Lançamento</button>
            	{dateLaunchStatus?<input type = "date"></input>:undefined}
            <button onClick = {handleDateDueClick}>Dta Vencimento</button>
            	{dateDueStatus?<input type = "date"></input>:undefined}
            <button onClick = {handleCpfClick}>CPF</button>
            	{cpfStatus?<input type="text" placeholder = "Digite o CPF"/>:undefined}
            <button onClick = {handleNameClick}>Nome</button>
            	{nameStatus?<input type="text" placeholder = "Digite o Nome"/>:undefined}
						<button onClick = {handleStatusClick}>Status</button>
							{filterStatus?
								<FilterStatusStyle>
									<OptionFilterStatusStyle>
										<label>Pago</label>
										<input type="checkbox" value = "Pago"/>
									</OptionFilterStatusStyle>	
										
									<OptionFilterStatusStyle>
										<label>Pendente</label>
										<input type="checkbox" value = "Pendente"/>
									</OptionFilterStatusStyle>	
										
									<OptionFilterStatusStyle>
										<label>Vencido</label>
										<input type="checkbox" value = "Vencido"/>
									</OptionFilterStatusStyle>	
								</FilterStatusStyle>
								:
								undefined
								}
								
					
            <button className = "btn-grafico">Acrescentar Gráfico</button>
        </FilterStyle>
    );
}

export default Filter;