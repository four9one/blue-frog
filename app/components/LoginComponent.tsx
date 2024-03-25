import contactFormSchema from "@/schemas/contactForm";
import Contact from "@/types/Contact";
import React, { useRef } from "react";
import toast from "react-hot-toast";

export default function LoginComponent() {
  const handleClick =
    () => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      console.log("Log in");
    };

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
    // <div className="bg-arb2 bg-c flex max-w-2xl flex-col border-y-[4px] border-[#333] bg-right bg-no-repeat py-10 pl-6 sm:bg-contain"></div>
    <div className="flex justify-center">
      <div
        id="login"
        className="login-container w-full max-w-2xl "
        style={
          {
            // height: "100vh",
          }
        }
      >
        <div className="relative mb-20 px-6 py-10 tracking-wider text-white sm:text-darker sm:max-md:top-24">
          {/* <p className="text-[30px] font-extrabold leading-9">Logga in</p> */}
          <h2 className="text-white">Logga in</h2>
        </div>

        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(new FormData(e.target as HTMLFormElement));
          }}
          className="mb-8 flex w-full max-w-2xl flex-col px-6"
        >
          <label htmlFor="name" className="text-slate-200">
            E-mail
          </label>
          <input type="email" id="email" name="email" required></input>
          <label htmlFor="email" className="text-slate-200">
            Lösenord
          </label>
          <input type="password" id="password" name="password" required></input>

          <button
            type="submit"
            className="my-4 rounded-xl bg-darker py-3 text-[16px] font-bold tracking-wider text-slate-200 hover:bg-dark focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            LOGGA IN
          </button>
        </form>
      </div>
    </div>
  );
}
