import React, { Fragment, useContext } from 'react'
import { TitleMainStyle, MainStyle, ButtonCreateStyle, ButtonCreateReport } from '../../Assets/StylesMainComponent';
import { AppContext } from '../../ContextApi/Context';
import {Link} from 'react-router-dom'
import SavedGraphics from './SavedGraphics';



function Graphics () {
 const {report} = useContext(AppContext)
 const length = report.length; 
 
 return (
        <Fragment>
         <TitleMainStyle>
          <span>Gráficos da Empresa</span>
         </TitleMainStyle>
         
      <MainStyle>
        {length === 0?
            <span> Não há Gráficos disponiveis</span>
          :
            report.map((report) => {
              return <SavedGraphics/>
            })
        }
      </MainStyle>

      <ButtonCreateStyle>
        <span>Criar Gráfico</span>
        <Link to='/CreateGraphics' style = {{textDecoration: 'none'} }><ButtonCreateReport>+</ButtonCreateReport></Link>
      </ButtonCreateStyle>

    </Fragment>
    )
}

export default Graphics;