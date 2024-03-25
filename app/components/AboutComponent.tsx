"use client";

import pic from "@/assets/license.svg";
import Image from "next/image";

export default function InformationComponent() {
  return (
    <div className="flex justify-center">
      <div
        id="service"
        className="flex max-w-2xl flex-col px-6 py-10 pb-14"
        // style={{
        //   height: "100vh",
        // }}
      >
        <h2>Varför Blue Frog</h2>
        <p className="mb-6 mt-5 text-lg">
          Vår AI-assistent är skräddarsydd för att passa behoven hos små och
          medelstora företag, och erbjuder en rad kraftfulla funktioner för att
          effektivisera och förbättra er verksamhet.
        </p>
        <p className="mb-8 mt-4 text-lg">
          Blue Frog erbjuder en unik kombination av avancerad AI-teknik och
          branschspecifik expertis för att lösa era utmaningar och driva
          framgång. Blue Frog ger dig konkurrensfördelarna redan idag. Med vår
          AI-assistent kan ni:
        </p>
        <ul className="mb-10 ml-2 mt-2 list-disc px-4 text-lg">
          <li>Skapa offerter och fakturor på ett ögonblick.</li>
          <li>
            Optimera er inventariehantering och försäljningsprognoser. Snabbt ta
          </li>
          <li>
            fram generell och kundanpassat marknadsföringsmaterial Automatisera
          </li>
          <li>
            rutinmässiga uppgifter för att spara tid och pengar. Få
            skräddarsydda
          </li>
          <li>rekommendationer för att förbättra er verksamhet. Snabbt</li>
          <li>automatgenererade texter för bl a mail på flera olika språk</li>
        </ul>
      </div>
    </div>
  );
}
