const nodemailer = require('nodemailer');

module.exports.sendMail = ({ to, sub, html }) => {

    return new Promise((resolve, reject) => {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "abdulmoqueet13@gmail.com",
                pass: "twwxrmhuljtvcpid"
            }
        });

        const mailOptions = {
            from: "abdulmoqueet13@gmail.com",
            to: to,
            subject: sub,
            html: html
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
                resolve(false);
            } else {
                console.log(info);
                resolve(true);
            }
        });
    })
}