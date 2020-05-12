import React, { Fragment, useContext, useState, useRef, useEffect } from 'react';
import { CreatePromoStyle } from '../../../Assets/styled-components/StylesEditCupons';
import { PositionStyle } from '../../../Assets/styled-components/StylesEditCupons';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { AppContext } from '../../../ContextApi/Context';

import { ButtonSaveStyle } from '../../../Assets/styled-components/StylesSavedComponent';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(2),
				width: '20ch',
			},
		
		},
	}),
);

function CreateCoupon(props: any) {

    const classes = useStyles();

	function handleSaveClick() {
	
	}

	function handleSave (e) {
	
	}
	
	return(
		<PositionStyle>
			<CreatePromoStyle>
				<p>Criar Cupom de Desconto</p>
				<form className={classes.root} noValidate autoComplete="off">
					<TextField onChange={handleSave} id="discountCoupon" type="number" label="Desconto (%)" required />
					<TextField onChange={handleSave} id="punctuation" type="number" label="Pontuação Necessária" required /> 
					<TextField onChange={handleSave} id="discountCode" type="text" label="Código de Desconto" required /> 
					
					{/*
						validation ?
						<p>*Por favor, preencha todos os campos corretamente.</p>
						:undefined
					*/}
					
					<ButtonSaveStyle>
						<button onClick={handleSaveClick}> Criar Cupom </button>
					</ButtonSaveStyle>			   
				</form>				
			</CreatePromoStyle>
        </PositionStyle>
    )
}

export default CreateCoupon;