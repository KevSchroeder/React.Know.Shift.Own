//Resend code when needed


// import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../components/email-template';
// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const body = await request.json();
//     console.log("body", body)
//     const { email, name, phone, subject } = body;
//     const data = await resend.emails.send({
//       from: 'Brian <brian@knowshiftown.com>',
//       to: email,
//       subject: "This is Brian M",
//       react: EmailTemplate({ firstName: name }),
//     });

//     if(data.status === 'success') {
//       return NextResponse.json({ message: 'Email Succesfully Sent!' })
//     }
//     return NextResponse.json(data)
//   } catch (error) {
//     console.log('error', error);
//   }
// };
