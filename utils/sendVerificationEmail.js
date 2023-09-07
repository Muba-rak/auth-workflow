const sendEmail = require("./sendMail");

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const message = `<p>please confirm your email by clicking on the link : </p>`;
  return sendEmail({
    to: email,
    html: `<h4>Hello, ${name}</h4>
    ${message}
      `,
    subject: "Email confirmation",
  });
};

module.exports = sendVerificationEmail;
