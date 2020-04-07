import React, { Fragment, useContext, useState } from 'react'
import { SaveReportBehind, SaveNameReportStyle } from '../../../../Assets/StylesCreateReportComponent';
import { AppContext } from '../../../../ContextApi/Context';

interface Iprops {
	reportStats: any
}

function SaveReport(props: Iprops) {
	const {saveNameReportState,setSaveNameReportState} = useContext(AppContext)
	const [saveName,setSaveName] = useState("")
	const {saveReport} = useContext(AppContext)
	
	

	function handleSaveClick() {
		setSaveNameReportState(false)
		setSaveName("")
		
		const array = {
			name: saveName,
			stats: props.reportStats
		}
		console.log("array",array)
		saveReport(array)
	}

	
	function handleSave (e) {
		setSaveName(e.target.value);
	}
	return (
		<Fragment>
			{saveNameReportState ?
				<SaveReportBehind top={"0px"} left={"0px"} height={"100%"}>
					<SaveNameReportStyle>
						<span>Nome do Relatório:</span>
						<input type="text" placeholder="Digite o nome do Relatório" onChange={handleSave} />
						<button onClick={handleSaveClick}>Salvar</button>
					</SaveNameReportStyle>
				</SaveReportBehind>
				:
				undefined}
		</Fragment>
	)
}

export default SaveReport;