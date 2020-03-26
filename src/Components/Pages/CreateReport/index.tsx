import React, { Fragment } from 'react'
import { Title, Container } from '../../Assets/Styles';
import Filter from './Filter';
import Stats from './Stats';



function CreateReport (){
    return(
        <Fragment>
						<Title top ={"30px"} left = {"25%"}> Criar novo relatório </Title>
            <Container>
            	<Filter/>
							<Stats/>
            </Container>
        </Fragment>
     
    );
}

export default CreateReport;