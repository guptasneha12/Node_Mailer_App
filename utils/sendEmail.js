const nodemailer=require('nodemailer');

const sendEmail=async(to,messageContent)=>{
    try {
        // create transporter  means transporter is an object that is going to specify email provider SMTP i.e simple mail transfer protocol and it conatains other configuration  like host port and secure etc.
        const transporter=nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            auth:{
                user:'guptasneha2003.sg@gmail.com',
                pass:'mysqcnjdirinuzqy',
            }
        })

// message object
const message={
    to,
    subject:"New Message from Nodemailer APP",
    html:`
    <h3>You have received a new message from Nodemailer APP</h3>
    <p>${messageContent}</p>
    `,
};

//send the email
const info=await transporter.sendMail(message);
console.log('Message sent',info.messageId);


    } catch (error) {
        console.log(error);
        throw new Error('Email could not be sent');
    }
};



module.exports=sendEmail;