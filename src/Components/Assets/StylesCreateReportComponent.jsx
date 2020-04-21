import styled from 'styled-components'


//Tela Criar Relatório

//engloba o componente de filtro com o de stats do relatórios
export const Container = styled.div`
    display: flex;
		
@media only screen and (max-width: 600px) {
	  flex-direction: column;
	}
`

//Estilo do componente Filtro
export const FilterStyle = styled.div`
  height: 89vh;
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

	
/* Responsivo 1200px */
@media only screen and (max-width: 1200px){
	width:300px; 
	font-size:0.7em; 
	
  button {
		width:100px;
    margin:5px 10px;
	}

	input {
		width:120px;
		margin-left:10px;
		font-size:1em;
	}

	button.btn-grafico {
		height:50px;
		margin-top:260px;
	}

}

@media only screen and (max-width: 600px){
	width:300px; 
	font-size:0.7em; 
	display:flex;
	flex-direction:column;
	
	height:260px;
	border-right:none;
	
  button {
		width:100px;
    margin:5px 10px;
		text-align:left;
	}

	button.btn-grafico {
		height:50px;
		margin-top:20px;
		text-align:center;
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

	@media only screen and (max-width: 1200px){
		width: 120px;
		height: 80px;
		font-size: 0.8em;
		margin-left: 30px;
	}

	
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
		width: 100px;
	}
`
//Estilo que engloba titulo, stats e botões.
export const ReportStyle = styled.div`
  margin-left: 3vw;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

	@media only screen and (max-width: 1200px){
		margin-left: 50px;
		width: 100%;
	}

	@media only screen and (max-width: 600px){
		margin-left: 20px;
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

		@media only screen and (max-width: 600px){
			margin-top: 0px;
			margin-left:60px;
			font-size:1em;
			width:150px;
			height:25px;
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

	/* responsivo até 1200px */
	@media only screen and (max-width: 1200px){
		margin-right:30px;
		height:300px;
		width:80%;

		table {
		width:200px;
		}

		th {
			min-width:180px;
			font-size:0.7em;
			height:20px;
		}

		th.nome,th.cpf{
			min-width:180px;
		}

		td{
			font-size:0.8em;
			padding:13px;
		}
	}

	@media only screen and (max-width: 600px){
		margin-left:20px;
		height:200px;

		table {
			width:250px;
		}

		th {
			min-width:90px;
			font-size:0.6em;
			height:20px;
			padding:3px;
		}

		th.nome,th.cpf{
			min-width:120px;
		}

		td{
			font-size:0.6em;
			padding:8px;
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
	@media only screen and (max-width: 700px){
		margin-top:10px;
		
		justify-content:none;
		button{
			width:50px;
			height:30px;
			font-size:0.5em;
			margin:0px 10px;
			padding:5px;
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
		border-radius: 30px;
		cursor: pointer;

		:focus {
			outline: 0;
		}
	}

	
	@media only screen and (max-width: 1200px) {
		width:30%;
	}

	
	@media only screen and (max-width: 900px) {
		width:40%;
	}

	@media only screen and (max-width: 600px) {
		width: 70%;

		span {
			margin-right:50px;
		}
	}

`
