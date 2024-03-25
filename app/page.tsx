"use client";
import { useEffect, useState } from "react";
import TopMenuComponent from "./components/TopMenuComponent";
import useScroll from "./hooks/useScroll";
import InformationComponent from "./components/InformationComponent";
import ContactComponent from "./components/ContactComponent";
import ContactFormComponent from "./components/ContactFormComponent";
import FooterComponent from "./components/FooterComponent";
import LicenseComponent from "./components/LicenseComponent";
import NewInformationComponent from "./components/NewInformationComponent";
import BannerComponent from "./components/BannerComponent";
import AboutComponent from "./components/AboutComponent";
import LoginComponent from "./components/LoginComponent";

export default function Home() {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const { scrolledDown, atTop, atBottom } = useScroll();

  const toggleTopBar = () => {
    setIsTopBarVisible(!isTopBarVisible);
  };

  return (
    <>
      <header>
        <TopMenuComponent isVisible={(!scrolledDown || !atTop) && !atBottom} />
        <BannerComponent />
      </header>
      <main id="main">
        <AboutComponent />
        {/* <div className="parallax2 min-h-[420px] sm:hidden md:bg-none"></div> */}
        <LoginComponent />
        <ContactComponent />
        {/* <div className="parallax"></div> */}
        <ContactFormComponent />
        {/* <div className="parallax"></div> */}
        <FooterComponent />
        {/* <div className="parallax"></div> */}
      </main>
    </>
  );
}
