import styled from 'styled-components'


//Tela Criar Relatório

//engloba o componente de filtro com o de stats do relatórios
export const Container = styled.div`
    display: flex;
		width: 90%;
		
@media only screen and (max-width: 600px) {
	  flex-direction: column;
	}
`

//Estilo do componente Filtro
export const FilterStyle = styled.div`
  height:620px;
  width:300px;
  background-color:#f7f6ee;
  border-right: 2px solid #CCC;
  padding:20px;

  span {
    font-size: 1.6em;
  }

  button {
    width:200px;
    margin:10px 40px;
		margin-left:30px;
    font-size:1.2em;
    border:none;
    background-color:#f7f6ee;
		text-align:left;
		cursor:pointer;
  }

	button:hover {
		opacity: 0.5;
	}

	input {
		border:none;
		margin-left:30px;
		background-color:#f7f6ee;
		width:150px;
		padding: 5px;
		cursor:text;
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
//Estilo do campo filtro.
export const FilterStatusStyle = styled.div`
	display:flex;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	margin-left:50px;
	width: 180px;
	height:100px;
	border: 2px solid #ccc;
	position:relative;

	@media only screen and (max-width: 1200px){
		width:120px;
		height:80px;
		font-size:0.8em;
		margin-left:30px;
	}

	
`

export const OptionFilterStatusStyle = styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
	width:120px;
	margin:5px;
	font-size: 1em;

	input {
		width:20px;
		cursor: pointer;
	}

	@media only screen and (max-width: 1200px){
		width:100px;
	}
`
//Estilo que engloba titulo, stats e botões.
export const ReportStyle = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:100px;
  width:75%;

	@media only screen and (max-width: 1200px){
		margin-left: 50px;
		width:100%;
	}

	@media only screen and (max-width: 600px){
		margin-left: 20px;
		width:100%;
		
	}
`
//Titulo do relatório
export const TitleReportStyle = styled.div`
  margin-top:40px;
  margin-left:10px;
  width:350px;
  height:50px;
  font-size:1.4em; 

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
  align-items: center;
  height: 400px;
  max-width:${props => props.width};
  overflow: scroll;
	box-shadow: 4px 4px 4px 4px #ccc;
	cursor:pointer;
	
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
    border-bottom: 2px solid #dddddd;
    width:600px; 
		border-left: 2px solid #dddddd;
		padding:10px;
	}

 	th {
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
		min-width: 200px;
  	text-align: center;
  	padding: 8px;  
		background-color:#232f40; 
		color: #f7f6ee; 
	}

	th.nome {
    min-width: 250px;
	}
				
	td {
		border-bottom: 1px solid #dddddd; 
    padding: 15px;
    text-align: center;			
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
  display:flex;
  justify-content:center;
  margin-top: 20px;
    
	button {
    background-color:#232f40;
    width: 100px;
    height: 50px;
    border:none;
    margin: 0px 40px;
    border-radius:25px;
    color: #f7f6ee;
		opacity:0.9;
		cursor:pointer;
	}

	button:hover {
		opacity:1;
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
	width:100%;
	height:${props => props.height};
	background-color:${props => props.back};
	position: absolute;
	left:${props => props.left};
	top:${props => props.top};
	display:flex;
	justify-content: center;
	align-items: center;
`

//Pop-up para salvar Relatório
export const SaveNameReportStyle = styled.div`
	width:25%;
	height:25%;
	background-color:white;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	border-radius:4px;
	
	span {
		font-size:1.2em;
		margin-right:100px;
	}

	input{
		width:70%;
		height:30px;
		border:none;
		border-bottom:1px solid #ccc;
		margin-bottom:20px;
		padding:10px;
	}

	button {
		width:90px;
		height:30px;
		background-color:#232f40;
		color:#f7f6ee;
		border:none;
		border-radius:25px;
		cursor:pointer;
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
