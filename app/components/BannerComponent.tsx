import React from "react";

export default function BannerComponent() {
  const handleClick =
    (val: number) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      console.log("XXXXHTML: ", val);
      console.log("XXXMEEXHTML: ", e.target);

      const element = document.getElementById("service");
      const element2 = document.getElementById("login");
      if (val == 1 && element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      } else if (val == 2 && element2) {
        element2.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

  return (
    // <div className="bg-arb2 bg-c flex max-w-2xl flex-col border-y-[4px] border-[#333] bg-right bg-no-repeat py-10 pl-6 sm:bg-contain"></div>
    <div className="flex justify-center">
      <div
        className="background-container w-full max-w-2xl "
        style={
          {
            // height: "100vh",
          }
        }
      >
        <div className=" relative top-36 px-6 py-6 tracking-wider text-white sm:text-darker sm:max-md:top-24">
          <p className="text-[46px] font-extrabold leading-9 ">BLUE FROG</p>
          {/* <h1 id="info" className="mt-2 text-[14px] leading-5">

          </h1> */}
          <h1 id="info" className="mb-6 ml-1 mt-2 text-[14px] leading-5">
            Din AI-Assistent för effektiva Affärsprocesser
          </h1>
          <p className="text-[30px] font-extrabold leading-9">AUTOMATISERAR</p>
          <p className="text-[30px] font-extrabold leading-9 ">OPTIMERAR</p>
          <p className="text-[30px] font-extrabold leading-9">FRIGÖR</p>
          <p className="mb-8 text-[30px] font-extrabold leading-9">TID</p>
          <a
            type="submit"
            onClick={handleClick(1)}
            className="mt-6 w-fit cursor-pointer rounded-full bg-darker px-6 py-3 text-[14px] font-bold text-slate-200 hover:bg-dark focus:outline-none focus:ring-2 focus:ring-offset-2 sm:max-lg:hidden"
          >
            LÄS MER HÄR
          </a>
          {/* <p className=" ml-10 text-[14px] font-extrabold leading-9">Eller</p> */}
          <a
            type="submit"
            onClick={handleClick(2)}
            className="ml-6 cursor-pointer rounded-full bg-slate-200 px-6 py-3 text-[14px] font-bold text-darker hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:max-lg:hidden"
          >
            LOGGA IN
          </a>
          {/* <h1 id="info" className="ml-1 mt-4 text-[14px] leading-5">
            Vår AI-assistent är skräddarsydd för att passa behoven hos små och
            medelstora företag, och erbjuder en rad kraftfulla funktioner för
            att effektivisera och förbättra er verksamhet.
          </h1> */}
        </div>
      </div>
    </div>
  );
}
