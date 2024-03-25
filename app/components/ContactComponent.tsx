"use client";

import pic from "@/assets/avatar.svg";
import ab from "@/assets/arb2.png";
import Image from "next/image";

export default function InformationComponent() {
  return (
    <div className="flex justify-center">
      <div id="contact" className="flex max-w-2xl flex-col px-6 py-10">
        <h2>Kontakt</h2>
        <p className=" mt-4 text-lg">
          Kontakta oss för en gratis demo eller prova vår AI-assistent
          kostnadsfritt under en begränsad tid. Tillsammans kan vi skapa en
          framgångsrik framtid för ert företag.
        </p>
      </div>
    </div>
  );
}
