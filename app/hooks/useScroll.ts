import { useEffect, useState } from "react";
/**
 * `useScroll` is a custom React hook that provides information about the scroll position of the window.
 * It returns an object with three boolean properties: `scrolledDown`, `atTop`, and `atBottom`.
 * `scrolledDown` is `true` if the user has scrolled down since the last scroll event.
 * `atTop` is `true` if the user has scrolled more than a certain limit from the top of the page.
 * `atBottom` is `true` if the user is within a certain limit from the bottom of the page.
 *
 * @returns {Object} - An object with the properties `scrolledDown`, `atTop`, and `atBottom`.
 *
 * @example
 * const { scrolledDown, atTop, atBottom } = useScroll();
 * if (scrolledDown) {
 *   // Perform some action when the user scrolls down
 * }
 * if (atTop) {
 *   // Perform some action when the user is near the top of the page
 * }
 * if (atBottom) {
 *   // Perform some action when the user is near the bottom of the page
 * }
 */

export default function useScroll() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    const LIMIT = 20;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolledDown(currentScrollY > prevScrollY);
      prevScrollY = currentScrollY;

      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      var documentHeight = document.documentElement.scrollHeight;

      setAtTop(scrollPosition > LIMIT);
      setAtBottom(documentHeight - scrollPosition - windowHeight <= LIMIT);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrolledDown, atTop, atBottom };
}
