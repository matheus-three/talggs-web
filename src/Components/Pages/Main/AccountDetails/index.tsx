import React, { useContext, useState } from 'react'
import { HistoryStyle } from '../../../Assets/StylesMainHistory';
import { StatsStyle } from '../../../Assets/StylesCreateReportComponent';
import { AppContext } from '../../../ContextApi/Context';
import ShowDetails from './ShowDetails';
import { FilterContext } from '../../../ContextApi/ContextFilterState';
import Filter from '../../CreateReport/Filter';
import { useEffect } from 'react';
import { parseISO, isAfter, format } from 'date-fns';



function AccountDetails () {
  const {api,setShowDetails,showDetails} = useContext(AppContext)
  const {mainFilter} = useContext(FilterContext)
  const [id,setId] = useState();
  const[apiFilter,setApiFilter] = useState(api);
  
  const datazo = mainFilter.launch.init;

  console.log("datazo",datazo);
  const data = format(10-15-2020, 'dd/MM/yyyy')

  console.log("data",data)
  function handleClick (element) {
    setId(element.target.id)
    setShowDetails(true);
  }
  useEffect(() => {
    if(mainFilter !== "" && mainFilter.state !== "todas"){
      const apiFilter = api.filter((ap) => {
        return mainFilter.state === ap.state
      })

      
      setApiFilter(apiFilter)
    }else{
      setApiFilter(api);
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
              <tbody key={stats.id}>
                <tr onClick = {handleClick}>
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