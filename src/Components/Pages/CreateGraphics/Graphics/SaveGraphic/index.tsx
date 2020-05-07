import React, { Fragment, useContext, useState, useEffect, useRef } from 'react'
import { SaveReportBehind, SaveNameReportStyle } from '../../../../Assets/styled-components/StylesCreateReportComponent';
import { GraphicContext } from '../../../../ContextApi/ContextGraphics';
import { ButtonSaveStyle } from '../../../../Assets/styled-components/StylesSavedComponent';

interface IGraphicContext {
    graphic: IGraphic;
}

interface IGraphic {
    dataAccounts: Array<any>
    dataAge: Array<any>
    dataGender: Array<any>
    dataLocation: Array<any>
}

interface Iprops {
	graphicType: any,
	filter: any
}

function SaveGraphic(props : Iprops) {
	const {saveNameGraphicState, setSaveNameGraphicState} = useContext(GraphicContext)
	const [saveName, setSaveName] = useState("")
	const [validation, setValidation] = useState(false)
	const {saveGraphic, arraySavedGraphics} = useContext(GraphicContext)		

	const context: IGraphicContext = useContext(GraphicContext);
	const { graphic } = context;


	//input
	const inputRef = useRef(null);
  	useEffect(() => {
	  if (saveNameGraphicState) {
		inputRef.current.focus();
	  }
	}, [saveNameGraphicState]);


	
	function handleSaveClick(e) {
		setSaveNameGraphicState(false)
		setSaveName("")
		
		if (saveName !== "") {
			setValidation(false);
			
			if (props.graphicType === "1") {
				const array = {
					name: saveName,
					graphicType: props.graphicType,
					filter: "",
					saved: graphic.dataAccounts
				}
				saveGraphic(array)


			} else if (props.filter === "localidade") {
				const array = {
					name: saveName,
					graphicType: props.graphicType,
					filter: props.filter,
					saved: graphic.dataLocation
				}
				saveGraphic(array)
			} else if (props.filter === "idade") {
				const array = {
					name: saveName,
					graphicType: props.graphicType,
					filter: props.filter,
					saved: graphic.dataAge
				}
				saveGraphic(array)
			} else if (props.filter === "sexo") {
				const array = {
					name: saveName,
					graphicType: props.graphicType,
					filter: props.filter,
					saved: graphic.dataGender
				}
				saveGraphic(array)
			}
			setSaveNameGraphicState(false)
		} else {
			setValidation(true);
			setSaveNameGraphicState(true)
		}
		
	}

	function handleSave (e) {
		if (e.target.value !== "") {
			setValidation(false);
		}
		setSaveName(e.target.value);
	}


	return (
		<Fragment>
			{saveNameGraphicState  ?
				<SaveReportBehind top={"0px"} left={"0px"} height={"100%"} back = {"rgba(0,0,0,0.8)"}>
					<SaveNameReportStyle>
						<span>Nome do Gráfico:</span>
						<input id="inputGraphic" type="text" ref={inputRef} placeholder="Digite o nome do Gráfico" onChange={handleSave}/>

						{
							validation ?
							<p className="validateInput">*É necessário inserir um Título</p>
							:undefined
						}

						<ButtonSaveStyle>
							<button onClick={() => [setSaveNameGraphicState(false), setValidation(false)]}>Cancelar</button>
							<button onClick={handleSaveClick}>Salvar</button>
						</ButtonSaveStyle>
					</SaveNameReportStyle>
				</SaveReportBehind>
				:
				undefined}
		</Fragment>
	)
}

export default SaveGraphic;