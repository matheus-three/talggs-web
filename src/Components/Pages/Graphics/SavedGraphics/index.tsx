import React, { useState, useContext, Fragment } from 'react'
import { GraphicContext } from '../../../ContextApi/ContextGraphics';
import { SaveNameReportStyle } from '../../../Assets/styled-components/StylesCreateReportComponent';

interface Iprops {
    name: string;
    id: string;
    graphicType: string;
    filter: string;
    saved: []
}


function SavedGraphics (props : Iprops) {
    console.log("Aqui pega?")
    const [showGraphic,setShowGraphic] = useState(false);
	const {arraySavedGraphics} = useContext(GraphicContext)
	
    function handleClick () {
        showGraphic?
            setShowGraphic(false)
            :
            setShowGraphic(true)
		}

		const remove = () => {
			console.log("prop", props.id)
			arraySavedGraphics.splice(arraySavedGraphics.indexOf(props.id),1)
			handleClick();
		}
    return(
        <Fragment>
            <SaveNameReportStyle onclick = {handleClick}>{props.name}</SaveNameReportStyle>

            {showGraphic?
            <h1>oi</h1>
            : undefined
            }
        </Fragment>
    )
}

export default SavedGraphics;