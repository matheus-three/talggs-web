import React, { createContext, useState} from 'react'
import { uniqueId } from '../Consts/UniqueId'
import * as firebase from 'firebase';

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
			const dbh = firebase.firestore();
			const reportRef = dbh.collection("billets-web").doc("L7ilYKFF8lDYNvwIZg2Z");
			
			reportRef.get().then(report => {
				console.log("rep",report.data())
				const {reports} = report.data()
				setApi(reports)
			});
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