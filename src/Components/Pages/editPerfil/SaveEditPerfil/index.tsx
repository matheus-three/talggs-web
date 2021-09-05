import React, { useState, Fragment, useContext } from 'react'
import { SaveBehind, BoxStyle, ButtonStyle } from '../../../Assets/styled-components/StylesEditPerfil';
import { RegisterContext } from '../../../ContextApi/ContextRegister';

function SaveEditPerfil() {
    const {saveUpdateState, setSaveUpdateState} = useContext(RegisterContext);    
    const [popUp, setpopUp] = useState(false);

    function updateRegister() {
        if (true) {
            setSaveUpdateState(true);
            setpopUp(true);
        } 
    }
    return (
        <Fragment>
            {saveUpdateState ?
                <SaveBehind top={"0px"} left={"0px"} height={"100%"} back = {"rgba(0,0,0,0.8)"}>   
                  <BoxStyle>
						<span style={{textAlign:'center'}}>Tem certeza da mudança?</span>		
						<ButtonStyle>
							<button onClick={() => setSaveUpdateState(false)}>Não</button>
							<button>Sim</button>
						</ButtonStyle>
					</BoxStyle>
                </SaveBehind>
            :undefined
            }
        </Fragment>
    )
}

export default SaveEditPerfil