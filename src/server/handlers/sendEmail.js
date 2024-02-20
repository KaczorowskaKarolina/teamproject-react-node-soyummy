import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.EMAIL_API_KEY);

async function sendEmail({ to, from, subject, text, html }) {
  try {
    const message = {
      to: to,
      from: from || 'smalec1236@gmail.com',
      subject: subject || '',
      text: text || '',
      html: html || '',
    };
    await sgMail.send(message);
    console.log('Email sent');
  } catch (e) {
    console.log('Error occured: ', e);
    return;
  }
}

async function sendVerificationEmail({ emailTo, verificationToken }) {
  await sendEmail({
    to: emailTo,
    subject: 'SoYummy - confirm your email!',
    text: `Hi. To confirm your email please click the link below:`,
    html: `<a href="http:localhost:5000/api/users/verify/${verificationToken}">Confirm email</a>`,
  });
}

export { sendVerificationEmail };
