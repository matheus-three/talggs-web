import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

//Initial Css
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
//End Initial Css


export const HeaderStyle = styled.div`
    height: 80px;
    width:100%;
    font-size: 1.4em;
    background-color: #232f40;
    display:flex;
    align-items: center;
    position:fixed;
  
  
    
    img {
        height: 60px;
        width: 60px;
        margin-left: 30px;
    }
    ul{
        display:flex;
        width:80%;
        color: #f7f6ee;
        justify-content: space-around;
        list-style: none;
    }

     
`;

export const Title = styled.div`
    position: relative;
    top:${props => props.top};
    left:${props => props.left};
    width: 300px;
    font-size:1.4em;

` 

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
export const MainStyle = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin-top:140px;
   
  
`

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

export default GlobalStyle;