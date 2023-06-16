import { useState, useEffect } from "react";
import screenWidths from "../scss/variables/index.scss";

const mobileWidth = parseInt(screenWidths.mobileWidth);

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isMobileScreen: width <= mobileWidth,
  };
};
