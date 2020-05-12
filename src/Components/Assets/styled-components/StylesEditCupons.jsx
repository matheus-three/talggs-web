import styled from  'styled-components'

export const Container = styled.div`
  display: flex;
  height: 89vh;
  padding-top: 11vh; 
  
  @media only screen and (max-width: 1200px){
    padding-top: 8vh;
    flex-direction: column;
  }
`

export const PositionStyle = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  font-size: 14px;

  @media only screen and (max-width: 1200px){
    width: 90%;
  }
`
export const CreatePromoStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 89vh;
  width: 100%;
  
  p {
    height: auto;
    margin-top: 10vh;
    margin-left: 6vw;
    font-size: 2.3em;
    color: #101D25;
    letter-spacing: 2px;
    font-weight: 900;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    font-size: x-large;
    padding-left: 6vw;

    button {
      width: 100%;
      height: 8.5vh;
      font-size: 1em;
      margin-top: 0px;
    }
  }

  @media only screen and (max-width: 1200px){
    height: 60vh;
    margin-bottom: 50px;

    form {
      align-items: center;
      font-size: xxx-large;

      button {
        width: 90%;
        height: 7.5vh;
        font-size: 0.7em;
      }
    }

  }

  @media only screen and (max-width: 800px){
    form {
      button {
        width: 70%;
        height: 7.5vh;
        font-size: 0.7em;
        margin: 0px auto;
      }
    }
      
  }

`

export const ListPromoStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
    
  p {
    height: auto;
    /* margin-top: 12vh; */
    font-size: 1.9em;
    color: #232f40;
    letter-spacing: 1px;
    font-weight: bold;
  }

  @media only screen and (max-width: 1200px){
    width: 100%;
    margin-bottom: 50px;

    p {
      margin-bottom: 30px;
      font-size: 2.3em;
    }
  }
`

export const ItemPromoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-evenly;
  width: 80%;    
  height: 14%;
  padding: 15px;
  font-size: 1.2em;
  border-radius: 15px;
  background-color: #dadadaa1;
  margin: 10px;
  box-shadow: 1px 3px 6px #00000045;

  p {
    margin-top: 0;
    font-size: 1em;
    color: #232f40;
    font-weight: normal;
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1200px){
    height: 20%;
    padding: 24px;
    font-size: 1.3em;
    border-radius: 20px;
    margin-bottom: 25px;

    p {
      font-size: 1.2em;
      margin-bottom: 0px;
    }
  }
`

export const PositionItemStyle = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%
`

export const ButtonPromoStyle = styled.button`
  width: 35px;
  height: 50px;
  background: transparent;
  margin: auto 0px;
  cursor: pointer;
  border: none;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 1200px) {
    width: 40px;
    height: 100px;
  }
`