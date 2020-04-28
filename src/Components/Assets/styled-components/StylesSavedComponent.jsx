import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

//CSS inicial
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }

  body{
		width: 100%;
		background: #F7F6EE;
		font-family: Helvetica, sans-serif;
		font-size: 14px;
  }
`;



//Header Genérico 
export const HeaderStyle = styled.div`
  height: 11vh;
  width: 100vw;
  font-size: 1.6vw;
	background-color: #101D25;
	display:flex;
  align-items: center;
    
  img {
		height: 90%;
    width: 12%;
		margin-left: 0px;
	}

  ul {
		display: flex;
    width: 70vw;
    color: #F7F6EE;
		justify-content: space-evenly;
		list-style: none;
		
		li {
			transition: .3s all;
		}
		li:hover,
		li:active {
			color: #A7E4F2;
    	text-decoration: underline;
		}   
  }
    
`

//Icone no menu superior do Header para abrir as opções de editar
export const IconEdit = styled.div`
   background-color: #F7F6EE;
   border-radius: 15px;
   height: 85px;
   width: 85px;
	 

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
			font-size: 2em;
			margin-top: 50px;
			color: #bebcbc7a;
		}

	@media only screen and (max-width: 600px) {
	  margin-top: 20px;
	}

`
//Posicionamento do Titulo dos relatórios
export const TitleMainStyle = styled.div`
  height:auto;
	margin-top: 10vh;
  margin-left: 6vw;
  font-size: 2.5em;
  color: #101D25;
  letter-spacing: 2px;
  font-weight: bold;  
   

	@media only screen and (max-width: 600px) {
	  margin-top: 30px;
	}
`
//Estilo de cada relatório salvo.
export const SaveReportsStyle = styled.button`
	background-color: #8abecb52;
	width: 20vw;
	height: 13vh;
	color: #232f40;
	font-size: 2.2em;
	border: 1px solid #232f40;
	border-radius: 25px;
	box-shadow: 1px 3px 6px #00000045;
	padding: 15px 25px;
	margin-left: 130px;
  margin-bottom: 100px;
	cursor: pointer;

	display: flex;
	align-items: flex-start;
	-webkit-box-pack: start;
	justify-content: left;

`
//Posicionamento do Botão de criar relatórios.
export const ButtonCreateStyle = styled.div`
 display: flex;
 align-items: center;
 width: 90%;
 justify-content: flex-end;
 margin-right: 60px;
	
	:hover span {
			visibility: visible;
		}
		
	span {
			font-size: 1em;
			margin: 10px;
			display: flex;
			align-items: center;
			color: #F2A950;
			text-transform: uppercase;
			visibility: hidden;
			transition: all .3s ease-out;
	}

`
//Botão redondo de criar relatórios.
export const ButtonCreateReport = styled.button`
  background-color: #F2A950;
	width: 80px;
	height: 80px;
	font-size: 3em;
	border-radius: 100%;
	border: 1px solid #F2A950;
	opacity: .7;
	color: #F7F6EE;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	cursor: pointer;
	transition: all .3s ease-out;
	
	:hover {
				opacity: 1;
			}

	:focus {
		outline: 0;
	}
`

//Tela para visualização do relatório salvo.
export const ShowReportStyle = styled.div`
	width: 100%;
	height:100%;
	background-color:#f7f6ee;
	color: black;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;

	span{
		color: #232f40;
		margin: 0px auto;
		font-size: 3.2em;
	}
`

export const ButtonSaveReport = styled.div`
	display:flex;
	margin-bottom:100px;

	button{
		background-color: #F2A950;
    width: 15vw;
		height: 7.5vh;
		border: none;
		margin: 50px 40px;
		border-radius: 50px;
		color: #f7f6ee;
		opacity: 0.8;
		cursor: pointer;
		transition: all .5s ease-out;
		font-size: 1em;
		font-weight: bold;

		:focus {
			outline: 0;
		}
	}
`

export default GlobalStyle;