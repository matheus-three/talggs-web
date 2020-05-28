import React from 'react';
import trash from '../../../Assets/Icons/lixo.svg'
import {  ListPromoStyle, ItemPromoStyle, PositionItemStyle, ButtonPromoStyle } from '../../../Assets/styled-components/StylesEditCupons';


interface Iprops {
    discount: number;
	point: number;
	code: string;
}

function SavedCoupon () {


    
    return (
        <ListPromoStyle>
            <p>Promoções Disponíveis</p>
            <ItemPromoStyle>

                <PositionItemStyle>                
                <p>10% de desconto na próxima compra</p>
                <p>Cód do Cupom: K26LAL4S2</p>
                <p>Pontuação: 500 <span>Até: 25/03/2020</span></p>  
                </PositionItemStyle>
                <ButtonPromoStyle>
                    <img src={trash} alt={"botão excluir"}></img>
                </ButtonPromoStyle>
            </ItemPromoStyle>

            <ItemPromoStyle>
                <PositionItemStyle>
                <p>25% de desconto na próxima compra</p>
                <p>Cód do Cupom: W4KANDAFR</p>
                <p>Pontuação: 1250 <span>Até: 09/05/2020</span></p>  
                </PositionItemStyle>
                <ButtonPromoStyle>
                    <img src={trash} alt={"botão excluir"}></img>
                </ButtonPromoStyle>
            </ItemPromoStyle>
            
            <ItemPromoStyle>
                <PositionItemStyle>
                <p>50% de desconto na próxima compra</p>
                <p>Cód do Cupom: BLOGAYRINHA50</p>
                <p>Pontuação: 5000 <span>Até: 14/06/2020</span></p>  
                </PositionItemStyle>
                <ButtonPromoStyle>
                    <img src={trash} alt={"botão excluir"}></img>
                </ButtonPromoStyle>
            </ItemPromoStyle>

		</ListPromoStyle>
    )
}

export default SavedCoupon;