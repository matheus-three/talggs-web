import firebase from "firebase";


export const IsLoggedUser = () => {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(true)
    } else {
      console.log(false)
    }
  });
}

export const LoginUser = (email: string, senha: string) => {
     return firebase.auth().signInWithEmailAndPassword(email, senha)
}


export const CreateUser = (email, senha) => {
  return firebase.auth().createUserWithEmailAndPassword(email, senha)
}


export const CreateInfoUser = (values) => {
  const dbh = firebase.firestore();
  dbh.collection('users-web').add({
    cep: values.cep,
    city: values.city,
    cnpj: values.cnpj,
    companyId: 1,
    email: values.email,
    municipalInscription: values.municipalInscription,
    neighborhood: values.neighborhood,
    number: values.number,
    password: values.password,
    stateInscription: values.stateInscription,
    street: values.street,
    trandingName: values.trandingName,
    uf: values.uf,
    user: values.user
  })

}

export const LogOut = () => {
  firebase.auth().signOut()
    .then(() => {
      alert("LogOut sucess")
      console.log('sucess')
    }, function (error) {
      console.error(error);
    });
}

export const SetPreRegister = (values: any) => {
  const dbh = firebase.firestore()
  dbh.collection('pre-register').add({
    companyName: values.companyName,
    CNPJ: values.CNPJ,
    email: values.email,
    codeAcess: values.codeAcess
  }).then(() => {
    alert("Acesse o email enviado para usa conta paras os proximos passos")
  })
}