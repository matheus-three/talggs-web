import React, { createContext, useState } from 'react'


export const GraphicContext = createContext();

const GraphicsProvider = ({ children }) => {

	// A intencao é, passar esse array por context para Graphic->index, e lá, usar para cada gráfico, seu endpoint
	//ARRAY MINIMIZADO PARA TESTE
		const [graphic, setGraphicData] = useState(
			{			
				dataAccounts: [
					{
						name: "Janeiro",
						pagas: 400,
						pendentes: 600,
						vencidas: 600
					},
				],
			
				dataAge: [
					{ group: 'AC', amountPeople: 100 },
					{ group: 'AL', amountPeople: 2310 },
				],
			
				dataLocation: [
					{ group: 'Homem', amountPeople: 2410 },
					{ group: 'Mulher', amountPeople: 2730 },
				],
			
				dataGender: [
					{ group: 'Idade: 18-28', amountPeople: 400 },
					{ group: 'Idade: 29-39', amountPeople: 600 },
				]
			}
		);

	
		 console.log("data no provider: " + graphic )

		return (
			<GraphicContext.Provider value={{ graphic}}>
				{children}
			</GraphicContext.Provider>
		)	
}
	  

export default GraphicsProvider;

/*

PARA SALVAR DPS


		const saveGraphic = save => {
			const newGraphic = {
				id: graphic.length+ 1,
				name: save.name,
				stats: save.stats
			}
			setGraphicData([...graphic,newGraphic]);
		}


REAL ARRAY

"dataAccounts": [
				{
					"name": "Janeiro",
					"pagas": 400,
					"pendentes":600,
					"vencidas":600
				},
				{
					"name": "Fevereiro",
					"pagas": 800,
					"pendentes":600,
					"vencidas":400
				},
			],
		
			"dataAge": [
				{ group: 'AC', amountPeople: 100 },
				{ group: 'AL', amountPeople: 2310 },
				{ group: 'AP', amountPeople: 120 },
				{ group: 'AM', amountPeople: 320 },
				{ group: 'BA', amountPeople: 120 },
				{ group: 'CE', amountPeople: 3130 },
				{ group: 'ES', amountPeople: 320 },
				{ group: 'GO', amountPeople: 0 },
				{ group: 'MA', amountPeople: 0 },
				{ group: 'MT', amountPeople: 0 },
				{ group: 'MS', amountPeople: 0 },
				{ group: 'MG', amountPeople: 1210 },
				{ group: 'PA', amountPeople: 0 },
				{ group: 'PB', amountPeople: 0 },
				{ group: 'PR', amountPeople: 0 },
				{ group: 'PE', amountPeople: 0 },
				{ group: 'PI', amountPeople: 320 },
				{ group: 'RJ', amountPeople: 10 },
				{ group: 'RN', amountPeople: 0 },
				{ group: 'RS', amountPeople: 3210 },
				{ group: 'RO', amountPeople: 0 },
				{ group: 'RR', amountPeople: 0 },
				{ group: 'SC', amountPeople: 0 },
				{ group: 'SP', amountPeople: 20 },
				{ group: 'SE', amountPeople: 0 },
				{ group: 'TO', amountPeople: 0 },
				{ group: 'DF', amountPeople: 1020 },
			],
		
			"dataLocation": [
				{ group: 'Homem', amountPeople: 2410 },
				{ group: 'Mulher', amountPeople: 2730 },
			],
		
			"dataGender": [
				{ group: 'Idade: 18-28', amountPeople: 400 },
				{ group: 'Idade: 29-39', amountPeople: 600 },
				{ group: 'Idade: 40-50', amountPeople: 300 },
				{ group: 'Idade: 51-61', amountPeople: 200 },
				{ group: 'Idade: 62-72', amountPeople: 30 },
				{ group: 'Idade: 73-83', amountPeople: 20 },
				{ group: 'Idade: 83-93', amountPeople: 10 },
				{ group: 'Idade: 93+', amountPeople: 0 },
			]


*/