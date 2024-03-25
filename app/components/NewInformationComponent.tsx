"use client";

import pic from "@/assets/avatar.svg";
import ab from "@/assets/arb2.png";
import Image from "next/image";

export default function InformationComponent() {
  return (
    <div className="flex justify-center">
      <div className="bg-arb2 bg-c flex max-w-2xl flex-col border-y-[4px] border-[#333] bg-right bg-no-repeat py-10 pl-6 sm:bg-contain">
        <h2>Information</h2>
        <p className=" mt-4 pr-[32%] text-xl">
          Jag som driver Sjöns Trädgårdskrux heter Mats Wiberg och är
          professionellt certifierad trädklättrare(CPT). Arbetet inom vårt
          familjeskogsbruk, i kombination med mitt intresse för klättring,
          motiverade mig att sätta igång den verksamhet ni nu läser om. Jag
          utför avancerad trädfällning inriktad på sektionsfällning och
          beskärning där skylift och kranar antingen har svårt att komma åt
          eller gör stor åverkan på din tomt.
        </p>
      </div>
    </div>
  );
}
