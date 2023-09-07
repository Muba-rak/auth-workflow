const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount(nodemailerConfig);
  const transporter = nodemailer.createTransport();

  return transporter.sendMail({
    from: '"Mubarak" <oladapomubarak@gmail.com>', // sender address
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
