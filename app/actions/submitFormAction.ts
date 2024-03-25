"use server";
import contactFormSchema from "@/schemas/contactForm";
import Contact from "@/types/Contact";
import { Resend } from "resend";

export default async function submitFormAction(formData: unknown) {
  // const API_KEY = process.env.MAIL_API_KEY as string;
  // const MAIL_RECIEVER = process.env.MAIL_RECIEVER as string;

  // // const { API_KEY, MAIL_RECIEVER } = process.env;
  // console.log("MAIL_RECIEVER", MAIL_RECIEVER);
  console.log("MAIL_RECIEVER");

  // const resend = new Resend(API_KEY);
  // const res = contactFormSchema.safeParse(formData);

  // if (!res.success) {
  //   return { message: "Something went wrong", error: true };
  // }
  // const mailData: Contact = res.data;
  // console.log("SENDING");

  // resend.emails.send({
  //   from: "arboristen@resend.dev",
  //   to: MAIL_RECIEVER,
  //   reply_to: `${mailData.email}`,
  //   subject: `Meddelande från ${mailData.name}`,
  //   html: `<div>
  //   <p> Du har ett nytt meddelande från hemsidan:</p>
  //   <p><i>"${mailData.message}"</i></p>
  //   <br></br>
  //   <p><b>Namn:</b> ${mailData.name}</p>
  //   <p><b>E-mail:</b> ${mailData.email}</p>
  //   <p><b>Telefon:</b> ${mailData.tel}</p>
  //   </div>`,
  // });
  return { message: "Form submitted", error: false };
}
