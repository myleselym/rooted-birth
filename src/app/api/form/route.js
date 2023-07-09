import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  },
});

export const POST = async (req, res) => {
  const { first, last, email, phone, message } = await req.json();

  try {
    const mail = await transporter.sendMail({
      from: "bridgetdoula@gmail.com",
      to: "bridgetdoula@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${first} ${last}`,
      html: `
      <p>Name: ${first} ${last}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}
      <p>Message: ${message}</p>
      `,
    });
    console.log("Message sent: %s", mail.messageId);
    return new Response(JSON.stringify, { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(
      "Could not send the email. Your message was not sent.",
      { status: 500 }
    );
  }
};
