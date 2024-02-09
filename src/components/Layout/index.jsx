import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[50vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
