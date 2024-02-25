import React from "react";
import { Social, Links, Title } from "./components";

export const Header = () => {
  return (
    <header className="h-36 w-full px-10 md:px-5">
      <div className="container mx-auto h-full flex flex-wrap items-center justify-between">
        <Title />
        <Links />
        <Social />
      </div>
    </header>
  );
};
