import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

//CSS inicial
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }

  body{
		width: 100vw;
		height: 100vh;
		background: #F7F6EE;
		font-family: Helvetica, sans-serif;
		font-size: 14px;
		/*padding-top: 11vh;*/
		overflow-x: hidden;
  }
`;

//Header Genérico 
export const HeaderStyle = styled.div`
  height: 11vh;
  width: 100vw;
  font-size: 1.8vw;
  background-color: #101D25;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
    
  img {
    height: 100%;
    width: 12%;
    margin-left: 20px;
	}

  ul {
    display: flex;
    width: 50vw;
    color: #F7F6EE;
    justify-content: space-evenly;
	list-style: none;
	margin: auto;
	
	li {
		transition: .3s all;
	}

	li:hover {
		color: #A7E4F2;
    	text-decoration: underline;
	}

	.activeBtn {
		color: #A7E4F2;
    	text-decoration: underline;
	}
  }
    
	
	@media only screen and (max-width: 1200px){
		width:100%;
		font-size: 2em;
		height: 8vh;

		img {
			width: 15%;
			margin-left: 20px;
		}

		ul {
			font-size: 1.3m;
			width: 60vw
		}
	}

	@media only screen and (max-width: 850px){
		font-size: 1.6em;
	}

	@media only screen and (max-width: 600px) {
		font-size: 1em;

		img {
			width: 10%;
			margin-left: 5px;
		}
	}
`

//Icone no menu superior do Header para abrir as opções de editar
export const IconEdit = styled.div`
  height: 60px;
  width: 60px;
  margin-right: 3vw;
  top: 10vh;
  color: #101D25;

  	button {
		width: 100%;
    	height: 100%;
    	padding: 0;
  	}
	
	span {
		width: 100%;
		height: 100%;		
		display: flex;
		flex-direction: column;
	}
  }

  @media only screen and (max-width: 1200px){
    height: 60px;
    width: 60px;
    margin-right: 2vw; 
  }

  @media only screen and (max-width: 600px) {
	height: 45px;
    width: 45px;
  }
`

export const HamburgerIcon = styled.div`
	width: 75%;
	height: 2px;
	background-color: #F7F6EE;
	margin: 5px 0px;
`

//Tela de Relatórios Salvos.

//Estilo que engloba os relatórios salvos da tela .
export const MainStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
	margin-top: 50px;
  	
		span {
			margin-left: 15%;
			font-size: 3em;
			margin-top: 50px;
			color: #bebcbc7a;
		}

	@media only screen and (max-width: 1200px) {
		align-content: space-around;
		justify-content: space-evenly;
	}

	@media only screen and (max-width: 600px) {

	}

`
//Posicionamento do Titulo dos relatórios
export const TitleMainStyle = styled.div`
  height: auto;
  margin-top: 21vh;
  margin-left: 6vw;
  font-size: 2.3em;
  color: #101D25;
  letter-spacing: 2px;
  font-weight: bold;    

	@media only screen and (max-width: 1200px) {
		font-size: 2.5em;
	}

	@media only screen and (max-width: 850px) {
		font-size: 2em;
	}
`
//Estilo de cada relatório salvo.
export const SaveReportsStyle = styled.button`
	background-color: #232F40;
    width: 22vw;
    height: 15vh;
    color: #F7F6EE;
	justify-content: center;
    font-size: 1.8em;
    border: 1px solid #232f40;
    border-radius: 20px;
    box-shadow: 1px 3px 6px #00000045;
    padding: 10px 15px;
    margin-left: 90px;
    margin-bottom: 65px;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
	text-overflow: "…";
	
	@media only screen and (max-width: 1200px) {
		width: 40vw;
		height: 9vh;
		margin-left: 32px;
		justify-content: center;
		margin-bottom: 70px;
		font-size: 2em;

		button {
			font-size: 0.8em;
		}
	}
	
	@media only screen and (max-width: 600px) {
		width: 75vw;
		height: 9vh;
		margin-left: 10px;
		margin-bottom: 50px;

	}
	
`
//Posicionamento do Botão de criar relatórios.
export const ButtonCreateStyle = styled.div`
	display: flex;
	align-items: center;
	position: fixed;
	bottom: 30px;
    right: 40px;

	:hover span {
		visibility: visible;
	}

	span {
      font-size: 1.2em;
      margin: 10px;
      display: flex;
	  align-items: center;
	  color: #F2A950;
	  text-transform: uppercase;
	  visibility: hidden;
	  transition: all .3s ease-out;
  	}

	@media only screen and (max-width: 850px) {
		span {
			margin-bottom: 20px;
		}
	}
`
//Botão redondo de criar relatórios.
export const ButtonCreateReport = styled.button`
	background-color: #F2A950;
	width: 65px;
    height: 65px;
    font-size: 3.5em;
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

	@media only screen and (max-width: 1200px) {
		width: 85px;
		height: 85px;
		font-size: 4em;
	}

	@media only screen and (max-width: 850px) {
		width: 75px;
		height: 75px;
	}
`

//Tela para visualização do relatório salvo.
export const ShowSavedStyle = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f7f6ee;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.saveTitle {
		color: #232f40;
		margin: 0px auto;
		font-size: 2.6em;	
		margin-bottom: 20px;	
	}

	span {
		color: #232f40;
		margin: 0px auto;
		font-size: 1.1em;
	}

	@media only screen and (max-width: 1200px) {
		.saveTitle {
			font-size: 3.2em;	
			margin-bottom: 50px;	
		}

		span {
			font-size: 1.5em;
		}
	}
`

export const ButtonSaveStyle = styled.div`
	display: flex;
	margin-top: 50px;

	button{
		background-color: #F2A950;
		width: 12vw;
		height: 7.5vh;
		border: none;
		margin: 0px 30px;
		border-radius: 50px;
		color: #f7f6ee;
		opacity: 0.8;
		cursor: pointer;
		font-size: 1.5em;
		font-weight: bold;
		transition: all .5s ease-out;

		:hover {
			opacity: 1;
		}

		:focus {
			outline: 0;
		}
	}

	@media only screen and (max-width: 1200px) {
		button {
			margin-top: 50px;
			width: 20vw;
			height: 5vh;
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

export default GlobalStyle;