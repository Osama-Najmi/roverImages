const fetch = require("node-fetch");
var nodemailer = require("nodemailer");
const { send } = require("process");
var xoauth2 = require('xoauth2');
const port = 3000;

let date_ob = new Date();
let date = date_ob.getDate();

var users = [
    'osama.najmi18@gmail.com',
    'humayunmalik608@gmail.com'
];

const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?max_date=date&api_key=';
const apiKey = "yqFxgNHbbLfCer0X9zpU3BQcmy3zgijnPXGg94Ma";

const fetchData = async () => {
    try {
        const response = await fetch(`${baseUrl}${apiKey}`)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
fetchData()

const sendImage = async (data) => {
    let transporter = nodemailer.createTransport({ // authentication is failing continously
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
            user: 'osama.najmi18@gmail.com',
            pass: 'eaadnkhspstlkwlz',
        },
    });

    var mailOptions = {
        from: 'osama.najmi18@gmail.com',
        to: users,
        subject: 'Mars Rover Image'
        // body: data.img_src will be passed
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

sendImage()


