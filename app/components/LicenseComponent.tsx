"use client";

import pic from "@/assets/license.svg";
import Image from "next/image";

export default function InformationComponent() {
  return (
    <div className="flex h-1/4 items-center justify-center text-sm">
      <Image src={pic} alt="license" width={110} />
      <ul id="info" className="ml-4 flex flex-col">
        <li>
          <h1>Trädfällning</h1>
        </li>
        <li className="ml-4">
          <h1>Sektionsfällning</h1>
        </li>
        <li>
          <h1>Beskärning</h1>
        </li>
      </ul>
    </div>
  );
}
