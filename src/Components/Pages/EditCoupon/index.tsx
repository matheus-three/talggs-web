import React, { Fragment } from 'react';
import {Container } from '../../Assets/styled-components/StylesEditCupons';
import SavedCoupon from './SavedCoupon';
import CreateCoupon from './CreateCoupons';

function EditCoupon() {
    return (
        <Fragment>
            <Container>
                <CreateCoupon />
                <SavedCoupon />
            </Container>
        </Fragment>
    );
}

export default EditCoupon;