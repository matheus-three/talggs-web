import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Field, Form, Formik,ErrorMessage } from 'formik';
import Logo from '../../../Assets/Icons/Logo1V - Web.svg';
import StylesPreRegister from '../../../Assets/useStyles/StylesPreRegister';

import { Card, CardContent } from '@material-ui/core';
import * as yup from 'yup'
import { useState } from 'react';



const useStyle = makeStyles(StylesPreRegister);


function PreRegister () {
  const classes = useStyle();
  const [values,setValue] = useState({})

  const validations = yup.object().shape({
    companyName: yup.string().required(),
    CNPJ: yup.number().min(11).required(),
    email: yup.string().email().required(),
})

console.log(values)
  return (
    <div className={classes.root}>
      <Card className='card'>
        <img className='img' src={Logo} alt=""/>

        <CardContent>
          <Formik
            initialValues={{companyName: '', CNPJ: '', email: ''}}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 3));
                    actions.setSubmitting(false);
                }, 3000);
            }}
          >
            <Form className='form'>
              <Field className='input' type='text' name='companyName' placeholder='Razão Social' />
              <ErrorMessage className = 'form-error' component = "span" name = 'companyName'/>
              <Field className='input' type='number' name='CNPJ' placeholder='CNPJ' />
              <ErrorMessage className = 'form-error' component = "span" name = 'CNPJ'/>
              <Field className='input' type='email' name='email' placeholder='E-mail' />
              <ErrorMessage className = 'form-error' component = "span" name = 'E-mail'/>

              <button className='button' type='submit'>Cadastrar</button>
            </Form>
          </Formik>

          <p className='infoText'>
              *Ao clicar em Pré-Cadastrar, receberemos uma solicitação para a 
              validação de seu cadastro.
          </p>
          <p className='infoText'>
                **O tempo estimado para retorno é de 2 dias, enviaremos um e-mail 
                com novas informações.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default PreRegister;