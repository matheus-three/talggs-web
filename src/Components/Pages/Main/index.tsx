import React, { Fragment } from 'react'
import { MainStyle, SaveReportsStyle, Button, ButtonCreateStyle, TitleMainStyle } from '../../Assets/Styles'
import SaveReports from './SaveReports'
import { Link } from 'react-router-dom'

function Main() {
  
  const array = [{
   name: "Data de Lançamento 12/03/2020",
   cpf: 121313,
   data: "aushahus"
  },{
    name: "Contas de Gabriel de Andrade Nunes",
    cpf: 21212,
    data: "aiaisj"
  },{
    name: "Contas com status pago",
    cpf: 23113,
    data: "ashauhs"
  },{
    name: "Contas com valor maior que R$ 500,00",
    cpf: "aushauhs",
    data:"ashuash"
  }
    ]
  
 
  return (
    <Fragment>
         <TitleMainStyle>
          <span>Relatórios da Empresa</span>
         </TitleMainStyle>
         
      <MainStyle>
        {
          array.map((batata) => {
              return(
                <div>
                <SaveReports name= {batata.name}/>
                </div>
                
              )
          })
        }
      </MainStyle>

      <ButtonCreateStyle>
        <span>Criar Relatório</span>
        <Link to='/createReport' style = {{textDecoration: 'none'} }><Button>+</Button></Link>
      </ButtonCreateStyle>
      
      
     

    </Fragment>
  )
}

export default Main;