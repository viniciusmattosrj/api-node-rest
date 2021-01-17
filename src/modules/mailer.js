//const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { mailHost, mailPort, mailUser, mailPass } = require('../config/mail');

const transport = nodemailer.createTransport({  
    host : mailHost,
    port : mailPort,
    auth : {
      user : mailUser,
      pass : mailPass
    }
});

transport.use('compile', hbs({
    viewEngine: {
      extname: '.html',
      layoutsDir: './src/resources/mail/auth/',
      defaultLayout: 'forgot_password', 
      partialsDir: './src/resources/mail/',
    },
    viewPath: './src/resources/mail/',
    extName: '.html'
}));

module.exports = transport;