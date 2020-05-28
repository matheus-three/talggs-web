import React, { useContext, useState } from 'react'
import { HistoryStyle } from '../../../Assets/styled-components/StylesMainHistory';
import { StatsStyle } from '../../../Assets/styled-components/StylesCreateReportComponent';
import { AppContext } from '../../../ContextApi/Context';
import ShowDetails from './ShowDetails';
import { FilterContext } from '../../../ContextApi/ContextFilterState';
import { useEffect } from 'react';



function AccountDetails () {
	const {api, setShowDetails, showDetails} = useContext(AppContext)
	const {mainFilter,CompareData} = useContext(FilterContext)
	const [id,setId] = useState();
	const [apiFilter, setApiFilter] = useState(api);
	
	function handleClick (element) {
		console.log("id",element.target.id)
		setId(element.target.id)
		setShowDetails(true);
	}


	useEffect (() => {
		setApiFilter(api)
	},[api])
	

	useEffect(() => {

		console.log("main",mainFilter)
		if(mainFilter !== ""){
			const state = api.filter((ap) => {
				if(mainFilter.state === 'Todas'){
					return api
				}else {
					return mainFilter.state === ap.state
				}	
			})
			
			if(mainFilter.launch.launchInit !== "" && mainFilter.launch.launchFinal !== "" && mainFilter.launch.launchInit !== 'Invalid date'){

			const dataLaunch = state.filter((ap) => {
					const data = CompareData(ap.dateLaunch,mainFilter.launch.launchInit,mainFilter.launch.launchFinal);
				return data
			})
			setApiFilter(dataLaunch)
		}else {
			if(mainFilter.due.dueInit !== "" && mainFilter.due.dueFinal !== "" && mainFilter.due.dueInit !== 'Invalid date'){
				const dataDue = state.filter((ap) => {
					const data = CompareData(ap.dateDue,mainFilter.due.dueInit,mainFilter.due.dueFinal)
					return data
				})
			
			setApiFilter(dataDue)
		}	else{
			setApiFilter(state)
		}
		}
		}else{
			setApiFilter(api)
		}
	},[mainFilter])
 
	
	
	return (
		<HistoryStyle>
		<StatsStyle width={"80%"}>
				<table>
					<thead>
						<tr>
							<th className="cpf">CPF</th>
							<th className="nome">Nome</th>
							<th className="nBoleto">N° Boleto</th>
							<th className="nf">N° NF</th>
							<th className="dtaVenc">Dta Vencimento</th>
							<th className="dtaLanc">Dta Lançamento</th>
							<th className="valor">Valor</th>
							<th className="status">Status</th>
						</tr>
					</thead>
					{apiFilter.map((stats) => {
						return (
							<tbody key={stats.accountNumber}>
								<tr className="line" onClick = {handleClick}>
									<td id = {stats.accountNumber}>{stats.cpf}</td>
									<td id = {stats.accountNumber}>{stats.name}</td>
									<td id = {stats.accountNumber}>{stats.accountNumber}</td>
									<td id = {stats.accountNumber}>{stats.fiscalNote}</td>
									<td id = {stats.accountNumber}>{stats.dateDue}</td>
									<td id = {stats.accountNumber}>{stats.dateLaunch}</td>
									<td id = {stats.accountNumber}>{stats.value}</td>
									<td id = {stats.accountNumber}>{stats.state}</td>
								</tr>
							</tbody>
						)
					})}
				</table>
			</StatsStyle>

	{showDetails? <ShowDetails id = {id}/> : undefined}
	</HistoryStyle>
	);
}

export default AccountDetails;