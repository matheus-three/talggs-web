const Register = {
    root: {
        height: '100vh',
        width: '100vw',
        backgroundImage: 'radial-gradient(ellipse at center,#2A384D 10%,#232F40 54%,#1C2633 100%)',
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
                                
        '& .card': {
            width: '40%',
            backgroundColor: '#F7F6EE',
            borderRadius: '10px',
            boxShadow: '1px 1px 10px #1b1b1be3',
            display: 'flex',
            justifyContent: 'space-evenly',            
        },

        '& .container': {
            width: '100%',
            height: '90vh',
            overflow: 'scroll'
        },

        '& .img': {
            width: '120px',
            display: 'block',
            margin: 'auto',            
        },

        '& .form': {
            display: 'flex',
            flexDirection: 'column',

            '& .input': {
                margin: '4% 12%',
                background: 'transparent',
                fontSize: '18px',
                borderBottom: '1px solid #707070',
                color: '#2D4F6C',
                borderTop: '0',
                borderLeft: '0',
                borderRight: '0',
                padding: '0px 15px',

                '&:focus': {
                    outline: 0,
                }
            },

            '& .form-error': {
                margin: '0px 12%',
                color: '#fb4545',
            },

            '& .rowForm': {
                display: 'flex',
                justifyContent: 'center',

                '& .input': {
                    width: '100%',
                    marginRight: '6%',
                },

                '& .segundodalinha': {
                    marginLeft: 0,
                    marginRight: '12%',
                    width: '61%',
                },
            },

            '& .TopBar': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                height: 'auto',
                marginLeft: '0%',
                paddingTop: 0,
                border: 'none',
               
                '& label': {
                    color: '#757575',
                    width: 'auto',
                    margin: '0px 5px',
                },

                '& .selectUf': {
                    backgroundColor: '#F7F6EE',
                    width: '50%',
                    color: '#2D4F6C',
                },
            },

            '& .button': {
                height: '60px',
                fontSize: '20px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                borderRadius: '30px',
                border: 'none',
                color: '#f7f6ee',
                background: '#F2A950',
                margin: '6% 12%',
                cursor: 'pointer',
                boxShadow: '1px 5px 7px #a4a4a7',

                '&:focus': {
                    outline: 0,
                }
            },
        },

        '& .infoText': {
            fontSize: '15px',
            color: '#A4A4A7',
            margin: '1% 10%',
            textAlign: 'justify',
            marginTop: 'none'
            
        },

        '@media screen and (max-width: 1200px)' : {
            height: '100vh',

            '& .card': {
                width: '50%',
            },

            '& .img': {
                width: '120px',          
            },

            '& .TopBar': {
                '& label': {
                    fontSize: '16px',
                },
            },
        }
    }
}

export default Register;