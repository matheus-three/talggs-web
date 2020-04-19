import styled from  'styled-components'


export const PositionStyle = styled.div`
  display:flex;
  flex-direction: row; 
  justify-content:space-around;

  font-size: 1.5em;
`
export const CreatePromoStyle = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    justify-content:center;
    height: 70vh;
    width: 30%;
    border: 0.5px solid black;
    background-color:#f7f6ee;
    margin:60px;
    box-shadow: 2px 2px 2px 2px #ddd; 

    p{
      margin:10px;
    }

    @media only screen and (max-width: 1200px){
      width:30%;
    }


`

export const ListPromoStyle = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    height: 70vh;
    width: 70%;
    background-color:#f7f6ee;
    margin-top: 60px;
    

`

export const ItemPromoStyle = styled.div`
    display:flex;
    height:130px;
    width: 80%;
    padding: 10px;
    font-size:0.8em;
    border: 0.5px solid black;
    background-color: #f7f6ee;
    margin:10px;
    box-shadow: 2px 2px 2px 2px #ddd; 

    span {
      margin-left: 60px;
    }
`

export const PositionItemStyle = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ButtonPromoStyle = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width:30%;
  height:50px;
  background-color: #232f40;
  color: #f7f6ee;
  border-radius: 15px;
  margin-left:20px;
  margin-top:30px;
`