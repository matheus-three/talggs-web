import React, { Fragment } from 'react'
import { MainStyle, SaveReportsStyle, Button, ButtonCreateStyle, TitleMainStyle } from '../../Assets/Styles'
import SaveReports from './SaveReports'
import { Link } from 'react-router-dom'

function Main() {
  
  const array = [{
   name: "Gabriel",
   cpf: 121313,
   data: "aushahus"
  },{
    name: "Beny",
    cpf: 21212,
    data: "aiaisj"
  },{
    name: "Amanda",
    cpf: 23113,
    data: "ashauhs"
  },{
    name: "lindsay",
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
                <div><SaveReports name= {batata.name}/>
                <SaveReports name= {batata.name}/>
                <SaveReports name= {batata.name}/></div>
                
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