import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap min-h-[86px] px-10 md:px-5 justify-between">
      <h5
        className="text-base font-medium md:order-1"
        style={{
          background: "linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Feel free to contact me
      </h5>
      <div className="footer-social flex w-16 justify-between md:order-4">
        <a
          href="http://linkedin.com/in/abrancorrea"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn color="white" size={25} />
        </a>
        <a
          href="https://github.com/abrancorrea/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="white" size={25} />
        </a>
      </div>
      <a
        className="text-white font-semibold md:order-2"
        href="mailto:abrancorrea@outlook.com"
      >
        abrancorrea@outlook.com
      </a>

      <a className="text-white font-semibold md:order-3" href="https://t.me/abrancorrea">
        Telegram @abrancorrea
      </a>
    </footer>
  );
};
