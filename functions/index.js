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
        to: `${data.email}`,
        subject: 'Tallgs - Seu Cadastro foi aceito',
        text: 'Bem vindo ao nosso app, complete seu cadastro para fazer o login, senha: 1234, usuário:bla bla',
        html: `<p>Bem vindo ao nosso app ${data.companyName}</p><p>Complete seu cadastro para fazer o login</p></p>`,
        attachments:[
            {
            "filename":"table.pdf",
            "path": "./table (8).pdf"
            }
        ]
    }).then(res => console.log('success')).catch(err => console.log(err));
    
}) 
