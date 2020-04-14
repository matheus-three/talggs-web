import React, { useContext } from "react";
import {
  ShowDetailsStyle,
  CardDetailsStyle,
  TitleStyle,
  DateStyle,
  NameStyle,
  DatePositionStyle,
  DetailsStyle,
} from "../../../../Assets/StylesMainHistory";
import {
  SaveReportBehind,
  StatsStyle,
} from "../../../../Assets/StylesCreateReportComponent";
import { AppContext } from "../../../../ContextApi/Context";
import Logo from "../../../../Assets/Icons/Logo1V - Web.svg";

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
    <SaveReportBehind top={"80px"} left={"0px"} height={"90%"} back={"#f7f6ee"}>
      <button onClick={handleClick}>Voltar</button>
      <ShowDetailsStyle>
        {api.map((stats) => {
          console.log("sta", stats.id);
          if (stats.id == props.id) {
            return (
              <CardDetailsStyle>
                <TitleStyle>
                  <img src={Logo} alt="Logo" />
                  <NameStyle>
                    <span>{stats.name}</span>
                    <span>{stats.cpf}</span>
                  </NameStyle>
                  <div className="value">{stats.value}</div>
                </TitleStyle>
                <DateStyle>
                  <DatePositionStyle>
                    <label> Data de Compra</label>
                    <span>{stats.dateLaunch}</span>
                  </DatePositionStyle>

                  <DatePositionStyle>
                    <label> Data de Vencimento</label>
                    <span>{stats.dateDue}</span>
                  </DatePositionStyle>
                </DateStyle>

              <DetailsStyle>
                <table>
                    <tbody>
                      <th>Produto</th>
                      <th className = "descr">Descrição</th>
                      <th>Qtde</th>
                      <th>ValUnit</th>
                      <th>ValTotal</th>
                    </tbody>
                    {stats.Details.map((prod) => {
                      return ( 
                      <tbody>
                        <td>{prod.product}</td>
                        <td>{prod.description}</td>
                        <td>{prod.quantity}</td>
                        <td>{prod.valUnit}</td>
                        <td>{prod.valTot}</td>
                      </tbody>)
                    })
                  }
                  </table>
              </DetailsStyle>
                
                
              </CardDetailsStyle>
            );
          }
        })}
      </ShowDetailsStyle>
    </SaveReportBehind>
  );
}

export default ShowDetails;
