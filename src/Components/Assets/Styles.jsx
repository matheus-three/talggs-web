import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

//CSS inicial
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    background: #f7f6ee;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;;
  }
`;



//Header Genérico 
export const HeaderStyle = styled.div`
  height: 80px;
  width:100%;
  font-size: 1.4em;
  background-color: #232f40;
  display:flex;
  align-items: center;
    
  img {
    height: 60px;
    width: 60px;
    margin-left: 30px;
	}

  ul {
    display:flex;
    width:80%;
    color: #f7f6ee;
    justify-content: space-around;
    list-style: none;    
  }
    
		/* Responsivo até 800px */
	@media only screen and (max-width: 1200px){
		width:100%;
		font-size: 1em;

		img {
			width: 40px;
			height:40px;
			margin-left:25px;
		}

		ul {
			width:80%;
		}
	}

  @media only screen and (max-width: 600px){
		width:100%;
		font-size: 0.5em;
		height:40px;

		img {
			width: 20px;
			height:20px;
			margin-left:15px;
		}

		ul {
			width:200px;
			margin-left: 10px;
		}
	}
`

//Icone no menu superior do Header para abrir as opções de editar
export const IconEdit = styled.div`
  background-color:#f7f6ee;
  border-radius:2em 5em;
  height:30px;
  width: 50px;
  margin-left: 60px;

  @media only screen and (max-width: 1200px){
    margin-right: 100px;   
  }

	@media only screen and (max-width: 1200px){
    margin-right: 0px;
		margin-left:10px;
		height:20px;
		width:20px;   
  }
`

//Tela de Relatórios Salvos.

//Estilo que engloba os relatórios salvos da tela .
export const MainStyle = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin-top:50px; 

`
//Posicionamento do Titulo dos relatórios
export const TitleMainStyle = styled.div`
  width: 250px;
  height:auto;
  margin-top: 100px;
  margin-left: 60px;
  font-size: 1.4em;    
`
//Estilo de cada relatório salvo.
export const SaveReportsStyle = styled.div`
  background-color:#232f40;
  width:250px;
  height: 80px;
  margin: 0px 60px;
  border-radius:25px;
  display:flex;
  align-items:center;
  justify-content: center;
  color:#f7f6ee;
  margin-bottom:50px;
`
//Posicionamento do Botão de criar relatórios.
export const ButtonCreateStyle = styled.div`
  display:flex;
  justify-content: flex-end;
  margin-right: 100px;
  margin-top: 30px;
  margin-bottom:30px;

  span{
      font-size:1.3em;
      margin:10px;
      display:flex;
      align-items:center;
  }
`
//Botão redondo de criar relatórios.
export const Button = styled.button`
  background-color:#232f40;
  width:70px;
  height:70px;
  font-size:3em;
  border-radius:100%;
  color:#f7f6ee;
  display:flex;
  justify-content:center;
  align-items: center;
  margin-bottom:20px;
`

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
  padding:10px;
   
  span {
    font-size: 1.6em;
  }

  button {
    width:200px;
    margin:10px 40px;
    font-size:1.2em;
    border:none;
    background-color:#f7f6ee;
  }

  button.btn-grafico {
    margin-top:200px;
    border-radius: 25px;
    border: solid #CCC;
    height:100px;
  }
	
/* Responsivo 1200px */
@media only screen and (max-width: 1200px){
	width:300px; 
	font-size:0.7em; 
	
  button {
		width:100px;
    margin:5px 10px;
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
	align-items:flex-start;
	height:260px;
	border-right:none;
	
  button {
		width:100px;
    margin:5px 10px;
	}

	button.btn-grafico {
		height:50px;
		margin-top:20px;
	}
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
		width:90%;
	}

	@media only screen and (max-width: 600px){
		margin-left: 20px;
		width:75%;
		
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
	max-width: 100%;
  overflow: scroll;
         
	table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    border-bottom: 1px solid #dddddd;
    width:600px; 
	}
	
 	th {
  	border: 1px solid #dddddd;
		background-color:#232f40;
		color: #f7f6ee;
		min-width: 200px;
		height: 50px;
  	text-align: center;
  	padding: 8px;    
	}

	th.nome {
    min-width: 250px;
	}
				
	td {
		border-left: 1px solid #dddddd; 
    padding: 20px;
    text-align: center;			
  }

	/* responsivo até 1200px */
	@media only screen and (max-width: 1200px){
		margin-right:30px;
		height:300px;

		table {
		width:300px;
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
		height:150px;

		table {
			width:150px;
		}

		th {
			min-width:90px;
			font-size:0.4em;
			height:20px;
			padding:3px;
		}

		th.nome,th.cpf{
			min-width:90px;
		}

		td{
			font-size:0.4em;
			padding:3px;
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
	height:90%;
	background-color:rgba(0, 0, 0, 0.8);
	position: absolute;
	left:0px;
	display:flex;
	justify-content: center;
	align-items: center;
`

//Pop-up para salvar Relatório
export const SaveReportStyle = styled.div`
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
	}

	button {
		width:90px;
		height:30px;
		background-color:#232f40;
		color:#f7f6ee;
		border:none;
		border-radius:25px;
	}

`



export default GlobalStyle;