import React, { createContext, useState} from 'react'



export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
	
  const [filterStatus,setFilterStatus] = useState(false);
	const [nameStatus,setNameStatus] = useState(false);
	const [cpfStatus,setCpfStatus] = useState(false);
	const [dateLaunchStatus, setDateLaunchStatus] = useState(false);
	const [dateDueStatus, setDateDueStatus] = useState(false)
	const [monthStatus, setMonthStatus] = useState(false)

	
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
			
			case "6": monthStatus?setMonthStatus(false):setMonthStatus(true)
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
			month: ""
	})

	function resetFilter(){
		setValues({
			name: "",
			cpf: "",
			dateLaunch: "",
			dateDue: "",
			paid:false,
			pending:false,
			overdues:false,
		})
	}
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

				case "8": setValues({...values,month:value})
				break;

				default: console.log("fail")
			}
		}
			
		const [mainFilter,setMainFilter] = useState({
				state: 'Todas',
				launch: { 
					launchInit:'', 
					launchFinal: ''
				},
				due: {
					dueInit: '',
					dueFinal: ''
				}
			});
		

			const filterMain = (value,id) => {
				switch(id){
					case "1" : setMainFilter({...mainFilter,state:value})
					break;

					case "2" : setMainFilter({...mainFilter,launch:{...mainFilter.launch,launchInit: value}})
					break;

					case "3" : setMainFilter({...mainFilter,launch:{...mainFilter.launch,launchFinal: value}})
					break;

					case "4" : setMainFilter({...mainFilter,due:{...mainFilter.due,dueInit: value}})
					break;

					case "5" : setMainFilter({...mainFilter,due:{...mainFilter.due,dueFinal: value}})
					break;

					default: console.log("error")
				}
			}
	

	function CompareData (data,init,final) {

		if(!!data && !!init && !!final){
			const split = data.split('/')
			const splitInit = init.split('/')
			const splitFinal = final.split('/')
	
			const transform = new Date(split[2], split[1] - 1, split[0]);
			const transformInit = new Date(splitInit[2], splitInit[1] - 1, splitInit[0]);
			const transformFinal = new Date(splitFinal[2], splitFinal[1] - 1, splitFinal[0]);
			
			return transform >= transformInit && transform <= transformFinal
		} else {
			return console.log("erro nas datas")
		}
	
	}
	
	return (
		<FilterContext.Provider value={{filterState,filterValues,filterMain,CompareData,values,resetFilter,filterStatus,
			nameStatus,cpfStatus,dateDueStatus,dateLaunchStatus,monthStatus,mainFilter}}>
			{children}
		</FilterContext.Provider>
	)
}
export default FilterContextProvider;