import React, { createContext, useState } from 'react'


export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
    
  const [filterStatus,setFilterStatus] = useState(false);
	const [nameStatus,setNameStatus] = useState(false);
	const [cpfStatus,setCpfStatus] = useState(false);
	const [dateLaunchStatus, setDateLaunchStatus] = useState(false);
	const [dateDueStatus, setDateDueStatus] = useState(false)
	
	const filterState = id => {
	
		switch(id){
			case "1": dateLaunchStatus?setDateLaunchStatus(false):setDateLaunchStatus(true)
			break;

			case "2": dateDueStatus?setDateDueStatus(false):setDateDueStatus(true)
			break;

			case "3": cpfStatus?setCpfStatus(false):setCpfStatus(true)
			break;

			case "4": nameStatus?setNameStatus(false):setNameStatus(true)
			break;
			
			case "5": filterStatus?setFilterStatus(false):setFilterStatus(true)
			break;

			default: console.log("fail")
			break;
		}
	}

	const [values,setValues] = useState({
			name: "",
			cpf: "",
			dateLaunch: "",
			dateDue: "",
			paid:false,
			pending:false,
			overdues:false,
	})

	const filterValues = (value,id) => {
			switch(id){
				case "1":	setValues({...values,dateLaunch:value})
				break;
				
				case "2":	setValues({...values,dateDue:value})
				break;
				
				case "3":	setValues({...values,cpf:value })
				break;

				case "4":	setValues({...values,name:value })
				break;

				case "5":	setValues({...values,paid:value})
				break;

				case "6": setValues({...values,pending:value})
				break;

				case "7": setValues({...values,overdues:value})
				break;

				default: console.log("fail")
			}
		}
			
		const [mainFilter,setMainFilter] = useState({
				state: '',
				launch: { 
					init:'', 
					until: ''
				},
				due: {
					init: '',
					due: ''
				}
			});
		

			const filterMain = (value,id) => {
				switch(id){
					case "1" : setMainFilter({...mainFilter,state:value})
					break;

					case "2" : setMainFilter({...mainFilter,launch:{...mainFilter.launch,init: value}})
					break;

					case "3" : setMainFilter({...mainFilter,launch:{...mainFilter.launch,until: value}})
					break;

					case "4" : setMainFilter({...mainFilter,due:{...mainFilter.launch,init: value}})
					break;

					case "5" : setMainFilter({...mainFilter,due:{...mainFilter.launch,until: value}})
					break;

					default: console.log("error")
				}
			}
	
	
	return (
		<FilterContext.Provider value={{filterState,filterValues,filterMain,values,filterStatus,
			nameStatus,cpfStatus,dateDueStatus,dateLaunchStatus,mainFilter}}>
			{children}
		</FilterContext.Provider>
	)
}
export default FilterContextProvider;