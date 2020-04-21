import styled from 'styled-components'


export const TopBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 22vh;
  border-bottom: 1px solid #CCC;
    
  label {
    width: 100%;
    margin: 30px 0px;
    font-size: 2em;
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
    font-size: 2em;
    color: #2D4F6C;

    :focus {
      outline: 0;
    }
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
    font-size: 1.6em;
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
  margin-top:50px;
  display: flex;
  justify-content: center;

`


export const ShowDetailsStyle = styled.div`
  position:relative;
  top:-40px;
  width:60%;
  height: 60vh;
  background-color: #fff;
  margin-bottom:50px;
  box-shadow: 2px 1px 2px 1px  #ccc;

`


export const CardDetailsStyle = styled.div`
  display:flex;
  flex-direction:column;
  font-size:1.5em;
 
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
  }
`
export const NameStyle = styled.div`
  display:flex;
  width:300px;
  flex-direction:column;
  justify-content:center;
  margin-right: 200px;
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
			background-color: #f7f6ee;
	}

	::-webkit-scrollbar {
			width: 6px;
			background: #f7f6ee;
	}

	::-webkit-scrollbar-thumb {
			background: #f7f6ee;
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