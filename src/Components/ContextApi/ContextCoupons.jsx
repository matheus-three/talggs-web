import React, { createContext, useState} from 'react'
import * as firebase from 'firebase';

export const ContextCoupons = createContext();


const ContextCouponsProvider = ({ children }) => {
  const [apiCoupons,setApiCoupons] = useState([])

	async function getCoupons() {
    const dbh = firebase.firestore();
    const reportRef = dbh.collection("coupons-web").doc("tazwedPlVDjglSak9qEZ");
    
    reportRef.get().then(cup => {
      console.log("cup",cup.data())
      const {coupons} = cup.data()
      setApiCoupons(coupons)
    });
}

  async function setCoupons(coupons){
    const dbh = firebase.firestore();
    const couponsRef = dbh.collection("coupons-web").doc("tazwedPlVDjglSak9qEZ");
  
    couponsRef.set({
      coupons,
    },{merge: true}).then(() => {
      getCoupons()
    })
    

  }
	return (
		<ContextCoupons.Provider value={{getCoupons,apiCoupons,setCoupons}}>
			{children}
		</ContextCoupons.Provider>
	)

}

export default ContextCouponsProvider;