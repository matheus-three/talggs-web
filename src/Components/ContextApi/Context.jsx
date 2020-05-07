import React, { createContext, useState} from 'react'
import { uniqueId } from '../Consts/UniqueId'

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [report, setReport] = useState([]);
	const [api,setApi] = useState([])
	const [showDetails,setShowDetails] = useState(false)
	const [saveNameReportState,setSaveNameReportState] = useState(false);

	const saveReport = save => {
		const newReport = {
			id: uniqueId('id'),
			name: save.name,
			stats: save.stats
		}
		setReport([...report,newReport]);
	}

  	async function getReportStats() {
		const response = await fetch('http://localhost:3000/reportStats');
		const api = await response.json();
		
		setApi(api)
	}

	const removeReport = save => {
		setReport(report.filter(item => item.id !== save.id));
	}

	return (
		<AppContext.Provider value={{ report, saveReport, saveNameReportState,
		setSaveNameReportState, getReportStats, api, setShowDetails, showDetails, removeReport}}>
			{children}
		</AppContext.Provider>
	)

}

export default AppContextProvider;