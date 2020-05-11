import React, { useState, Fragment, useContext } from 'react';
import { PositionStyle, FormContainer, LogoStyle } from '../../Assets/styled-components/StylesEditPerfil';
import logo from '../../Assets/Icons/Logo1V - Web.svg'
import { Field, Form, Formik, ErrorMessage } from "formik";
import Select from 'react-select';
import { TopBarStyle } from '../../Assets/styled-components/StylesMainHistory';
import { CardContent, Card } from '@material-ui/core';
import { RegisterContext } from '../../ContextApi/ContextRegister';
import SaveEditPerfil from './SaveEditPerfil'

const dataUf = [
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

function Perfil() {
    const {setSaveUpdateState} = useContext(RegisterContext);
    
    const [trandingName, setTradingName] = useState("Americanas")
    const [email, setEmail] = useState("americanas@america.com")
    const [cnpj, setCnpj] = useState("99.999.999/9999-99")
    const [stateInscription, setStateInscription] = useState("99.999-9999-9")
    const [municipalInscription, setMunicipalInscription] = useState("99.99.999.9999.999")

    const [cep, setCep] = useState("992.312.321")
    const [number, setNumber] = useState("99")
    const [street, setStreet] = useState("Manuel Algusto Rangel")
    const [neighborhood, setNeighborhood] = useState("Vila da Areia")
    const [city, setCity] = useState("Brasil")
    const [uf, setUf] = useState("SP")

    const [disableBtn, setDisableBtn] = useState(true);

    const activeSave = (e) => {
        if(e.target.value.length > 1) {
            setDisableBtn(false);
        } else {
            setDisableBtn(true);
        }
       
    }

    return (
        <Fragment>    
            <PositionStyle>
                <FormContainer>
                    <h1 className="title">Editar Dados</h1>

                    <Card className="card">
                        <CardContent className="container">
                        
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

                                <label className="label">Razão Social:</label>
                                <Field
                                    className="input inputBlocked"
                                    type="text"
                                    name="companyName"
                                    variant="filled"
                                    placeholder="Razão Social"
                                    disabled 
                                    value={trandingName}
                                />
                                <ErrorMessage
                                    className="form-error"
                                    component="span"
                                    name="companyName"
                                />

                                <label className="label">E-mail:</label>
                                <Field
                                    className="input inputBlocked"
                                    type="email"
                                    name="email"
                                    variant="filled"
                                    placeholder="E-mail"
                                    disabled 
                                    value={email}
                                />
                                <ErrorMessage
                                    className="form-error"
                                    component="span"
                                    name="E-mail"
                                />

                                <label className="label">CNPJ:</label>
                                <Field
                                    className="input inputBlocked"
                                    type="text"
                                    name="CNPJ"
                                    variant="filled"
                                    placeholder="CNPJ"
                                    disabled 
                                    value={cnpj}
                                />
                                <ErrorMessage
                                    className="form-error"
                                    component="span"
                                    name="CNPJ"
                                />

                                <label className="label">Inscrição Estadual:</label>
                                <Field
                                    className="input inputBlocked"
                                    type="text"
                                    name="stateRegistration"
                                    variant="filled"
                                    placeholder="Incrição Estadual"
                                    disabled 
                                    value={stateInscription}
                                />
                                <ErrorMessage
                                    className="form-error"
                                    component="span"
                                    name="Incrição Estadual"
                                />

                                <label className="label">Inscrição Municipal:</label>
                                <Field
                                    className="input inputBlocked"
                                    type="text"
                                    name="municipalRegistration"
                                    variant="filled"
                                    placeholder="Incrição Municipal"
                                    disabled 
                                    value={municipalInscription}
                                />
                                <ErrorMessage
                                    className="form-error"
                                    component="span"
                                    name="Incrição Municipal"
                                />

                            
                                <label className="label">CEP:</label>
                                <div className="rowForm">
                                    <Field
                                    className="input"
                                    type="text"
                                    name="CEP"
                                    placeholder="CEP"
                                    value={cep}
                                    onChange={activeSave}
                                    />
                                    <ErrorMessage
                                    className="form-error"
                                    component="span"
                                    name="CNPJ"
                                    />

                                    <label className="labelMiddle">N°:</label>
                                    <Field
                                    className="input segundodalinha"
                                    type="text"
                                    name="num"
                                    placeholder="Número"
                                    value={number}
                                    onChange={activeSave}
                                    />
                                    <ErrorMessage
                                    className="form-error"
                                    component="span"
                                    name="Número"
                                    />
                                </div>

                                <label className="label">Rua:</label>
                                <Field
                                    className="input"
                                    type="text"
                                    name="street"
                                    placeholder="Rua"
                                    value={street}
                                    onChange={activeSave}
                                />
                                <ErrorMessage
                                    className="form-error"
                                    component="span"
                                    name="Rua"
                                />

                                <label className="label">Bairro:</label>
                                <Field
                                    className="input"
                                    type="text"
                                    name="district"
                                    placeholder="Bairro"
                                    value={neighborhood}
                                    onChange={activeSave}
                                />
                                <ErrorMessage
                                    className="form-error"
                                    component="span"
                                    name="Bairro"
                                />

                                <label className="label">Cidade:</label>
                                <div className="rowForm">
                                    <Field
                                    className="input"
                                    type="text"
                                    name="city"
                                    placeholder="Cidade"
                                    value={city}
                                    onChange={activeSave}
                                    />
                                    <ErrorMessage
                                    className="form-error"
                                    component="span"
                                    name="Cidade"
                                    />

                                    <TopBarStyle className="TopBar">
                                        <label className="labelMiddle">UF:</label>
                                        <Select 
                                        options={dataUf} 
                                        className="selectUf"
                                        value={uf}
                                        />
                                    </TopBarStyle>
                                </div>


                                <button disabled={disableBtn}className="button" onClick={() => setSaveUpdateState(true)}>
                                    Salvar
                                </button>
                                </Form>
                            </Formik>
                        </CardContent>
                    </Card>
                </FormContainer>

                <LogoStyle>        	
                    <img className="logo" src={logo} alt={"logo"}></img>
                </LogoStyle>

            </PositionStyle>

            <SaveEditPerfil/>
    </Fragment>
    )
}

export default Perfil