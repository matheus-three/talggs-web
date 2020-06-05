import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Field, Form, Formik, ErrorMessage } from "formik";
import Logo from "../../../Assets/Icons/Logo1V - Web.svg";
import StylesRegister from "../../../Assets/useStyles/StylesRegister";

import { TopBarStyle } from "../../../Assets/styled-components/StylesMainHistory";
import { Card, CardContent } from "@material-ui/core";
import * as yup from "yup";
import { useState } from "react";
import Select from 'react-select';
import { uf } from "../../../model/uf";
import firebase from "firebase";
import { setupMaster } from "cluster";

const initialValues = {
      CEP:'',
      city: '',
      CNPJ: '',
      email: '',
      municipalRegistration:'',
      district: '',
      num: '',
      stateRegistration: '',
      street: '',
      companyName: '',
      uf: '',
    }

const useStyle = makeStyles(StylesRegister);
const validations = yup.object().shape({
  email: yup.string().email('E-mail Inválido').required('Campo e-mail é obrigatório'),
  companyName: yup.string().required('Campo razão social é obrigatório'),
  CNPJ: yup.number('Cnpj inválido').min(11,'Cnpj inválido').required('Campo CNPJ é obrigatório'),
  // CEP: yup.number('Cep invalido').min(8,'Cep Inválido').required('Campo Cep é obrigatório'),
  // Numero:yup.number('Numero inválido').required('Campo número é obrigátorio'),
  // Rua:yup.string('Rua inválida').required('Campo Rua é obrigatório'),
  // Bairro:yup.string().required('Campo bairro é obrigatório'),
  // Cidade: yup.string().required('Campo cidade é obrigatório'),
  // InscricaoMunicipal: yup.number('Inscrição invalida').required('Campo Inscricão Municipal é obrigatório'),
  // stateRegistration: yup.number('Inscrição invalida').required('Campo Inscricão Estadual é obrigatório')

});

interface RegisterParams{
  cep:string,
  city: string,
  cnpj: string,
  companyId: number,
  email: string,
  municipalInscription: number,
  neighborhood: string,
  number: string,
  password:string,
  stateInscription: number,
  street: string,
  trandingName: string
  uf:string,
  user:string 
}

function Register() {
  const classes = useStyle();

  const createUser = (email,senha) => {
    let auth = null;
    firebase.auth().createUserWithEmailAndPassword(email,senha)
    .then((user) => {
      auth = user
      alert('Cadastrado com Sucesso')
    })
    .catch((err) => {
       alert('falha ao cadastrar')
       console.log("err",err)
    })

  }

  const createInfoUser= (values) => {
    console.log("values",values)
    const dbh = firebase.firestore();
      dbh.collection('users-web').add ({
        cep:values.cep,
        city: values.city,
        cnpj: values.cnpj,
        companyId: 1,
        email: values.email,
        municipalInscription: values.municipalInscription,
        neighborhood: values.neighborhood,
        number: values.number,
        password:values.password,
        stateInscription: values.stateInscription,
        street: values.street,
        trandingName: values.trandingName,
        uf: values.uf,
        user:values.user       
      })
  }
  return (
    <div className={classes.root}>
      <Card className="card">
        <CardContent className="container">
          <img className="img" src={Logo} alt="" />

          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                const data = JSON.stringify(values)
                const obj = JSON.parse(data)
                
                console.log("data",obj)
                const value = {
                  cep:obj.CEP,
                  city: obj.city,
                  cnpj: obj.CNPJ,
                  companyId: 1,
                  email: obj.email,
                  municipalInscription: obj.municipalRegistration,
                  neighborhood: obj.district,
                  number: obj.num,
                  password:`${obj.companyName}123`,
                  stateInscription: obj.stateRegistration,
                  street: obj.street,
                  trandingName: obj.companyName,
                  uf: obj.uf,
                  user:obj.email
                }
                 createUser(obj.email,`${obj.companyName}123`)
                 createInfoUser(value)
                 actions.setSubmitting(false);                
            }}
            validationSchema={validations}
          >
            <Form className="form">
              <Field className="input" type="text" name="email" placeholder="E-mail" />
              <ErrorMessage className="form-error" component="span" name="email" />

              <Field className="input" type="text" name="companyName" placeholder="Razão Social" />
              <ErrorMessage className="form-error" component="span" name="companyName" />

              <div className="rowForm">
                <Field className="input" type="number" name="CEP" placeholder="CEP"/>
                <ErrorMessage className="form-error" component="span" name="CEP"/>

                <Field className="input segundodalinha" type="number" name="num" placeholder="Número" />
                <ErrorMessage className="form-error" component="span" name="Numero" />
              </div>

              <Field className="input" type="text" name="street" placeholder="Rua"/>
              <ErrorMessage className="form-error" component="span" name="Rua" />

              <Field className="input" type="text" name="district" placeholder="Bairro" />
              <ErrorMessage className="form-error" component="span" name="Bairro" />

              <div className="rowForm">
                <Field className="input" type="text" name="city" placeholder="Cidade"/>
                <ErrorMessage className="form-error" component="span" name="Cidade"/>

                <TopBarStyle className="TopBar">
                    <label>UF:</label>
                    <Select options={uf} className="selectUf" placeholder=""/>
                </TopBarStyle>
              </div>

              <Field className="input" type="number" name="CNPJ" placeholder="CNPJ"/>
              <ErrorMessage className="form-error" component="span" name="CNPJ"/>

              <Field className="input" type="number" name="stateRegistration" placeholder="Incrição Estadual"/>
              <ErrorMessage className="form-error" component="span" name="IncriçãoEstadual"/>

              <Field className="input" type="number" name="municipalRegistration" placeholder="Incricao Municipal"/>
              <ErrorMessage className="form-error" component="span" name="IncricaoMunicipal"/>

              <button className="button" type="submit">Cadastrar</button>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
