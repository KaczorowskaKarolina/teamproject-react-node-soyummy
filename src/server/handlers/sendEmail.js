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

export { sendEmail };
