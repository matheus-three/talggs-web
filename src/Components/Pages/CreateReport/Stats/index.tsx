import React, { Fragment, useState } from 'react'
import { StatsStyle, ButtonStyle, TitleReportStyle, ReportStyle, SaveReportBehind, SaveReportStyle } from '../../../Assets/Styles';
import SaveReport from './SaveReport';


function Stats() {

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

	const [saveState,setSaveState] = useState(false);
	

 function handleClick () {
		saveState?
		 setSaveState(false)
	 :
		 setSaveState(true)
}

function handleSave (e) {
	const name = e.target.value;
	console.log("name",name)
	
}
	return (
		<Fragment>
			<ReportStyle>
				<TitleReportStyle>
					<span>Criar novo Relatório</span>
				</TitleReportStyle>

				<StatsStyle>
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
				<ButtonStyle>
						<button>Imprimir</button>
						<button onClick = {handleClick}>Salvar</button>
				</ButtonStyle>

				{saveState?
					<SaveReportBehind>
						<SaveReportStyle>
							<span>Nome do Relatório:</span>
							<input type="text" placeholder="Digite o nome do Relatório" onChange = {handleSave}/>
							<button onClick = {handleClick}>Salvar</button>
						</SaveReportStyle>
					</SaveReportBehind>
					:
					undefined}

			</ReportStyle>
		</Fragment>

	);
}



export default Stats;