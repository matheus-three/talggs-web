import React from 'react'
import { CreatePromoStyle, ListPromoStyle, ItemPromoStyle, PositionItemStyle, ButtonPromoStyle } from '../../Assets/styled-components/StylesEditCupons';
import { PositionStyle } from '../../Assets/styled-components/StylesEditCupons';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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

function EditCupons () {
 
	const classes = useStyles();

	function handleSubmit (e) {
		console.log("alo",e.target.value)
	}
	
	return(
		<PositionStyle>
			<CreatePromoStyle>
				<p>Criar Promoção</p>
				<form className={classes.root} noValidate autoComplete="off">
					<TextField 
						id="standard-basic" 
						label="Duração" 
						required
						/>
					<TextField id="standard-basic" label="Desconto" required/>
					<TextField id="standard-basic" label="Pontuação Necessária" required/>  
					<ButtonPromoStyle onSubmit = {handleSubmit}> Criar Promoção </ButtonPromoStyle>   
				</form>
				
			</CreatePromoStyle>

			<ListPromoStyle>
				<p>Promoções Disponíveis</p>
				<ItemPromoStyle>
					<PositionItemStyle>
					<p>10% de desconto na proxima compra</p>
					<p>Pontuação: 50 <span>Até: 25/03/2020</span></p>  
					</PositionItemStyle>
					<ButtonPromoStyle>Gerar Promoção</ButtonPromoStyle>
				</ItemPromoStyle>
				<ItemPromoStyle>
					<PositionItemStyle>
					<p>10% de desconto na proxima compra</p>
					<p>Pontuação: 50 <span>Até: 25/03/2020</span></p>  
					</PositionItemStyle>
					<ButtonPromoStyle>Gerar Promoção</ButtonPromoStyle>
				</ItemPromoStyle>
				<ItemPromoStyle>
					<PositionItemStyle>
					<p>10% de desconto na proxima compra</p>
					<p>Pontuação: 50 <span>Até: 25/03/2020</span></p>  
					</PositionItemStyle>
					<ButtonPromoStyle>Gerar Promoção</ButtonPromoStyle>
				</ItemPromoStyle>
			 
			</ListPromoStyle>
		</PositionStyle>
 
		
	)
}

export default EditCupons;