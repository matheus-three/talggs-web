import React from 'react'
import { GraphicsStyle, ButtonsTopStyle, PositionStyle, CheckBoxStyle, BoxPositionStyle, BottomPositionStyle } from '../../Assets/StylesCreateGraphics';
import { ButtonStyle } from '../../Assets/StylesCreateReportComponent';


function CreateGraphics () {
    return (
      <div>
          <PositionStyle>
        		<ButtonsTopStyle>
							<button><span>Barra</span></button>
							<button><span>Donnuts</span></button>
							<button><span>Salvos</span></button>
						</ButtonsTopStyle>
						<GraphicsStyle/>

					<BottomPositionStyle>
						<CheckBoxStyle>
							<span>Donnuts</span>
							<BoxPositionStyle>
								<input type = "checkbox" id = "1"/>
								<label htmlFor="1"> Sexo</label>
							</BoxPositionStyle>
							
							<BoxPositionStyle>
								<input type = "checkbox" id = "2"/>
								<label htmlFor="2"> Idade</label>
							</BoxPositionStyle>
							
							<BoxPositionStyle>
								<input type = "checkbox" id = "3"/>
								<label htmlFor="3"> localidade</label>
							</BoxPositionStyle>
						</CheckBoxStyle>

						<ButtonStyle>
						<button>Salvar</button>
						</ButtonStyle>
						
					</BottomPositionStyle>
          

				</PositionStyle>
      </div>
    )
}

export default CreateGraphics;