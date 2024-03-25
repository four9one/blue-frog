"use client";
import submitFormAction from "@/actions/submitFormAction";
import contactFormSchema from "@/schemas/contactForm";
import Contact from "@/types/Contact";
import { NextResponse } from "next/server";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (data: FormData) => {
    const formData: Contact = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      tel: data.get("tel") as string,
      postNr: data.get("postal_code") as string,
      city: data.get("city") as string,
      message: data.get("message") as string,
    };
    const res = contactFormSchema.safeParse(formData);

    if (!res.success) {
      const err = res.error.issues;

      toast.error(err[0].message, {
        duration: 4000,
        position: "top-center",
        style: { padding: "1rem" },
      });
    } else {
      formRef.current?.reset();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      toast(
        <div className="flex flex-col">
          <p style={{ fontWeight: "700" }}>Ditt meddelande är skickat!</p>
          <p>Jag hör av mig så fort jag kan.</p>
          <p>Ha en fin dag!</p>
          <br />
          <p>Med vänliga hälsningar</p>
          <p>Mats</p>
        </div>,
        {
          duration: 4000,
          position: "top-center",
          style: { padding: "1rem" },
        },
      );
      const responseFromMail = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res.data),
      });

      const ul = await responseFromMail.json();
    }
  };

  return (
    <div className="flex min-h-screen justify-center">
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(new FormData(e.target as HTMLFormElement));
        }}
        className="mb-8 flex w-full max-w-2xl flex-col px-6"
      >
        <label htmlFor="name">Namn</label>
        <input type="text" id="name" name="name" required></input>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" required></input>
        <label htmlFor="tel">Telefon</label>
        <input type="tel" id="tel" name="tel"></input>
        {/* <fieldset className="flex flex-col sm:flex-row sm:gap-4">
          <legend className="sr-only">Adress</legend>
          <div className="flex flex-col sm:w-24">
            <label htmlFor="postal_code">Postnummer</label>
            <input type="text" id="postal_code" name="postal_code"></input>
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="city">Ort</label>
            <input type="text" id="city" name="city"></input>
          </div>
        </fieldset> */}
        <label htmlFor="message">Meddelande</label>
        <textarea id="message" name="message" rows={5}></textarea>
        <button
          type="submit"
          className="my-4 rounded-xl bg-darker py-3 text-[16px] font-bold tracking-wider text-slate-200 hover:bg-dark focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skicka
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default ContactForm;
