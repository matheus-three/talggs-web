import React, { useContext } from "react"
import { FilterStyle, OptionFilterStatusStyle, FilterStatusStyle } from "../../../Assets/styled-components/StylesCreateReportComponent";
import { FilterContext } from "../../../ContextApi/ContextFilterState";
import { months } from "../../../model/months";

function Filter() {
	const {nameStatus,filterStatus,cpfStatus,dateLaunchStatus,dateDueStatus,monthStatus} = useContext(FilterContext)
	const {filterState,filterValues,values} = useContext(FilterContext)
	
	function handleClick (e) {
		filterState(e.target.id)
	}

	function handleChange(e) {
		console.log(e.target.value)
		if(e.target.id >= 5 && e.target.id < 8)
			filterValues(e.target.checked,e.target.id)
		else
			filterValues(e.target.value,e.target.id)
	}

	return (
		<FilterStyle>
			<span>Filtrar por:</span>
			<button id = "4" onClick = {handleClick}>Nome do Cliente</button>
			{nameStatus && <input type="text" placeholder="Digite o Nome" id = "4" onChange = {handleChange}></input>}

			<button id = "3" onClick = {handleClick}>CPF</button>
			{cpfStatus && <input type="text" placeholder="Digite o CPF" id = "3"  onChange = {handleChange}></input>}

			<button id = "1" onClick = {handleClick}>Data Lançamento</button>
			{dateLaunchStatus && <input type="date" id = "1" onChange = {handleChange}></input>}

			<button id = "2" onClick = {handleClick}>Data Vencimento</button>
			{dateDueStatus && <input type="date" id = "2" onChange = {handleChange}></input>}

			<button id = "6" onClick = {handleClick}>Mês de Vencimento</button>
			{monthStatus && 
			<select name="8" id="8" onChange = {handleChange}>
				{months.map((month) => {
					return <option value={month.id}>{month.month}</option>
				})}
			</select>}

			<button id = "5" onClick = {handleClick}>Status</button>
		
			{filterStatus?
			<FilterStatusStyle>
				<OptionFilterStatusStyle>
					<input type="checkbox" id="5"  onClick = {handleChange} disabled = {values.pending || values.overdues} />
					<label>Pago</label>
				</OptionFilterStatusStyle>

				<OptionFilterStatusStyle>
					<input type="checkbox" id="6" onClick = {handleChange} disabled = {values.paid || values.overdues} />
					<label>Pendente</label>
				</OptionFilterStatusStyle>

				<OptionFilterStatusStyle>
					<input type="checkbox" id ="7" onClick = {handleChange} disabled = {values.paid || values.pending}/>
					<label>Vencido</label>
				</OptionFilterStatusStyle>
			</FilterStatusStyle>
			:undefined}
		</FilterStyle>
	);
}

export default Filter;