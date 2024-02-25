import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="flex w-20 justify-around order-2 md:order-3">
      <a
        href="http://linkedin.com/in/abrancorrea"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn color="white" />
      </a>
      <a href="https://github.com/abrancorrea/" target="_blank" rel="noopener noreferrer">
        <FaGithub color="white" />
      </a>
    </div>
  );
};
