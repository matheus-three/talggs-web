import React, { Fragment, useContext } from 'react'
import { MainStyle, ButtonCreateStyle, TitleMainStyle, ButtonCreateReport } from '../../Assets/StylesMainComponent'
import SavedReports from './SavedReports'
import { Link } from 'react-router-dom'
import { AppContext } from '../../ContextApi/Context';

function Main() {
  
  const {report} = useContext(AppContext);
  const length = report.length;
  
  return (
    <Fragment>
         <TitleMainStyle>
          <span>Relatórios da Empresa</span>
         </TitleMainStyle>
         
      <MainStyle>
        {length === 0?
            <span>Não há relatórios disponíveis</span>
          :
            report.map((report) => {
              return <SavedReports name = {report.name} id = {report.id}/>
            })
        }
      </MainStyle>

      <ButtonCreateStyle>
        <span>Criar Relatório</span>
        <Link to='/createReport' style = {{textDecoration: 'none'} }><ButtonCreateReport>+</ButtonCreateReport></Link>
      </ButtonCreateStyle>

    </Fragment>
  )
}

export default Main;