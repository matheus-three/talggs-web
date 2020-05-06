import React, { Fragment, useContext, useState } from 'react'
import { SaveReportBehind, SaveNameReportStyle } from '../../../../Assets/styled-components/StylesCreateReportComponent';
import { GraphicContext } from '../../../../ContextApi/ContextGraphics';

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
	const [saveName,setSaveName] = useState("")
	const {saveGraphic, arraySavedGraphics} = useContext(GraphicContext)		

	const context: IGraphicContext = useContext(GraphicContext);
	const { graphic } = context;


	function handleSaveClick() {
		setSaveNameGraphicState(false)
		setSaveName("")
			
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
	}

	function handleSave (e) {
		setSaveName(e.target.value);
	}

	return (
		<Fragment>
			{saveNameGraphicState ?
				<SaveReportBehind top={"0px"} left={"0px"} height={"100%"} back = {"rgba(0,0,0,0.8)"}>
					<SaveNameReportStyle>
						<span>Nome do Gráfico:</span>
						<input type="text" placeholder="Digite o nome do Gráfico" onChange={handleSave} />
						<button onClick={handleSaveClick}>Salvar</button>
					</SaveNameReportStyle>
				</SaveReportBehind>
				:
				undefined}
		</Fragment>
	)
}

export default SaveGraphic;