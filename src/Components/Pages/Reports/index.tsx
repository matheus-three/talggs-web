import React, { Fragment, useContext, useEffect } from 'react'
import { MainStyle, ButtonCreateStyle, TitleMainStyle, ButtonCreateReport} from '../../Assets/styled-components/StylesSavedComponent'
import SavedReports from './SavedReports'
import { Link } from 'react-router-dom'
import { AppContext } from '../../ContextApi/Context';
import { FilterContext } from '../../ContextApi/ContextFilterState';
{/*import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';*/}

function Reports() {
  
  const {report,getReportStats} = useContext(AppContext);
  const length = report.length;

  useEffect (() =>  {
    getReportStats();
  },[])


  return (
    <Fragment>
         <TitleMainStyle>
          <span>Relatórios da Empresa</span>
         </TitleMainStyle>
         
      <MainStyle>
        {length === 0?
            <span>Não há Relatórios disponíveis</span>
          :
            report.map((report) => {
              return <SavedReports key = {report.id} name = {report.name} id = {report.id}/>
            })
        }
      </MainStyle>

      <ButtonCreateStyle>
        <span>Criar Relatório</span>
        <Link to='/createReport' style = {{textDecoration: 'none'} }>
        <ButtonCreateReport>+</ButtonCreateReport>
        </Link>
      </ButtonCreateStyle>

    </Fragment>
  )
}

export default Reports;