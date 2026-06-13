"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

const AosInit = () => {
  useEffect(() => {
    let isMounted = true;

    (async () => {
      const AOS = (await import("aos")).default;
      if (!isMounted) return;
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return null;
};
export default AosInit;