import React, { Fragment, useContext, useState, useEffect } from 'react'
import { StatsStyle, ButtonStyle, TitleReportStyle, ReportStyle } from '../../../Assets/styled-components/StylesCreateReportComponent';
import { AppContext } from '../../../ContextApi/Context';
import SaveReport from './SaveReport';
import { FilterContext } from '../../../ContextApi/ContextFilterState';
import {Link} from 'react-router-dom'
import moment from 'moment';

function Stats() {

	const { setSaveNameReportState,api} = useContext(AppContext);
	const { values} = useContext(FilterContext)
	const [filterReport, setFilterReport] = useState(api);

	
	function handleClick() {
		setSaveNameReportState(true)
	}

	function compareDatas (data1,data2) {
		const split1 = data1.split('/')
		const split2 = data2.split('/')

		const split1Transform = +new Date(split1[2], split1[1] - 1, split1[0]);
		const split2transform = +new Date(split2[2], split2[1] - 1, split2[0]);
			
			return split1Transform === split2transform

	}

	 function getMonthDate (data) {
		const split = data.split('/')
	
		const splitTransform = new Date(split[2], split[1] - 1, split[0]);

		return splitTransform.getMonth()
	 }

	 
	useEffect(() => {
			if (values !== "") {
			
		let reportName = api.filter((report) => {
				return report.cpf.substr(0, values.cpf.length) === values.cpf &&
					report.name.substr(0, values.name.length).toLowerCase() === values.name.toLowerCase()
			})

			if(values.dateLaunch !== ""){
				const reportDatesLaunch = reportName.filter((report) => {
					const data = compareDatas(report.dateLaunch, moment(values.dateLaunch).format('DD/MM/YYYY'))
						return data
				})
				if(values.dateDue !== "") {
					const reportDatesDue = reportDatesLaunch.filter((report) => {
						const data = compareDatas(report.dateDue,moment(values.dateDue).format('DD/MM/YYYY'))
						return data
					})

					reportName = reportDatesDue
				} else {
					reportName = reportDatesLaunch
				}
			} else {
				if(values.dateDue !== "") {
					const reportDatesDue = reportName.filter((report) => {
						const data = compareDatas(report.dateDue,moment(values.dateDue).format('DD/MM/YYYY'))
						return data
					})

					reportName = reportDatesDue;
			}
		}

			if(values.month !== ""){
				const reportMonth = reportName.filter((report) => {
					const monthDue = getMonthDate(report.dateDue);
					return Number(values.month) === monthDue
				})

				reportName = reportMonth
			}

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

	}, [values,api])

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
					
					<Link to='/savedReports' style={{ textDecoration: 'none', color: 'white' }}><button> Voltar</button></Link>
					<button onClick={handleClick}>Salvar</button>
					<button >Imprimir</button>
				</ButtonStyle>

				<SaveReport reportStats={filterReport}></SaveReport>

			</ReportStyle>
		</Fragment>

	);
}



export default Stats;