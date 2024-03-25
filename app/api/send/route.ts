import contactFormSchema from "@/schemas/contactForm";
import Contact from "@/types/Contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.MAIL_API_KEY);

export async function POST(request: Request, response: Response) {
  const data = await request.json();

  const res = contactFormSchema.safeParse(data);

  if (!res.success) {
    console.log("fail");
  } else {
    console.log("success");
    const mailData: Contact = res.data;
    const dataToMail = await resend.emails.send({
      from: "arboristen@resend.dev",
      to: [
        process.env.MAIL_DEVELOPER as string,
        process.env.MAIL_CUSTOMER as string,
      ],
      reply_to: `${mailData.email}`,
      subject: `Meddelande från ${mailData.name}`,
      html: `<div>
      <p> Du har ett nytt meddelande från hemsidan:</p>
      <p><i>"${mailData.message}"</i></p>
      <br></br>
      <p><b>Namn:</b> ${mailData.name}</p>
      <p><b>E-mail:</b> ${mailData.email}</p>
      <p><b>Telefon:</b> ${mailData.tel}</p>
      <p><b>Postnummer:</b> ${mailData.postNr}</p>
      <p><b>Ort:</b> ${mailData.city}</p>
      </div>`,
    });
    console.log("mailData", mailData);
  }

  // return new Response("Hello, Next.js!", {
  //   status: 200,
  // });

  return NextResponse.json({ message: "Succes" });
}
