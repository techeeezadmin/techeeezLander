import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { siteConfig } from "../data/site";

function isActive(href, pathname) {
  if (href === "/seo") return pathname === "/seo" || pathname === "/services/seo-ai-search";
  if (href === "/services") return pathname === "/services" || pathname.startsWith("/services/");
  if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
  return pathname === href;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] w-full transition-colors duration-300 ${
          scrolled || open ? "bg-[#121214]/88 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
          <Link
            to="/"
            data-cursor="link"
            className="group relative z-10 flex min-w-0 shrink items-center gap-2.5 text-white"
            aria-label="Tech Eeez home"
          >
            <Logo className="h-9 w-9" />
            <span className="truncate text-sm font-semibold tracking-[0.18em] text-white">
              {siteConfig.shortName}
            </span>
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-6"
            aria-label="Primary"
          >
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-cursor="link"
                className={`nav-link text-sm font-medium text-[#D4D4D8] transition-colors hover:text-white ${
                  isActive(link.href, location.pathname) ? "is-active text-white" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              to="/contact"
              data-cursor="button"
              className="hidden rounded-full border border-white/10 bg-[#2A2A32] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#35353E] lg:inline-flex"
            >
              Get started
            </Link>
            <button
              type="button"
              className="inline-flex rounded-full border border-white/10 p-2 text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block h-5 w-5">
                <span
                  className={`absolute left-0 top-[9px] h-px w-5 bg-white transition ${
                    open ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[9px] h-px w-5 bg-white transition ${
                    open ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu fixed inset-0 z-[70] flex flex-col bg-[#121214] px-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24 lg:hidden ${
          open ? "is-open" : "pointer-events-none"
        }`}
      >
        <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto" aria-label="Mobile">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="border-b border-white/10 py-3.5 text-[clamp(1.75rem,8vw,2.5rem)] font-medium tracking-tight"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-8 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Get started
          </Link>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit text-sm text-[#D4D4D8]"
          >
            WhatsApp {siteConfig.phone}
          </a>
        </nav>
      </div>
    </>
  );
}
