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

const uf = [
  { value: "AC", label: "AC"},
  { value: "AL", label: "AL"},
  { value: "AP", label: "AP"},
  { value: "AM", label: "AM"},
  { value: "BA", label: "BA"},
  { value: "CE", label: "CE"},
  { value: "DF", label: "DF"},
  { value: "ES", label: "ES"},
  { value: "GO", label: "GO"},
  { value: "MA", label: "MA"},
  { value: "MT", label: "MT"},
  { value: "MS", label: "MS"},
  { value: "MG", label: "MG"},
  { value: "PA", label: "PA"},
  { value: "PB", label: "PB"},
  { value: "PR", label: "PR"},
  { value: "PE", label: "PE"},
  { value: "PI", label: "PI"},
  { value: "RJ", label: "RJ"},
  { value: "RN", label: "RN"},
  { value: "RS", label: "RS"},
  { value: "RO", label: "RO"},
  { value: "RR", label: "RR"},
  { value: "SC", label: "SC"},
  { value: "SP", label: "SP"},
  { value: "SE", label: "SE"},
  { value: "TO", label: "TO"},
];

const useStyle = makeStyles(StylesRegister);

function Register() {
  const classes = useStyle();
  const [values, setValue] = useState({});

  const validations = yup.object().shape({
    companyName: yup.string().required(),
    CNPJ: yup.number().min(11).required(),
    email: yup.string().email().required(),
  });
  console.log(values);
  return (
    <div className={classes.root}>
      <Card className="card">
        <CardContent className="container">
          <img className="img" src={Logo} alt="" />

          <Formik
            initialValues={{ companyName: "", CNPJ: "", email: "" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 3));
                actions.setSubmitting(false);
              }, 3000);
            }}
          >
            <Form className="form">
              <Field
                className="input"
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <ErrorMessage
                className="form-error"
                component="span"
                name="E-mail"
              />

              <Field
                className="input"
                type="text"
                name="companyName"
                placeholder="Razão Social"
              />
              <ErrorMessage
                className="form-error"
                component="span"
                name="companyName"
              />

              <div className="rowForm">
                <Field
                  className="input"
                  type="number"
                  name="CEP"
                  placeholder="CEP"
                />
                <ErrorMessage
                  className="form-error"
                  component="span"
                  name="CNPJ"
                />

                <Field
                  className="input segundodalinha"
                  type="number"
                  name="num"
                  placeholder="Número"
                />
                <ErrorMessage
                  className="form-error"
                  component="span"
                  name="Número"
                />
              </div>

              <Field
                className="input"
                type="text"
                name="street"
                placeholder="Rua"
              />
              <ErrorMessage
                className="form-error"
                component="span"
                name="Rua"
              />

              <Field
                className="input"
                type="text"
                name="district"
                placeholder="Bairro"
              />
              <ErrorMessage
                className="form-error"
                component="span"
                name="Bairro"
              />

              <div className="rowForm">
                <Field
                  className="input"
                  type="text"
                  name="city"
                  placeholder="Cidade"
                />
                <ErrorMessage
                  className="form-error"
                  component="span"
                  name="Cidade"
                />

                <TopBarStyle className="TopBar">
                    <label>UF:</label>
                    <Select 
                    options={uf} 
                    className="selectUf"
                    placeholder=""
                    />
                </TopBarStyle>
              </div>

              <Field
                className="input"
                type="number"
                name="CNPJ"
                placeholder="CNPJ"
              />
              <ErrorMessage
                className="form-error"
                component="span"
                name="CNPJ"
              />

              <Field
                className="input"
                type="number"
                name="stateRegistration"
                placeholder="Incrição Estadual"
              />
              <ErrorMessage
                className="form-error"
                component="span"
                name="Incrição Estadual"
              />

              <Field
                className="input"
                type="number"
                name="municipalRegistration"
                placeholder="Incrição Municipal"
              />
              <ErrorMessage
                className="form-error"
                component="span"
                name="Incrição Municipal"
              />

              <button className="button" type="submit">
                Cadastrar
              </button>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
