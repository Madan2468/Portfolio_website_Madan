import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"; // Add the import statement for SpeedInsights

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Analytics /> {/* This component will track analytics for all pages */}
      <SpeedInsights />
      {/* This component will track speed insights for all pages */}
    </>
  );
}

export default Layout;
