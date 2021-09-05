 const functions = require('firebase-functions');
 const admin = require("firebase-admin")
 const nodemailer = require('nodemailer');

admin.initializeApp()

require('dotenv').config()


exports.sendEmailNotification=functions.firestore.document('pre-register/{docId}')
.onCreate((snap,ctx) => {
    const data=snap.data();

    const AuthData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure: true,
        auth: {
            user:'talggsltda@gmail.com',
            pass:'talggs1234',
        }
    })
console.log("data",data.email)
    AuthData.sendMail({
        from: `${data.email}`,
        to: `talggsltda@gmail.com`,
        subject: `Solicitação de cadastro para o email ${data.email}`,
        text: 'Bem vindo ao nosso app, complete seu cadastro para fazer o login, senha: 1234, usuário:bla bla',
        html: `<p>Solicitação de cadastro feita para a empresa ${data.companyName}</p>
               <p><span><strong>CNPJ: <strong/>${data.CNPJ}</span><br/>
               <span><strong>Razão Social:</strong> ${data.companyName}</span> <br/>
               <span> <strong>Email: <strong/>${data.email}</p>
               <span> <strong>Chave de Acesso: <strong/>${data.codeAcess}</p>`,
        // attachments:[
        //     {
        //     "filename":"table.pdf",
        //     "path": "./table (8).pdf"
        //     }
        // ]
    }).then(res => console.log('success')).catch(err => console.log(err));
    
}) 
