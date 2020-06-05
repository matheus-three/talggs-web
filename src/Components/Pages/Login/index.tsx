import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Field, Form, Formik,ErrorMessage } from 'formik';
import Logo from '../../Assets/Icons/Logo1V - Web.svg';
import style from '../../Assets/useStyles/StylesLogin'
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as yup from 'yup'
import { useState } from 'react';
import firebase from 'firebase';
import {Redirect} from 'react-router-dom'


const useStyles = makeStyles(style);

function Login () {
  const classes = useStyles();
  const [isLogged,setIsLogged] = useState(false)

  const validations = yup.object().shape({
    user: yup.string().email().required(),
    password: yup.string().min(8).required()
})

const loginAutenticate= (email,senha) => {
  firebase.auth().signInWithEmailAndPassword(email,senha)
  .then((user) => {
    alert("Logado com sucesso!");
    setIsLogged(true)
  }).catch((err) => {
    alert("Falha no Login, usuário ou senha não encontrados!")
  })
}
  return(
    <div className={classes.root}>
    <Card className='card'>

        <img className='img' src={Logo} alt=""/>

        <CardContent>
            <Formik
                initialValues={{user: '', password: ''}}
                onSubmit={(values, actions) => {
                      const data = JSON.stringify(values)
                      const obj = JSON.parse(data)
                      
                      console.log("data",obj)
                      const value = {
                        user: obj.user,
                        password: obj.password
                      } 
                      loginAutenticate(value.user,values.password)
                      actions.setSubmitting(false);

                }}
                validationSchema={validations}
            >
                <Form className='form'>
                    <Field className='input' type='text' name='user' placeholder='Usuário' />
                    <ErrorMessage className = 'form-error' name = 'user'>
                      {msg => <div style = {{color: 'red',marginLeft: '65px'}}>{"Usuário inválido "}</div>}
                    </ErrorMessage>
                    <Field className='input' type='password' name='password' placeholder='Senha'/>
                    <ErrorMessage className = 'form-error'   name = 'password' 
                      render={msg => <span style = {{color: 'red',marginLeft: '65px'}}>{"Senha inválida"}</span>}/>

                    <button className='button' type='submit'>Acessar</button>
                </Form>
            </Formik>
            {isLogged? <Redirect to="/home" />: <Redirect to="/"/>}

            <Link className='link-register' to='/PreRegister'>Ainda não possui uma conta? Cadastre-se!</Link>
        </CardContent>
    </Card>
</div>
  
  )
}

export default Login;