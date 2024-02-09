import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-[50vh]">{children}</div>
      <Footer />
    </>
  );
};
