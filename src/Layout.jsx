import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"; // Import SpeedInsights

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Analytics /> {/* Tracks analytics for all pages */}
      <SpeedInsights /> {/* Tracks speed insights for all pages */}
    </>
  );
}

export default Layout;
