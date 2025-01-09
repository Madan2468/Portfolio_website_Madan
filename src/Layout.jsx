import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Analytics /> {/* This component will track analytics for all pages */}
    </>
  );
}

export default Layout;
