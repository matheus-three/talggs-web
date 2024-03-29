import React, { useState, Fragment, useContext } from 'react';
import { SaveReportsStyle,ButtonSaveStyle, ShowSavedStyle } from '../../../Assets/styled-components/StylesSavedComponent';
import { SaveReportBehind, StatsStyle} from '../../../Assets/styled-components/StylesCreateReportComponent'
import { AppContext } from '../../../ContextApi/Context';

interface Iprops {
		name: string;
		id: string
}

function SavedReports (props: Iprops) {
    const [showReport,setShowReport] = useState(false);
	const {report, removeReport} = useContext(AppContext)
	
    function handleClick () {
        showReport?
			setShowReport(false)
			:
			setShowReport(true)
		}

		const remove = () => {
			removeReport(props);
			handleClick();
		}
    	return (
		<Fragment>
			<SaveReportsStyle onClick = {handleClick}>{props.name} </SaveReportsStyle>
	
			{showReport?
			<SaveReportBehind top = {"72px"} left = {"0px"} height = {"20vh"} back = {"rgba(0,0,0,0.8)"}>
				<ShowSavedStyle>
					<span className="saveTitle">{props.name}</span>
					<StatsStyle width = {"70%"}>
						<table >
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
							{report.map((rep) => {
								if(props.id === rep.id)
								return rep.stats.map((values) => {		
									return(
										<tbody >
												<tr key = {rep.id}>
													<td>{values.cpf}</td>
													<td>{values.name}</td>
													<td>{values.accountNumber}</td>
													<td>{values.fiscalNote}</td>
													<td>{values.dateDue}</td>
													<td>{values.dateLaunch}</td>
													<td>{values.value}</td>
													<td>{values.state}</td>
												</tr>
										</tbody>
									)
								})
								else
								return undefined
							})}
						</table>
					</StatsStyle>
					<ButtonSaveStyle>
						<button onClick = {handleClick}>Voltar</button>
						<button onClick = {remove}>Excluir</button>
					</ButtonSaveStyle>
					
				</ShowSavedStyle>
			</SaveReportBehind>
			:
			undefined
		}
		</Fragment>
           
    );
}

export default SavedReports;