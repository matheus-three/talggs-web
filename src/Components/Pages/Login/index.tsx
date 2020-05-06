import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Field, Form, Formik,ErrorMessage } from 'formik';
import Logo from '../../Assets/Icons/Logo1V - Web.svg';
import style from '../../Assets/useStyles/StylesLogin'
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as yup from 'yup'
import { useState } from 'react';



const useStyles = makeStyles(style);


function Login () {
  const classes = useStyles();
  const [values,setValue] = useState({})

  const validations = yup.object().shape({
    user: yup.string().email().required(),
    password: yup.string().min(8).required()
})
  
console.log(values)
  return(
    <div className={classes.root}>
    <Card className='card'>

        <img className='img' src={Logo} alt=""/>

        <CardContent>
            <Formik
                initialValues={{user: '', password: ''}}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                        setValue(JSON.stringify(values,null,2))
                    }, 2000);
                }}
                validationSchema={validations}
            >
                <Form className='form'>
                    <Field className='input' type='text' name='user' placeholder='Usuário' />
                    <ErrorMessage className = 'form-error' component = "span" name = 'user'/>
                    <Field className='input' type='password' name='password' placeholder='Senha'/>
                    <ErrorMessage className = 'form-error' component = "span" name = 'password'/>


                    <button className='button' type='submit'>Acessar</button>
                </Form>
            </Formik>

            <Link className='link-register' to='/PreRegister'>Ainda não possui uma conta? Cadastre-se!</Link>
        </CardContent>
    </Card>
</div>
  
  )
}

export default Login;