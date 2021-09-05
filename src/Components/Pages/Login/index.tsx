import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Field, Form, Formik,ErrorMessage } from 'formik';
import Logo from '../../Assets/Icons/Logo1V - Web.svg';
import style from '../../Assets/useStyles/StylesLogin'
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as yup from 'yup'
import { useState } from 'react';
import {Redirect} from 'react-router-dom'
import { LoginUser, IsLoggedUser } from '../../Auth/authGuard';


const useStyles = makeStyles(style);

function Login () {
  const classes = useStyles();
  const [isLogged,setIsLogged] = useState(false)

  const validations = yup.object().shape({
    user: yup.string().email().required(),
    password: yup.string().min(8).required()
})

useEffect(() => {
  IsLoggedUser()
},[])

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
                      
                      const value = {
                        user: obj.user,
                        password: obj.password
                       } 
                       console.log('va',value)
                     LoginUser(value.user,value.password)
                     .then((user) => {
                      alert("Logado com sucesso!");
                      setIsLogged(true)
                    }).catch((we) => {
                      alert(we)
                      return false
                    })
                       
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