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
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open ? "bg-[#121214]/88 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          data-cursor="link"
          className="group relative z-10 flex cursor-pointer items-center gap-2.5 text-white"
          aria-label="Tech Eeez home"
        >
          <Logo className="h-9 w-9" />
          <span className="text-sm font-semibold tracking-[0.18em] text-white">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 xl:gap-6 lg:flex"
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

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-cursor="button"
            className="hidden rounded-full border border-white/10 bg-[#2A2A32] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#35353E] md:inline-flex"
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

      <div
        className={`mobile-menu fixed inset-0 z-40 flex flex-col justify-end bg-[#121214] px-6 pb-10 pt-24 lg:hidden ${
          open ? "is-open" : "pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {siteConfig.navLinks.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              className="border-b border-white/10 py-4 text-4xl font-medium tracking-tight"
              style={{ transitionDelay: `${index * 40}ms` }}
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
    </header>
  );
}
