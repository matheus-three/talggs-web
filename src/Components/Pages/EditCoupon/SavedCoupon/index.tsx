import React, { useEffect, useState } from 'react';
import trash from '../../../Assets/Icons/lixo.svg'
import {  ListPromoStyle, ItemPromoStyle, PositionItemStyle, ButtonPromoStyle } from '../../../Assets/styled-components/StylesEditCupons';
import firebase from 'firebase';
import moment from 'moment';
import { addDaysinTheDate } from '../../../util/AddDaysInTheDate';


interface Iprops {
    discount: number;
	point: number;
	code: string;
}

function SavedCoupon () {

    const [coupons,setCoupons] = useState([])
    
    const getCoupons = () => {
        const dbh = firebase.firestore();
        const data = dbh.collection('coupons-web').get()
        .then((res) => {
            let array = []
           res.forEach((doc) => {
                array.push(doc.data())
                console.log(array)
                setCoupons(array)
            })

        })
   
    }
    
useEffect(() => {
    getCoupons()

},[])



    return (
        <ListPromoStyle>
            <p>Promoções Disponíveis</p>    
        {coupons.map((cup) => {
            const data = addDaysinTheDate(cup.dataLaunch,cup.discountDuration)
               return <ItemPromoStyle>
                <PositionItemStyle>                
                <p>{`${cup.discount}% de desconto na próxima compra`}</p>
                <p>{`Cód do Cupom: ${cup.discountCode}`}</p>
                <p>{`Pontuação: ${cup.points}`} <span>{`Até: ${moment(data).format('DD/MM/YYYY')}`}</span></p>  
                </PositionItemStyle>
                <ButtonPromoStyle>
                    <img src={trash} alt={"botão excluir"}></img>
                </ButtonPromoStyle>
                </ItemPromoStyle>
        })}

		</ListPromoStyle>
    )
}

export default SavedCoupon;