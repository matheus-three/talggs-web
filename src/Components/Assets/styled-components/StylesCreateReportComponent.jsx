import styled from 'styled-components'


//Tela Criar Relatório

//engloba o componente de filtro com o de stats do relatórios
export const Container = styled.div`
	display: flex;
	height: 89vh;
		
@media only screen and (max-width: 600px) {
	  flex-direction: column;
	}
`

//Estilo do componente Filtro
export const FilterStyle = styled.div`
  height: auto;
  width: 20vw;
  background-color: #f7f6ee;
  border-right: 2px solid #CCC;
  padding: 30px 20px;

  span {
	font-size: 2.6em;
	color: #BEBCBC;
	font-weight: 700;
  }

  button {
    width: 100%;
    margin: 30px 0px;
    font-size: 1.8em;
    border: none;
    background-color: transparent;
    text-align: left;
    cursor: pointer;
    display: block;
    color: #2D4F6C;
    font-weight: bold;
  }

	button:hover, button:focus {
		color: #2D9AA6;
		border: 0;
		outline: 0;
	}

	input {
		border: 1px solid #CCC;
		border-radius: 10px;
		width: 100%;
		padding: 5px;
		cursor: text;
		font-size: 1.8em;
		color: #2D4F6C;
	}

	

	@media only screen and (max-width: 1200px){
		width: 26vw; 

		input {
			font-size: 1.5em;
		}
	}

	@media only screen and (max-width: 850px){
		width: 27vw;
		border-right: 1px solid #CCC;

		span {
			font-size: 1.8em;
		}
		
		button {
			font-size: 1.5em;
		}

		input {
			font-size: 1.2em;
		}

		/*button.btn-grafico {
			height: 50px;
			margin-top: 20px;
			text-align: center;
		}*/ 
	}

	@media only  screen and (max-width: 600px) {
		width: 100vw;
		height: auto;
		border-right: none;
		border-bottom: 1px solid #CCC;

		span {
			display: block;
			font-size: 1.2em;
		}
	}

`
//Estilo do campo filtro (Status).
export const FilterStatusStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	-webkit-box-align: start;
	align-items: flex-start;
	padding: 5px;
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 10px;
	position: relative;
	font-size: 1.8em;
	color: #2D4F6C;
	
`

export const OptionFilterStatusStyle = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 5px;

	input {
		width: 50px;		
		height: 30px;
		cursor: pointer;
	}

	@media only screen and (max-width: 1200px){
		input {
			width: 25px;
		}
	}

	@media only screen and (max-width: 850px) {
		input {
			width: 20px;
		}

		label {
			font-size: .8em;
    		margin-left: 10px;
		}
	}

`
//Estilo que engloba titulo, stats e botões.
export const ReportStyle = styled.div`
  margin-left: 3vw;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;


	@media only screen and (max-width: 600px){
		width: 100%;
	}
`
//Titulo do relatório
export const TitleReportStyle = styled.div`
	height:auto;
	margin-top: 10vh;
	font-size: 3.5em;
	color: #101D25;
	letter-spacing: 2px;
	font-weight: bold; 

	@media only screen and (max-width: 850px) {
		font-size: 2.5em;
		margin-top: 5vh;
	} 

	@media only screen and (max-width: 600px) {
		font-size: 2em;
	}
`
//Estilo da tabela de status do relatório.
export const StatsStyle = styled.div`
	align-items: start;
	height: 50vh;
	max-width:${props => props.width};
	overflow: scroll;
	box-shadow: 0px 0px 1px;
	font-size: 1.5em;
	
	::-webkit-scrollbar-track {
		background-color: #f7f6ee;
	}

	::-webkit-scrollbar {
		width: 6px;
		background: #f7f6ee;
	}

	::-webkit-scrollbar-thumb {
		background: #ccc;
	}

         
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		/*width:600px; 
		padding:10px;*/
	}

 	th {
		border-bottom: 1px solid #ccc;
		min-width: 200px;
		text-align: justify;
		padding: 8px;
		color: #BEBCBC;
		font-size: 1.2em;
	}

	th.nome {
    	min-width: 250px;
	}
				
	td { 
		padding: 15px 8px;
		color: #232F40;
    	text-align: justify;			
  }

	@media only screen and (max-width: 850px){
		margin-right: 15px;
		
		table {
		width:200px;
		}

		th {
			min-width:180px;
			font-size: 1em;
		}

		th.nome,th.cpf{
			min-width:180px;
		}

		td{
			font-size:0.8em;
			padding:13px;
		}
	}

`

//Estilo dos botões da tela de criar relatório
export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
    
	button {
		background-color: #F2A950;
		width: 12vw;
		height: 7.5vh;
		border: none;
		margin: 0px 40px;
		border-radius: 50px;
		color: #f7f6ee;
		opacity: 0.8;
		cursor: pointer;
		font-size: 2.3em;
		font-weight: bold;
		transition: all .5s ease-out;
	}

	button:hover {
		opacity: 1;
	}

	@media only screen and (max-width: 1200px) {
		button {
			margin-top: 50px;
			width: 20vw;
			height: 6vh;
			font-size: 2em;
			opacity: 1;
		}
	}

	@media only screen and (max-width: 850px){
		button{
			width: 18vw;
			font-size: 1.5em;
			margin-top: 0px;
		} 
	}  
`
//Fundo cinza do pop-up para salvar o relatório.
export const SaveReportBehind = styled.div`
	width: 100vw;
	height:${props => props.height};
	background-color:${props => props.back};
	position: absolute;
	left:${props => props.left};
	top:${props => props.top};
	display: flex;
	justify-content: center;
	align-items: center;
`

//Pop-up para salvar Relatório
export const SaveNameReportStyle = styled.div`
	width: 40vw;
	height: 30vh;
	padding: 30px;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	-webkit-box-pack: center;
	justify-content: space-around;
	-webkit-box-align: center;
	align-items: center;
	border-radius: 10px;
	
	span {
		width: 100%;
		margin-bottom: 30px;
		font-size: 2em;
		border: none;
		background-color: transparent;
		text-align: left;
		cursor: pointer;
		display: block;
		color: #101D25;
		font-weight: bold;
	}

	input{
		width: 85%;
		font-size: 1.8em;
		color: #2D4F6C;
		border: none;
		border-bottom: 1px solid #A4A4A7;
		margin-bottom: 20px;
		padding: 10px;

		:focus {
			outline: 0;
		}
	}

	button {
		width: 8vw;
		height: 6vh;
		font-size: 1.8em;
		font-weight: bold;
		background-color: #F2A950;
		color: #ffffff;
		border: none;
		border-radius: 50px;
		cursor: pointer;

		:focus {
			outline: 0;
		}
	}

	
	@media only screen and (max-width: 1200px) {
		width: 65vw;
		height: 25vh;

		button {
			width: 16vw;
			height: 5vh;
		}
	}

`
