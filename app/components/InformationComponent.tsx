"use client";

import pic from "@/assets/avatar.svg";
import Image from "next/image";

export default function InformationComponent() {
  return (
    <div className="flex flex-col items-center px-4 text-xl">
      <div className="flex max-w-xl flex-col items-center bg-background pt-32">
        <ul id="info" className="flex flex-col items-start xs:items-center">
          <li>
            <h1>Professionell Trädklättrare</h1>
          </li>
          <li>
            <h1>Träd- & sektionsfällning</h1>
          </li>
          <li>
            <h1>Beskärning</h1>
          </li>
        </ul>
        <div className="avatar mt-12">
          <Image src={pic} alt="avatar" />
        </div>
        <p className=" mt-16 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          magni numquam commodi quidem minus nesciunt! Molestiae nesciunt,
          eveniet perspiciatis nobis officia ipsa repellat corrupti maiores et.
          Hic sit aspernatur obcaecati ex odio magni veniam libero, quam nisi
          quo, quasi sed? Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
      </div>
    </div>
  );
}
