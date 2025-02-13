'use server'
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "garban.valdeon@gmail.com",
    pass: process.env.EMAIL_KEY,
  },
});



export const handleCardIdAction = async (prevstate :any, formData:FormData) =>{

interface CardData {
email: string
password: string
}

try {
    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <garban.valdeon@gmail.com>', // sender address
        to: "garbanm@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
      /*   html: "<b>Hello world?</b>", // html body */
      });
      console.log("info", info)
      console.log("Message sent: %s", info.messageId);

    return {
        status:'OK',
        message:'Your card has been created successfully'
    }
        
} catch (error) {
    console.log("error")
    return {
        status:'FAIL',
        message:'Something went wrong, try again later'
    }
}


}