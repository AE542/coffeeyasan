const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

// const credentials = require('variables/.js');

const app = express();
const port = 3500;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (request, result) => {
    const name = request.body.name;
    const email = request.body.email;
    const body= request.body.message;

const userEmail = process.env.TRANSPORTER_EMAIL;
const userPwd = process.env.NEW_PWD;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: userEmail,
        pass: userPwd
    },
    // port: port,
    // secure: true
});

const mailOptions = {
from: email,
to: userEmail,
subject: 'New Message from Coffee Ya San!',
text: `Name: ${name} \n
       Email: ${email} \n
       Message: ${body}`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
        result.status(500).send('Error sending message');
        console.log(process.env.TRANSPORTER_EMAIL);
    } else {
        console.log('Email sent', info.response)
        result.status(200).send('Email sent successfully');
        console.log(process.env.TRANSPORTER_EMAIL);
    }
});

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
    console.log(success);
      console.log("Server is ready to take our messages");
    }
  });

});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});