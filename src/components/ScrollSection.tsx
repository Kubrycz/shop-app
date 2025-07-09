import React, { useEffect } from "react";

const ScrollSection = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
        const shopSection = document.getElementById("scroll-section");
        const aboutSection = document.getElementById("scrollAbout-section");
      if (shopSection) {
        const yOffset = -100;
        const y =
          shopSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
        }
        if (aboutSection) {
          const yOffset = 0;
          const y =
            aboutSection.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return null;
};
export default ScrollSection;
