import React, { useEffect, useRef } from "react";

export const Title = () => {
  return (
    <div
      className="tooltip tooltip-bottom order-1 tooltip-primary [--tooltip-text-color:white]"
      data-tip="“A.C. portfolio” means Abraham Correa's Portfolio ☝🏼🤓"
    >
      <div className="!text-white text-xl md:text-3xl font-medium cursor-default">A.C. portfolio</div>
    </div>
  );
};
