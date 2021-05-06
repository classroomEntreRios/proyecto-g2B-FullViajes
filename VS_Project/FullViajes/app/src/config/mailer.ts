const nodemailer = require("nodemailer"); //deberia ser import



const createTransporter=()=>{
    const transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 465,
     secure: true, // true for 465, false for other ports
     auth: {
       user: 'fullviajescontact@gmail.com', // generated ethereal user
       pass: 'wgoyrygvusejvlcg', // generated ethereal password
     }
 });
      return transporter;
};

const sendMail =async()=>{
  const transpoñrter = createTransporter()
  const info=await transpoñrter.sendEmail({
    from: "this.formData.email", // sender address
       to: "fullviajescontact@gmail.com", // list of receivers
       subject: "Consulta FullViajes ✔", // Subject line
       text: "this.formData.consulta", // plain text body
       html: "`<b>${this.formData.consulta}</b>`", // htm
  });
  console.log("Mensaje enviado",info.messageId);
  return
}
exports.sendMail=()=>sendMail();