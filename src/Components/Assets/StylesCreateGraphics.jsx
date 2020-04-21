import styled from 'styled-components'


export const PositionStyle = styled.div`
	height: 89vh;
    display: flex;
	flex-direction: column;
    align-items:center;  
`

export const ButtonsTopStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-self: flex-start;
width: 100vw;
height: 11vh;
  
	button {
		width: 6vw;
		background-color: transparent;
		border: none;
		margin: 15px;
		font-size: 2.2em;
		color: #F2A950;
		transition: all 0.2s ease-out;

		:hover {
			opacity: 0.6;
			border-bottom: 3px solid #F2A950;
		}

		:focus, :active {
			outline: 0;
			border-bottom: 3px solid #F2A950;
		}

	}  
	
`

export const GraphicsStyle = styled.div`
	display: flex;
	align-items: center;
	height: 46vh;
    width: 38vw;
    margin-bottom: 45px;
    border: 1px solid #CCC;

`
export const BottomPositionStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30vw;
	height: 20vh;

	button:focus {
		outline: 0;
	}

`
export const CheckBoxStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	-webkit-box-align: start;
	align-items: flex-start;
	padding: 15px;
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 10px;
	position: relative;
	font-size: 2em;
	color: #2D4F6C;

	span {
		font-weight: bold;
	}

`

export const BoxPositionStyle = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 5px;

	label {
		margin-left:5px;
	}
	
	input {
		width: 50px;		
		height: 30px;
		cursor: pointer;
	}

`