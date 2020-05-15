import React, { useContext } from "react";
import { ShowDetailsStyle, CardDetailsStyle, TitleStyle, DateStyle,	NameStyle, DatePositionStyle, DetailsStyle } from "../../../../Assets/styled-components/StylesMainHistory";
import { SaveReportBehind } from "../../../../Assets/styled-components/StylesCreateReportComponent";
import { AppContext } from "../../../../ContextApi/Context";
import Logo from "../../../../Assets/Icons/Logo1V - Web.svg";
import { ButtonSaveStyle } from "../../../../Assets/styled-components/StylesSavedComponent";

interface Iprops {
	id: string;
}

function ShowDetails(props: Iprops) {
	const { api, setShowDetails } = useContext(AppContext);

	function handleClick() {
		setShowDetails(false);
	}

	console.log("id", props.id);
	console.log("api", api);

	return (
		<SaveReportBehind top={"80px"} left={"0px"} height={"90%"} back={"#f7f6ee"} style={{flexDirection: 'column'}}>
			
			<ShowDetailsStyle>
				{api.map((stats,index) => {

					if (stats.id === Number(props.id)) {
						return (
							<CardDetailsStyle key = {index}>
								<TitleStyle>
									<img src={Logo} alt="Logo" />
									<NameStyle >
										<span>{stats.name}</span>
										<span>{stats.cpf}</span>
									</NameStyle>
									<DateStyle>
										<DatePositionStyle>
											<label>Compra</label>
											<span>{stats.dateLaunch}</span>
										</DatePositionStyle>

										<DatePositionStyle>
											<label>Vencimento</label>
											<span>{stats.dateDue}</span>
										</DatePositionStyle>
									</DateStyle>
								</TitleStyle>

								<div className="value">Total: {stats.value}</div>

							<DetailsStyle>
								<table>
										<thead>
											<tr>
												<th>Produto</th>
												<th className = "descr">Descrição</th>
												<th>Qtde</th>
												<th>ValUnit</th>
												<th>ValTotal</th>
											</tr>
										</thead>
										{stats.Details.map((prod) => {
											return ( 
											<tbody key = {prod.id}>
												<tr>
													<td>{prod.product}</td>
													<td>{prod.description}</td>
													<td>{prod.quantity}</td>
													<td>{prod.valUnit}</td>
													<td>{prod.valTot}</td>
												</tr>
											</tbody>
										 )
										})
									}
								</table>
							</DetailsStyle>
								
								
							</CardDetailsStyle>
						);
					}else{
						return undefined
					}
				})}
			</ShowDetailsStyle>
			<ButtonSaveStyle style={{marginBottom: "0px"}}>
				<button onClick={handleClick}>Voltar</button>
			</ButtonSaveStyle>
		</SaveReportBehind>
	);
}

export default ShowDetails;
