import { useEffect, useState } from "react";
/**
 * `useIsElementInVP` is a custom React hook that checks if a given HTML element is currently in the viewport.
 * It takes an element's ID as a parameter and returns a boolean value indicating whether the element is in the viewport.
 *
 * @param {string} elementProp - The ID of the HTML element to check.
 * @returns {boolean} - Returns `true` if the element is in the viewport, `false` otherwise.
 *
 * @example
 * const isElementInView = useIsElementInVP('myElementId');
 * if (isElementInView) {
 *   // Perform some action when the element is in the viewport
 * }
 */

export default function useIsElementInVP(elementProp: string) {
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      function isElementInViewport(element: HTMLElement) {
        var rect = element.getBoundingClientRect();

        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      let element = document.getElementById(elementProp);

      if (element && isElementInViewport(element)) {
        setIsViewed(true);
      } else setIsViewed(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementProp]);

  return isViewed;
}
