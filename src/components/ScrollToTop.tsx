import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 24, // EXACT header height
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
