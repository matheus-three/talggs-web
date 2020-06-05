import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Field, Form, Formik,ErrorMessage } from 'formik';
import Logo from '../../../Assets/Icons/Logo1V - Web.svg';
import StylesPreRegister from '../../../Assets/useStyles/StylesPreRegister';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import * as yup from 'yup'
import { useState } from 'react';
import firebase from 'firebase';
import { getMaxListeners } from 'cluster';

const useStyle = makeStyles(StylesPreRegister);

interface PreRegisterParams {
  companyName: string;
  CNPJ: number;
  email: string;
}

function PreRegister () {
  const classes = useStyle();

  const validations = yup.object().shape({
    companyName: yup.string().required('Campo Razão Social é obrigatório'),
    CNPJ: yup.number().min(11).required('Campo CNPJ é obrigatório'),
    email: yup.string().email('Email inválido').required('Campo Email é obrigatório'),
})



const getPreRegister = (values) => {
  const dbh = firebase.firestore()
 dbh.collection('pre-register').add({
    companyName: values.companyName,
    CNPJ:values.CNPJ,
    email: values.email
  }).then(()=>{
    alert("Acesse o email enviado para usa conta paras os proximos passos")
  })
}



  return (
    <div className={classes.root}>
      <Card className='card'>
        <img className='img' src={Logo} alt=""/>

        <CardContent>
          <Formik
            initialValues={{companyName: '', CNPJ: '', email: ''}}
            onSubmit={(values, actions) => {
                    const data = JSON.stringify(values)
                    const obj = JSON.parse(data)
                    const value = {
                      companyName: obj.companyName,
                      CNPJ: obj.CNPJ,
                      email: obj.email
                    };
                    getPreRegister(value)
                    actions.setSubmitting(false);
                }
            }
            validationSchema={validations}
          >
            <Form className='form'>
              <Field className='input' type='text' name='companyName' placeholder='Razão Social' />
              <ErrorMessage className = 'form-error' component = "span" name = 'companyName'/>
              <Field className='input' type='number' name='CNPJ' placeholder='CNPJ' />
              <ErrorMessage className = 'form-error' component = "span" name = 'CNPJ'/>
              <Field className='input' type='email' name='email' placeholder='E-mail' />
              <ErrorMessage className = 'form-error' component = "span" name = 'email'/>

              <button className='button' type='submit'>Cadastrar</button>
            </Form>
          </Formik>

          <Link className='link-register' to='../Register'>Já recebeu a confirmação do pré-cadastro?</Link>

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