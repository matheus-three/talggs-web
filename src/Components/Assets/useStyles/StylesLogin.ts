import { findByLabelText } from "@testing-library/react";

const styles = {
  root: {
      display:'flex',
      alignItems: 'center',
      justifyContent:'center',
      height: '100vh',
      width: '100%',
      backgroundColor: '#232F40',

      '& .card': {
          width: '40%',
          backgroundColor: '#F7F6EE',
          borderRadius: '5px',
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
              margin: '20px 12%',
              background: 'transparent',
              fontSize: '18px',
              borderBottom: '1px solid #707070',
              borderTop: '0',
              borderLeft: '0',
              borderRight: '0',
              padding: '0px 15px',
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
      },
  }
}

export default styles;