import React, { Fragment, useContext, useState, useRef, useEffect } from 'react'
import { SaveReportBehind, SaveNameReportStyle } from '../../../../Assets/styled-components/StylesCreateReportComponent';
import { AppContext } from '../../../../ContextApi/Context';
import { ButtonSaveStyle } from '../../../../Assets/styled-components/StylesSavedComponent';

interface Iprops {
	reportStats: any
}

function SaveReport(props: Iprops) {
	const {saveNameReportState, setSaveNameReportState} = useContext(AppContext)
	const [saveName, setSaveName] = useState("")
	const [validation, setValidation] = useState(false)
	const {saveReport} = useContext(AppContext)
		
	//input
	const inputRef = useRef(null);
  	useEffect(() => {
	  if (saveNameReportState) {
		inputRef.current.focus();
	  }
	}, [saveNameReportState]);


	function handleSaveClick() {
		setSaveNameReportState(false)
		setSaveName("")
		
		const array = {
			name: saveName,
			stats: props.reportStats
		}

		if (saveName !== "") {
			setValidation(false);
			saveReport(array)
		} else {
			setValidation(true);
			setSaveNameReportState(true)
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
			{saveNameReportState ?
				<SaveReportBehind top={"0px"} left={"0px"} height={"100%"} back = {"rgba(0,0,0,0.8)"}>
					<SaveNameReportStyle>
						<span>Nome do Relatório:</span>
						<input type="text" ref={inputRef} placeholder="Digite o nome do Relatório" onChange={handleSave} />

						{
							validation ?
							<p className="validateInput">*É necessário inserir um Título</p>
							:undefined
						}

						<ButtonSaveStyle>
							<button onClick={() => [setSaveNameReportState(false), setValidation(false)]}>Cancelar</button>
							<button onClick={handleSaveClick}>Salvar</button>
						</ButtonSaveStyle>
					</SaveNameReportStyle>
				</SaveReportBehind>
				:
				undefined}
		</Fragment>
	)
}

export default SaveReport;
