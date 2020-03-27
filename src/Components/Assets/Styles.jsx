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
        font-family: sans-serif;
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
    
`;

//Titulo que pode ser definido em qualquer lugar da tela passando as coordenadas.
export const Title = styled.div`
    position: relative;
    top:${props => props.top};
    left:${props => props.left};
    width: 300px;
    font-size:1.4em;

`
//Icone no menu superior do Header para abrir as opções de editar
export const IconEdit = styled.div`
    background-color:#f7f6ee;
    border-radius:2em 5em;
    height:30px;
    width: 50px;
    margin-left: 60px;

    @media only screen and (max-width: 800px){
        margin-right: 100px;   
    }
`

//Tela de Relatórios Salvos.

//Estilo que engloba os relatórios salvos da tela .
export const MainStyle = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin-top:140px;   
`

//Estilo de cada relatório salvo.
export const SaveReportsStyle = styled.div`
    background-color:#232f40;
    width:250px;
    height: 80px;
    margin: 40px 60px;
    border-radius:25px;
    display:flex;
    align-items:center;
    justify-content: center;
    color:#f7f6ee;
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
    position:relative;
    top:30px;
    left:1350px;
    margin-bottom:20px;

`

//Tela Criar Relatório

//engloba o componente de filtro com o de stats do relatórios
export const Container = styled.div`
        display: flex;
		width: 1300px;

`

//Estilo do componente Filtro
export const FilterStyle = styled.div`
    height:620px;
    width:300px;
    background-color:#f7f6ee;
    border-right: 2px solid #CCC;

    span {
        font-size: 1.6em;
    }
    button{
        width:200px;
        margin:10px 40px;
        font-size:1.2em;
        border:none;
        background-color:#f7f6ee;
    }

    button.btn-grafico{
        margin-top:200px;
        border-radius: 20%;
        border: solid #CCC;
        height:100px;
    }
`

//Estilo do componente stats que engloba a tabela e os botões salvar e imprimir.
export const StatsStyle = styled.div`
        display:flex;
        flex-direction: column;
        align-items: center;
        height: 400px;
		margin-left: 80px;
		margin-top: 100px;
		max-width: 100%;
		overflow: auto;
       
		
		table {
             font-family: arial, sans-serif;
             border-collapse: collapse;
             border-bottom: 1px solid #dddddd;
             width: 100%;
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

`

//Estilo dos botões da tela de criar relatório

export const ButtonStyle = styled.button`
        background-color:#232f40;
        width: 100px;
        height: 50px;
        position:relative;
        left: 700px;
        bottom: 100px;
        border:none;
        margin: 0px 40px;
        border-radius:25px;

        span {
            color: #f7f6ee;
        }

`


export default GlobalStyle;