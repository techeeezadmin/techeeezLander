import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { siteConfig, videos } from "../data/site";
import { services } from "../data/services";

export function Footer() {
  return (
    <footer id="contact" className="relative z-0 overflow-hidden px-6 pb-10 pt-32">
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        src={videos.hero}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#121214] via-[#121214]/65 to-[#121214]" />

      <div className="mb-28 text-center">
        <h2 className="text-[clamp(2.6rem,7vw,6.2rem)] font-medium leading-[0.95] tracking-tight">
          Ready to automate
          <br />
          <span className="font-serif italic font-normal">everything?</span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton to="/contact">Get started</PrimaryButton>
          <SecondaryButton to="/services">Learn more</SecondaryButton>
        </div>
      </div>

      <nav className="mx-auto mb-20 flex max-w-7xl flex-wrap gap-x-8 gap-y-4 border-y border-white/10 py-8">
        {services.map((service) => (
          <Link
            key={service.slug}
            to={service.canonicalPath || `/services/${service.slug}`}
            data-cursor="link"
            className="group inline-flex items-center text-lg font-medium text-[#D4D4D8] transition-colors hover:text-white md:text-2xl"
          >
            {service.title}
            <span className="btn-arrow text-sm" style={{ color: service.accent }}>
              →
            </span>
          </Link>
        ))}
      </nav>

      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <Link
            to="/"
            data-cursor="link"
            className="group flex items-center gap-2.5 text-white"
            aria-label="Tech Eeez home"
          >
            <Logo className="h-9 w-9" />
            <span className="text-lg font-semibold tracking-[0.18em] text-white">
              {siteConfig.shortName}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#D4D4D8]">
            Software engineering for businesses that need systems, not templates.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium text-white">Studio</p>
          <ul className="space-y-3">
            {siteConfig.pageLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  data-cursor="link"
                  className="text-sm text-[#D4D4D8] transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium text-white">Legal</p>
          <ul className="space-y-3">
            <li>
              <Link to="/terms" data-cursor="link" className="text-sm text-[#D4D4D8] hover:text-white">
                Terms of service
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" data-cursor="link" className="text-sm text-[#D4D4D8] hover:text-white">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium text-white">Mumbai</p>
          <address className="space-y-2 text-sm not-italic leading-6 text-[#D4D4D8]">
            <p>{siteConfig.address.line1}</p>
            <p>{siteConfig.address.line2}</p>
            <p>{siteConfig.address.city}</p>
            <p>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="text-white">
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-[#A1A1AA] md:flex-row">
        <span>© 2026 {siteConfig.name}. All rights reserved.</span>
        <div className="flex gap-5">
          {siteConfig.social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
