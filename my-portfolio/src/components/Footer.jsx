import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Footer() {
  const footerRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(footerRef.current, {
      strings: ["Created and Designed by @Prince Thakur"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <footer className="text-white text-center py-5 bg-slate-950 font-bold">
        <p ref={footerRef} className="text-blue-700"></p>
      </footer>
    </>
  );
}

export default Footer;
