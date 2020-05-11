import React, { createContext, useState} from 'react'
import { uniqueId } from '../Consts/UniqueId'

export const RegisterContext = createContext();

const RegisterContextProvider = ({ children }) => {
	const [saveUpdateState, setSaveUpdateState] = useState(false);

	const [register, setRegister] = useState({
        trandingName: "Americanas",
        email: "americanas@america.com",
        cnpj: "99.999.999/9999-99",
        stateInscription: "99.999-9999-9",
        municipalInscription: "99.99.999.9999.999",
        cep: "99999-999",
        number: "9999",
        street: "Pereira da Silva",
        neighborhood: "São luiz",
        city: "Sorocity",
        uf: "SP.",
      });

    async function getRegister() {
		const response = await fetch('');
		const api = await response.json();
		
		setRegister(api)
	}

	const updateRegister = save => {
        const newRegister = {
			id: uniqueId('id'),
			cep: save.cep,
			number: save.number,
			street: save.street,
			neighborhood: save.neighborhood,
			city: save.city,
			uf: save.uf,
		}
		setRegister([...register, newRegister]);
	}

	return (
		<RegisterContext.Provider value={{ register,
		updateRegister, getRegister, setSaveUpdateState, saveUpdateState}}>
			{children}
		</RegisterContext.Provider>
	)

}

export default RegisterContextProvider;