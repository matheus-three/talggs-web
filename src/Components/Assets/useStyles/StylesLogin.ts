const style = {
  root: {
      display:'flex',
      alignItems: 'center',
      justifyContent:'center',
      height: '100vh',
      width: '100%',
      backgroundImage: 'radial-gradient(ellipse at center,#2A384D 10%,#232F40 54%,#1C2633 100%)',
      /*position: 'fixed',
      top: 0,*/
  

      '& .card': {
          width: '35%',
          backgroundColor: '#F7F6EE',
          borderRadius: '10px',
          boxShadow: '1px 1px 10px #1b1b1be3',
      },

      '& .img': {
          width: '45%',
          display: 'block',
          margin: 'auto',
      },

      '& .form': {
          display: 'flex',
          flexDirection: 'column',
          '& .input': {
              margin: '6% 12%',
              marginBottom: '2%',
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

          '& .button': {
              height: '60px',
              fontSize: '20px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              borderRadius: '30px',
              border: 'none',
              color: '#2D4F6C',
              background: 'linear-gradient(to right, #F2A950, #dff2fb, #2D9AA6);',
              margin: '6% 12%',
              cursor: 'pointer',
              boxShadow: '1px 5px 7px #a4a4a7',
              
                '&:focus': {
                    outline: 0,
                }
            },
      },

      '& .link-register': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2D9AA6',
          textDecoration: 'none',
          fontWeight: 500,
          marginBottom: '20px',

          transform: 'none',
          transition: 'opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          top: '16px',
          left: '1216px',
          transformOrigin: '49.0313px 20.125px',
      },
  }
}

export default style;