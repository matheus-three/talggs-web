import React, { Fragment } from 'react'
import {Container } from '../../Assets/StylesCreateReportComponent';
import Filter from './Filter';
import Stats from './Stats';



function CreateReport() {
    return (
        <Fragment>
          <Container>
            <Filter />
          	<Stats />
         </Container>  
        </Fragment>

    );
}

export default CreateReport;