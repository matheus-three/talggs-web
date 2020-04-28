import styled from 'styled-components'


export const TopBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90vw;
  height: 22vh;
  margin:20px;
  
  label {
    width: 100vh;
    margin: 30px 0px;
    font-size: 1em;
    border: none;
    background-color: transparent;
    text-align: left;
    cursor: pointer;
    color: #2D4F6C;
    font-weight: bold;
  }
 
  select {
    width: 14vw;
    border: 1px solid #CCC;
    border-radius: 10px;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 1em;
    color: #2D4F6C;
    :focus {
      outline: 0;
    }
  }
    span {
      margin-bottom: 40px;
      font-size: 1em;
    }
`

export const InputDateStyle = styled.div `
  
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  -webkit-box-pack: end;
  
  div {
    margin-bottom: 15px;
  }


  input {
    width: 14vw;
    font-size: 1em;
    border: 1px solid #CCC;
    border-radius: 10px;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
    color: #2D4F6C;
    :focus {
      outline: 0;
    }
  }

  label {
    margin:0px 10px;
  }
`

export const HistoryStyle = styled.div`
  display: flex;
  justify-content: center;

`


export const ShowDetailsStyle = styled.div`
  position:relative;
  top:-40px;
  width:60%;
  height: 70vh;
  background-color: #fff;
  margin-bottom:50px;
  box-shadow: 2px 1px 2px 1px  #ccc;

`


export const CardDetailsStyle = styled.div`
  display:flex;
  flex-direction:column;
  font-size:1em;
 
  img {
    height:80px;
    width:80px;
  }

 
`
export const TitleStyle = styled.div `
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  .value {
   align-self: flex-end;
   margin-right:100px;
   width:200px;
   font-size:1.5em;
  }
`
export const NameStyle = styled.div`
  display:flex;
  width:300px;
  flex-direction:column;
  justify-content:center;
  margin-right: 100px;
`

export const DateStyle = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  margin-top:50px;
   span {
     margin:10px;
   }
`

export const DatePositionStyle = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const DetailsStyle = styled.div`
  padding:10px;
  font-size:0.8em;
  width:90%;
  height:200px;
  margin-left:50px;
  display:flex;
  justify-content:center;
  margin-top:30px;
  overflow:scroll;
  cursor:pointer;
	
	::-webkit-scrollbar-track {
			background-color: #ddd;
	}

	::-webkit-scrollbar {
			width: 6px;
			background: #ddd;
	}

	::-webkit-scrollbar-thumb {
			background: #707070;
	}

  table {
    width: 100%;
    height:50px;
  }

  th {
    max-width:70px;
  }

  td{
    width:60px;
    text-align:center;
    font-size:0.6em;
    padding:10px;
  }

  .descr {
    max-width:120px;
  }
`