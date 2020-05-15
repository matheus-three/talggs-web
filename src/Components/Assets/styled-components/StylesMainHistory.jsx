import styled from 'styled-components'


export const TopBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 22vh;
  border-bottom: 1px solid #CCC;
  padding-top: 11vh;
    
  label {
    width: 100%;
    margin: 20px 0px;
    font-size: 1.2em;
    border: none;
    text-align: left;
    color: #2D4F6C;
    font-weight: bold;
  }

  select {
    width: 14vw;
    border: 1px solid #CCC;
    border-radius: 7px;
    padding: 8px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 1.2em;
    color: #2D4F6C;

    :focus {
      outline: 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    height: 18vh;

    label {
      font-size: 1.8em;
    }

    select {
      font-size: 1.5em;
      width: 15vw;
    }
  }

  @media only screen and (max-width: 850px) {    
    label {
      font-size: 1.5em;
    }

    select {
      font-size: 1.2em;
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
    font-size: 1em;
    border: 1px solid #CCC;
    border-radius: 7px;
    padding: 8px;
    cursor: pointer;
    color: #2D4F6C;

    :focus {
      outline: 0;
    }
  }

  label {
    margin:0px 10px;
  }

  @media only screen and (max-width: 1200px) {
    input {
      width: 19vw;
      font-size: 1.5em;
      padding: 5px;
      margin-left: 0px;
    }
  }

  @media only screen and (max-width: 850px) {
    input {
      width: 18vw;
      font-size: 1.2em;
    }
  }
`

export const HistoryStyle = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    margin-top: 100px;
  }

`

export const ShowDetailsStyle = styled.div`
  position:relative;
  width: 60%;
  height: 62vh;
  background-color: #fff;
  box-shadow: 2px 1px 2px 1px  #ccc;

  @media only screen and (max-width: 1200px) {
    width: 80%;
    height: 70vh;
    box-shadow: 2px 2px 2px 2px #ccc;
  }
`

export const CardDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
 
  img {
    width: 100px;
    margin-left: 10px;
  } 

  .value {
    margin: 20px 40px 0px 0px;
    align-self: flex-end;
  }

  @media only screen and (max-width: 1200px) {
    img {
      margin: 27px 0 0 20px;
  } 
  }
`
export const TitleStyle = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const NameStyle = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  margin-right: 200px;

  @media only screen and (max-width: 1200px) {
    margin: 27px 25px 0px 0px;
  }
`

export const DateStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
   
`

export const DatePositionStyle = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: center;
  margin: 0px 40px 0px 0px;

  label {
    width: 100%;
    font-size: 0.8em;
    align-items: center;
    text-align:center;
  }

  span {
    font-size: 0.7em;
    margin: 5px;
    text-align:center;
  }
`

export const DetailsStyle = styled.div`
  padding: 10px;
  font-size: 1.0em;
  width: 90%;
  height: 180px;
  margin-left: 32px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  overflow: auto;
  cursor: pointer;
	
	::-webkit-scrollbar-track {
			background-color: #F7F6EE;
	}

  ::-webkit-scrollbar-thumb:hover {
    background: #232F40; 
  }

	::-webkit-scrollbar {
			width: 10px;
      height: 10px;
			background: #F7F6EE;
	}

	::-webkit-scrollbar-thumb {
			background: #707070;
	}

  table {
    width: 100%;
    height: 50px;
  }

  th {
    max-width: 70px;
  }

  td{
    width: 60px;
    text-align: center;
    font-size: 0.6em;
    padding: 10px;
  }

  .descr {
    max-width: 120px;
  }

  @media only screen and (max-width: 1200px) {
    height: 470px;
    font-size: 1.2em;
  }
`