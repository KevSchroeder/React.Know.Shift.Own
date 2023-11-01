import type { NextApiRequest, NextApiResponse } from 'next';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Data', req.body);

  const { name, email, message } = req.body;

  const msg = {
    to: 'kschroeder290@gmail.com', // Change to your recipient
    from: 'kschroeder290@gmail.com', // Change to your verified sender
    subject: 'New Contact Form!',
    text: ` Hello,
  
  You have a new form entry from: ${name} ${email}. 

  ${message}
  `,
  };

  let sendgridResponse;
  
  try {
    sendgridResponse = await sgMail.send(msg);

    res.status(sendgridResponse.status).json({ submitted: true });
  } catch {
    res.status(500).json(JSON.stringify(sendgridResponse));
  }
}
