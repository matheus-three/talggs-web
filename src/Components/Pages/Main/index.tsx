import React, { Fragment } from 'react'
import { Title, MainStyle, SaveReportsStyle, Button } from '../../Assets/Styles'
import SaveReports from './SaveReports'
import {Link} from 'react-router-dom'

function Main (){
   
   function handleClick(){
       
      
   }
   
    return(
        <Fragment>
            <Title top = {"130px"} left = {"40px"}>
        <span>Relatórios da Empresa</span>
      </Title>
      <MainStyle>
        <SaveReports name = {"Mensal"}/>
        <SaveReports name = {"Mensal"}/>
        <SaveReports name = {"Mensal"}/>
        
          
      </MainStyle>
      
      <Title top ={"80px"} left = {"1140px"}>
        <span>Criar novo Relatório</span>
      </Title>
      <Link to = '/createReport'><Button onClick ={handleClick} >+</Button></Link>
      
    
        </Fragment>
    )
}

export default Main;