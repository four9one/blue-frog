"use client";

import { useEffect, useState } from "react";
import useIsElementInVP from "@/hooks/useIsElementInVP";

type TopMenuComponentProps = {
  isVisible: boolean;
};

export default function TopMenuComponent(props: TopMenuComponentProps) {
  const [selectedNavLink, setSelectedNavLink] = useState("info");
  const isInfoViewed = useIsElementInVP("info");
  const isContactViewed = useIsElementInVP("contact");

  const handleClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      setSelectedNavLink(id);
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        if (id == "info") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

  useEffect(() => {
    if (isInfoViewed) setSelectedNavLink("info");
  }, [isInfoViewed]);
  useEffect(() => {
    if (isContactViewed) setSelectedNavLink("contact");
  }, [isContactViewed]);

  return (
    <nav
      className={`fixed left-0 top-0 z-10 flex h-16 w-full transform items-center justify-center gap-x-14 border-b-[1px] border-lighter bg-darker text-lg font-semibold tracking-widest transition-transform duration-300 md:justify-end md:pr-10 ${
        props.isVisible ? "translate-y-0" : "-translate-y-16"
      }`}
    >
      <a
        onClick={handleClick("info")}
        href="#info"
        className={`navLink ${selectedNavLink == "info" ? "underline" : null}`}
      >
        Hem
      </a>
      <a
        onClick={handleClick("contact")}
        href="#contact"
        className={`navLink ${
          selectedNavLink == "contact" ? "underline" : null
        }`}
      >
        Kontakt
      </a>
    </nav>
  );
}
