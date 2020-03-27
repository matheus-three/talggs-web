import React, { Fragment } from 'react'
import { Title, Container, ButtonStyle } from '../../Assets/Styles';
import Filter from './Filter';
import Stats from './Stats';



function CreateReport() {
    return (
        <Fragment>
            <Title top={"30px"} left={"25%"}> Criar novo relatório </Title>
            <Container>
                <Filter />
                <Stats />
            </Container>
            <ButtonStyle>
                <span>Imprimir</span>
            </ButtonStyle>
            <ButtonStyle>
                <span>Salvar</span>
            </ButtonStyle>
        </Fragment>

    );
}

export default CreateReport;