import React, { useEffect } from "react";
import "./ScrollAnimation.css";

const ScrollAnimation = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          el.classList.add("visible");
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Trigger the function initially
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div>{children}</div>;
};

export default ScrollAnimation;
