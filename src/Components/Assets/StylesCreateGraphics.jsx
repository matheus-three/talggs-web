import styled from 'styled-components'


export const PositionStyle = styled.div`
    display:flex;
		flex-direction: column;
    justify-content:center;
    align-items:center;  
`

export const ButtonsTopStyle = styled.div`
    display: flex;
    justify-content:space-around;
		align-items: center;
    width: 300px;
    height: 100px;
    margin-right: 150px;
  
		button {
			width:200px;
			height:20px;
			background-color:#f7f6ee;
			border:none;
			margin:10px;
			opacity:0.9;
			font-size:1.5em;
    }

		span:hover {
		opacity:1;
		border-bottom:2px solid #ccc;
	}

		span {
			opacity:0.9;
			border-bottom: 1px solid #ccc;
			cursor: pointer;
		}
  
`

export const GraphicsStyle = styled.div`
	width:60%;
	height:400px;
	background-color:#f7f6ee;
	border: 1px solid #ccc;
	display:flex;
	align-items:center;
	justify-content:center;

`
export const BottomPositionStyle = styled.div`
	display:flex;
	align-items:flex-end;
	margin-bottom:20px;

`
export const CheckBoxStyle = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	margin-top: 20px;
	margin-left: 100px;
	margin-right: 150px;

`

export const BoxPositionStyle = styled.div`
	display:flex;
	margin:10px;
	align-items:center;
	width: 100px;

	label {
		margin-left:5px;
	}

`