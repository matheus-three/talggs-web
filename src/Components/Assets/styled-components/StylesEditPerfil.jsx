import styled from  'styled-components'

export const PositionStyle = styled.div`
  display:flex;
  padding-top: 11vh;
  flex-direction: row; 
  justify-content: flex-start;
  width: 100%;
`

export const LogoStyle = styled.div`
    width: 25%;
    margin-top: 100px;
    margin-right: 7%;

    img {
        height: 400px;
      
    }

    @media only screen and (max-width: 1200px) {
        width: 30%;
            img {
                margin-left: 0px;
            }
        }
`

export const FormContainer = styled.div `
    width: 75%;
    flex-direction: column; 
    justify-content: center;
    
    height: auto;
    display:flex;

    align-Items: center;

    .title {
        height: auto;
        margin-top: 10vh;
        font-size: 2.3em;
        align-self: flex-start;
        margin-left: 155px;
        color: #101D25;
        letter-spacing: 2px;
        font-weight: bold;    

        @media only screen and (max-width: 1200px) {
            font-size: 2.5em;
            margin-top: 5vh;
        }

        @media only screen and (max-width: 850px) {
            font-size: 2em;
        }
    }
           
    .card {
        margin-top: 20px;
        justify-Content: space-evenly;    
        background: transparent;   
        box-shadow: none;
        width: 100%;


        .label {
            margin-left: 15%;
            font-size: 1em;
            margin-bottom: -5px;
            color: #2D4F6C;
            letter-spacing: 2px;
            font-weight: bold;   
        }
        .labelMiddle {
            font-size: 1em;
            margin-bottom: -5px;
            color: #2D4F6C;
            letter-spacing: 2px;
            font-weight: bold;   
        }
    }

    .line {
        width: 76%;
        place-self: center;
        border: #00000036 2px solid;
    }

    .form {
        display: flex;
        flex-Direction: column;

        .input {
            margin: 2% 15%;
            background: transparent;
            font-Size: 18px;
            border-Bottom: 1px solid #707070;
            color: #2D4F6C;
            border-Top: 0;
            border-Left: 0;
            height: 40px;
            border-Right: 0;
            padding: 0px 15px;

            .focus {
                outline: 0;
            }
        }

        .input:active, .input:focus {
            outline:none !important;
            outline-width: 0 !important;
            box-shadow: none;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
            border-bottom: #232f40 1px solid;
        }

        .inputBlocked {
            background: rgba(0, 0, 0, 0.09);
        }

            .form-error {
            margin: 0px 12%;
            color: #fb4545;
        }

            .rowForm {
            display: flex;
            justify-Content: center;

                .input {
                width: 100%;
                margin-Right: 6%;
            }

                .segundodalinha {
                margin-Left: 0;
                margin-Right: 15%;
                width: 60%;
            }
        }

            .TopBar {
            display: flex;
            align-Items: center;
            justify-Content: flex-start;
            width: 100%;
            height: auto;
            margin-Left: 0%;
            padding-Top: 0;
            border: none;

                label {
                color: #757575;
                width: auto;
                margin: 0px 5px;
            }

                .selectUf {
                background-Color: #F7F6EE;
                width: 10vw;
                color: #2D4F6C;
            }
        }

            .button {
            width: 25%;
            height: 60px;
            font-Size: 20px;
            font-Weight: bold;
            text-Transform: uppercase;
            border-Radius: 30px;
            border: none;
            color: #f7f6ee;
            background: #F2A950;
            margin: 6% 12%;
            cursor: pointer;

            :focus {
                outline: 0;
            }

            :disabled {
                background-color: #cccccc;
                cursor: default;
            }
        }
    }

        .infoText {
        font-Size: 15px;
        color: #A4A4A7;
        margin: 1% 10%;
        text-Align: justify;
        margin-Top: none
        
    }


    @media screen and (max-width: 1200px) {
        .card {
            .label {
                margin-bottom: 10px;
            }
        }
            .TopBar {
                label: {
                font-Size: 16px;
            }
        }
    }

`


//Fundo cinza do pop-up 
export const SaveBehind = styled.div`
	width: 100vw;
	height:${props => props.height};
	background-color:${props => props.back};
	position: fixed;
	left:${props => props.left};
	top:${props => props.top};
	display: flex;
	justify-content: center;
	align-items: center;


    @media only screen and (max-width: 1200px) { 
        width: 100%;
    }

`

//Pop-up para salvar 
export const BoxStyle = styled.div`
	width: 38vw;
	height: 30vh;
	padding: 25px;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	-webkit-box-pack: center;
	justify-content: space-around;
	-webkit-box-align: center;
	align-items: center;
	border-radius: 10px;
	
	span {
		width: 100%;
		text-align: center;
		font-size: 1.7em;
		border: none;
		background-color: transparent;
		cursor: pointer;
		display: block;
		color: #101D25;
		font-weight: bold;
	}

	button {
		width: 9vw;
		height: 6vh;
		font-size: 1.3em;
		font-weight: bold;
		background-color: #F2A950;
		color: #ffffff;
		border: none;
		border-radius: 50px;
		cursor: pointer;

		:focus {
			outline: 0;
		}
	}

	
	@media only screen and (max-width: 1200px) {
		width: 65vw;
		height: 25vh;

        span {
            font-size: 2em;
        }

		button {
			width: 16vw;
			height: 5vh;
			font-size: 1.5em;
		}
	}

`



export const ButtonStyle = styled.div`
	display: flex;

	button{
		background-color: #F2A950;
		width: 10vw;
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
