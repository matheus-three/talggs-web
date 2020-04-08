import React, { createContext, useState } from 'react'


export const GraphicsContext = createContext();


const GraphicsContextProvider = ({ children }) => {
    const [graphic,setGraphic] = useState()
    
    
	return (
		<GraphicsContext.Provider value={{ report, saveReport,saveNameReportState,setSaveNameReportState}}>
			{children}
		</GraphicsContext.Provider>
	)

}

export default AppContextProvider;