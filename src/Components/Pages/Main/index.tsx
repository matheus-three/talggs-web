import React, { Fragment } from 'react'
import { Title, MainStyle, SaveReportsStyle, Button } from '../../Assets/Styles'
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
      <Title top={"130px"} left={"40px"}>
        <span>Relatórios da Empresa</span>
      </Title>
      <MainStyle>
        {
          array.map((batata) => {
              return(
                <SaveReports name= {batata.name}/>
              )
          })
        }
      
      </MainStyle>
      
      <Title top={"80px"} left={"1140px"}>
        <span>Criar novo Relatório</span>
      </Title>
      
      <Link to='/createReport' style = {{textDecoration: 'none'} }><Button>+</Button></Link>
    </Fragment>
  )
}

export default Main;