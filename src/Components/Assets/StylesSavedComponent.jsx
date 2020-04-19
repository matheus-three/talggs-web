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
	font-family: Helvetica, sans-serif;
	font-size: 14px;
  }
`;



//Header Genérico 
export const HeaderStyle = styled.div`
  height: 11vh;
  width: 100vw;
  font-size: 1.6vw;
  background-color: #2D9AA6;
  display:flex;
  align-items: center;
    
  img {
    height: 90%;
    width: 12%;
    margin-left: 30px;
	}

  ul {
    display: flex;
    width: 50vw;
    color: #f7f6ee;
    justify-content: space-evenly;
	list-style: none;
	margin: auto;
	
	li {
		transition: .3s all;
	}

	li:hover,
	li:active {
		color: #A7E4F2;
    	text-decoration: underline;
	}
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
  background-color: #F7F6EE;
  border-radius: 15px;
  height: 85px;
  width: 85px;
  margin-right: 3vw;
  

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
  	
		span {
			margin-left: 15%;
			font-size: 3em;
			margin-top: 50px;
			color: #ddd;
		}

	@media only screen and (max-width: 600px) {
	  margin-top: 20px;
	}

`
//Posicionamento do Titulo dos relatórios
export const TitleMainStyle = styled.div`
  width: 350px;
  height:auto;
  margin-top: 100px;
  margin-left: 60px;
  font-size: 2em;    

	@media only screen and (max-width: 600px) {
	  margin-top: 30px;
	}
`
//Estilo de cada relatório salvo.
export const SaveReportsStyle = styled.button`
  background-color:#232f40;
  width:300px;
  height: 100px;
  margin: 0px 60px;
	margin-left:100px;
  border-radius:25px;
  display:flex;
  align-items:center;
  justify-content: center;
  margin-bottom:50px;
  border:none;  
	color:#f7f6ee;
	cursor: pointer;


	@media only screen and (max-width: 1200px) {
		width:180px;
		height:70px;
		margin:0px 30px;
		margin-left:80px;
		margin-bottom:30px;
		font-size:0.7em;

		button {
			font-size:0.8em;
		}
	}
`
//Posicionamento do Botão de criar relatórios.
export const ButtonCreateStyle = styled.div`
  display:flex;
  justify-content: flex-end;
	align-items:flex-end;
  margin-right: 100px;
  margin-top: 30px;
  margin-bottom:30px;
	padding:20px;

  span{
      font-size:1.3em;
      margin:10px;
      display:flex;
      align-items:center;
  }

	@media only screen and (max-width: 600px) {
			font-size:1em;
			span {
				margin-bottom: 20px;
			}
	}
`
//Botão redondo de criar relatórios.
export const ButtonCreateReport = styled.button`
  background-color:#232f40;
  width:70px;
  height:70px;
  font-size:3em;
  border-radius:100%;
  color:#f7f6ee;
  display:flex;
  justify-content:center;
  align-items:center;
	margin-top: 10px;
	cursor: pointer;

	@media only screen and (max-width: 600px) {
	  width:40px;
		height:40px;
		font-size:1.5em;
	}
`

//Tela para visualização do relatório salvo.
export const ShowReportStyle = styled.div`
	width: 100%;
	height:100%;
	background-color:#f7f6ee;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;

	span{
		margin:10px;
		font-size:1.2em;
	}
`

export const ButtonSaveReport = styled.div`
	display:flex;
	margin-bottom:100px;

	button{
		margin:20px;
		background-color:#232f40;
		color:#f7f6ee;
		width: 100px;
		height:50px;
		border-radius:25px;
		border:none;
	}
`

export default GlobalStyle;