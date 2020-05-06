import React, { Fragment, useContext } from 'react'
import { TitleMainStyle, MainStyle, ButtonCreateStyle, ButtonCreateReport } from '../../Assets/styled-components/StylesSavedComponent';
import {Link} from 'react-router-dom'
import SavedGraphics from './SavedGraphics';
import { GraphicContext } from '../../ContextApi/ContextGraphics';

function Graphics () {
 const {arraySavedGraphics} = useContext(GraphicContext)
 const length = arraySavedGraphics.length; 
 
 return (
    <Fragment>
         <TitleMainStyle>
         	<span>Gráficos da Empresa</span>
         </TitleMainStyle>
         
		<MainStyle>
			{length === 0?
				<span> Não há Gráficos disponíveis</span>
			:
				arraySavedGraphics.map((arraySavedGraphics) => {
					return <SavedGraphics key = {arraySavedGraphics.id} name = {arraySavedGraphics.name} id = {arraySavedGraphics.id} graphicType = {arraySavedGraphics.graphicType} filter = {arraySavedGraphics.filter} saved = {arraySavedGraphics.saved}/>
				})
			}
		</MainStyle>

		<ButtonCreateStyle>
			<span>Criar Gráfico</span>
			<Link to='/CreateGraphics' style = {{textDecoration: 'none'}}><ButtonCreateReport>+</ButtonCreateReport></Link>
		</ButtonCreateStyle>

    </Fragment>
	)
}

export default Graphics;