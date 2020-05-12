import React, { Fragment, useContext, useState, useEffect } from 'react'
import { StatsStyle, ButtonStyle, TitleReportStyle, ReportStyle } from '../../../Assets/styled-components/StylesCreateReportComponent';
import { AppContext } from '../../../ContextApi/Context';
import SaveReport from './SaveReport';
import { FilterContext } from '../../../ContextApi/ContextFilterState';
import {Link} from 'react-router-dom'

function Stats() {

	const { setSaveNameReportState,api} = useContext(AppContext);
	const { values } = useContext(FilterContext)
	const [filterReport, setFilterReport] = useState(api);


	function handleClick() {
		setSaveNameReportState(true)
	}

	useEffect(() => {
		if (values !== "") {
			const reportName = api.filter((report) => {
				return report.cpf.substr(0, values.cpf.length) === values.cpf &&
					report.name.substr(0, values.name.length).toLowerCase() === values.name.toLowerCase();
			})

			if (values !== false) {
				const reportStatus = reportName.filter((report) => {
					return values.paid ? report.state === "Pago" :
						values.pending ? report.state === "Pendente" :
							values.overdues ? report.state === "Vencido" :
								report.state === "Pago" || report.state === "Pendente" || report.state === "Vencido"
				})

				setFilterReport(reportStatus)
			} else {
				setFilterReport(api)
			}
		}

	}, [values])


	return (
		<Fragment>
			<ReportStyle>
				<TitleReportStyle>
					<span>Criar novo Relatório</span>
				</TitleReportStyle>

				<StatsStyle width={"100%"}>
					<table>
						<thead>
							<tr>
								<th className="cpf">CPF</th>
								<th className="nome">Nome</th>
								<th className="nBoleto">N° Boleto</th>
								<th className="nf">N° NF</th>
								<th className="dtaVenc">Vencimento</th>
								<th className="dtaLanc">Lançamento</th>
								<th className="valor">Valor</th>
								<th className="status">Status</th>
							</tr>
						</thead>
					
						{filterReport.map((stats) => {
							return (
								<tbody>
									<tr key={stats.id}>
										<td>{stats.cpf}</td>
										<td>{stats.name}</td>
										<td>{stats.accountNumber}</td>
										<td>{stats.fiscalNote}</td>
										<td>{stats.dateDue}</td>
										<td>{stats.dateLaunch}</td>
										<td>{stats.value}</td>
										<td>{stats.state}</td>
									</tr>
								</tbody>
								
							)
						})}
					</table>
				</StatsStyle>
				<ButtonStyle>
					<button><Link to='/savedReports' style = {{textDecoration: 'none'}} />Voltar</button>
					<button onClick={handleClick}>Salvar</button>
					<button>Imprimir</button>
				</ButtonStyle>

				<SaveReport reportStats={filterReport}></SaveReport>

			</ReportStyle>
		</Fragment>

	);
}



export default Stats;