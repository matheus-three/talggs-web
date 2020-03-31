import React, { useState, Fragment } from 'react';
import { SaveReportsStyle, ShowReportStyle, SaveReportBehind, StatsStyle, ButtonSaveReport } from '../../../Assets/Styles';
import Stats from '../../CreateReport/Stats';

interface Iprops {
    name: string;
}

function SaveReports (props: Iprops) {
    const [showReport,setShowReport] = useState(false);
    
    function handleClick () {
        showReport?
					setShowReport(false)
				:
					setShowReport(true)
		}
		
		const reportStats = [{
			cpf: "512.607.178-52",
			name: "Gabriel de Andrade Nunes",
			accountNumber: "21211212121",
			fiscalNote: "3453312312",
			dateDue: "12/03/2020",
			dateLaunch: "02/03/2020",
			value: "R$ 500,00",
			state: "Pendente"
		}, {
			cpf: "512.124.228-52",
			name: "Jorge Wagner",
			accountNumber: "21211212121",
			fiscalNote: "3453312312",
			dateDue: "15/04/2020",
			dateLaunch: "13/05/2020",
			value: "R$ 1.200,00",
			state: "Vencido"
		}, {
			cpf: "332.124.658-12",
			name: "Ariane Matarazzo",
			accountNumber: "33113332121",
			fiscalNote: "3f52415512",
			dateDue: "08/02/2020",
			dateLaunch: "20/03/2020",
			value: "R$ 700,00",
			state: "Pago"
		}, {
			cpf: "332.124.658-12",
			name: "Ariane Matarazzo",
			accountNumber: "33113332121",
			fiscalNote: "3f52415512",
			dateDue: "08/02/2020",
			dateLaunch: "20/03/2020",
			value: "R$ 700,00",
			state: "Pago"
		}, {
			cpf: "332.124.658-12",
			name: "Ariane Matarazzo",
			accountNumber: "33113332121",
			fiscalNote: "3f52415512",
			dateDue: "08/02/2020",
			dateLaunch: "20/03/2020",
			value: "R$ 700,00",
			state: "Pago"
		}, {
			cpf: "332.124.658-12",
			name: "Ariane Matarazzo",
			accountNumber: "33113332121",
			fiscalNote: "3f52415512",
			dateDue: "08/02/2020",
			dateLaunch: "20/03/2020",
			value: "R$ 700,00",
			state: "Pago"
		}, {
			cpf: "332.124.658-12",
			name: "Ariane Matarazzo",
			accountNumber: "33113332121",
			fiscalNote: "3f52415512",
			dateDue: "08/02/2020",
			dateLaunch: "20/03/2020",
			value: "R$ 700,00",
			state: "Pago"
		}]
    return (
						<Fragment>
 							<SaveReportsStyle>    
          	    <button onClick ={handleClick}>{props.name}</button>
        			</SaveReportsStyle>
						
						{showReport?
							<SaveReportBehind top = {"80px"} left = {"0px"} height = {"100%"}>
								<ShowReportStyle>
									<span>{props.name}</span>
									<StatsStyle width = {"70%"}>
										<table>
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
											{reportStats.map((stats) => {
												return (
													<tr>
														<td>{stats.cpf}</td>
														<td>{stats.name}</td>
														<td>{stats.accountNumber}</td>
														<td>{stats.fiscalNote}</td>
														<td>{stats.dateDue}</td>
														<td>{stats.dateLaunch}</td>
														<td>{stats.value}</td>
														<td>{stats.state}</td>
													</tr>
												)
											})}
										</table>
									</StatsStyle>
									<ButtonSaveReport>
										<button>Excluir</button>
										<button onClick = {handleClick}>Voltar</button>
									</ButtonSaveReport>
									
								</ShowReportStyle>
							</SaveReportBehind>
						:
						  undefined
						}
						</Fragment>
           
    );
}

export default SaveReports;