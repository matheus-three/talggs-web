import React from 'react';
import { CreatePromoStyle } from '../../../Assets/styled-components/StylesEditCupons';
import { PositionStyle } from '../../../Assets/styled-components/StylesEditCupons';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


import { ButtonSaveStyle } from '../../../Assets/styled-components/StylesSavedComponent';
import { Formik, Form, Field, ErrorMessage, setNestedObjectValues } from 'formik';
import firebase from 'firebase';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(2),
				width: '35ch',
			},
			'& .input': {
				
				marginBottom: '2%',
				background: 'transparent',
				fontSize: '18px',
				borderBottom: '1px solid #707070',
				color: '#2D4F6C',
				borderTop: '0',
				borderLeft: '0',
				borderRight: '0',
				padding: '0px 15px',

				'&:focus': {
					outline: 0,
			}
		},

		'& .form-error': {
			margin: '0px 12%',
			color: '#fb4545',
		},
		},

		'& .button': {
			height: '60px',
			fontSize: '20px',
			fontWeight: 'bold',
			textTransform: 'uppercase',
			borderRadius: '30px',
			border: 'none',
			color: '#2D4F6C',
			background: 'linear-gradient(to right, #F2A950, #dff2fb, #2D9AA6);',
			marginRight: '15px',
			cursor: 'pointer',
			boxShadow: '1px 5px 7px #a4a4a7',
			
				'&:focus': {
						outline: 0,
				}
		},
	}),
);


function CreateCoupon(props: any) {

		const classes = useStyles();
		const data = new Date();

		const createCoupon = (value) => {
			const dbh = firebase.firestore()
			console.log("points",value)
			dbh.collection('coupons-web').add({
				idEmpresa: '1',
				discount: value.discount,
				points: value.points,
				discountCode: 'KAJSI12S',
				dataLaunch: moment(data).format('DD/MM/YYYY'),
				discountDuration: value.discountDuration
			})

			alert('cupom criado')
		}
	
	return(
		<PositionStyle>
			<CreatePromoStyle>
				<p>Criar Cupom de Desconto</p>
				<Formik
				initialValues={{desconto: '',Points: '',discountDuration: ''}}
				onSubmit={(values, actions) => {
						const data = JSON.stringify(values)
						const obj = JSON.parse(data)
						
						console.log("data",obj)
						const value = {
							discount: obj.desconto,
							points: obj.Points,
							discountDuration: obj.discountDuration
						}
						createCoupon(value)
						 actions.setSubmitting(false);                
				}}	
			>
				<Form className={classes.root}>
					<Field className = "input" type='number' name='desconto' placeholder='Desconto (%)' />
					<ErrorMessage className = 'form-error' name = 'desconto'/>

					<Field className='input' type='number' name='Points' placeholder='Pontuação Necessária' />
					<ErrorMessage className = 'form-error' name = 'Points'></ErrorMessage>

					<Field className='input' type='number' name='discountDuration' placeholder='Código de Desconto' />
          <ErrorMessage className = 'form-error' name = 'discountDuration'></ErrorMessage>
					
					<ButtonSaveStyle>
						<button  type="submit"> Criar Cupom </button>
					</ButtonSaveStyle>			   
				</Form>				
				</Formik>
			
			</CreatePromoStyle>
        </PositionStyle>
    )
}

export default CreateCoupon;