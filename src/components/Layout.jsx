import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollManager } from "./ScrollManager";
import { SmoothScroll } from "./SmoothScroll";
import { CustomCursor } from "./CustomCursor";
import { PageTransition } from "./PageTransition";
import { Grain, Atmosphere } from "./Atmosphere";

export function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="relative min-h-screen bg-[#121214] text-[#F4F4F5]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[95] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Atmosphere />
      <Grain />
      <CustomCursor />
      <PageTransition />
      <SmoothScroll />
      <ScrollManager />
      <Navbar />
      <div id="main-content" className="relative z-10 page-enter" key={pathname}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
