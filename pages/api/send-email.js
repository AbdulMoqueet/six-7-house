const { sendMail } = require('.//SendMail');

export default async function handler(req, res) {

    const { email, name } = req.body;

    const mailData = {
        to: email,
        sub: 'Greetings from Six7House',
        html: `<h1>Hi ${name} Thanks for showing interest in Six7House</h1>
               <h4>We will get back to u shortly</h4>`
    };

    const mailSuccess = await sendMail(mailData);

    if (mailSuccess) {
        console.log("mail sent");
        res.json({ message: 'mail sent' });
    } else {
        res.status(400).json({ message: 'failed to send mail' });
    }
}