import React, { useContext, useState } from 'react'
import { HistoryStyle } from '../../../Assets/StylesMainHistory';
import { StatsStyle } from '../../../Assets/StylesCreateReportComponent';
import { AppContext } from '../../../ContextApi/Context';
import ShowDetails from './ShowDetails';


function AccountDetails () {
  const {api,setShowDetails,showDetails} = useContext(AppContext)
  const [id,setId] = useState();
 
  function handleClick (element) {
    setId(element.target.id)
    setShowDetails(true);
  }

  
  return (
    <HistoryStyle>
    <StatsStyle width={"80%"}>
        <table>
          <tbody>
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
          </tbody>
          {api.map((stats,index) => {
            return (
              <tbody>
                <tr key={stats.id} onClick = {handleClick}>
                  <td id = {stats.id}>{stats.cpf}</td>
                  <td id = {stats.id}>{stats.name}</td>
                  <td id = {stats.id}>{stats.accountNumber}</td>
                  <td id = {stats.id}>{stats.fiscalNote}</td>
                  <td id = {stats.id}>{stats.dateDue}</td>
                  <td id = {stats.id}>{stats.dateLaunch}</td>
                  <td id = {stats.id}>{stats.value}</td>
                  <td id = {stats.id}>{stats.state}</td>
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