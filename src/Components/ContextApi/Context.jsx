import React, { createContext, useState } from 'react'


export const AppContext = createContext();


const AppContextProvider = ({ children }) => {
	const [report, setReport] = useState([])
	const [saveNameReportState,setSaveNameReportState] = useState(false);
	
	const saveReport = save => {
		const newReport = {
				id: report.length+ 1,
				name: save.name,
				stats: save.stats
			}
		
		setReport([...report,newReport]);
	}
	   console.log("report Save",report)
	return (
		<AppContext.Provider value={{ report, saveReport,saveNameReportState,setSaveNameReportState}}>
			{children}
		</AppContext.Provider>
	)

}

export default AppContextProvider;