import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FadeInUp } from "../components/FadeInUp";
import { SubmitButton } from "../components/Buttons";
import { Seo, organizationJsonLd, breadcrumbJsonLd } from "../components/Seo";
import { siteConfig } from "../data/site";

const fieldClass =
  "peer mt-2 w-full rounded-none border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-transparent focus:border-white";

export function Contact() {
  const [status, setStatus] = useState("idle");
  const [params] = useSearchParams();
  const intent = params.get("intent");
  const defaultMessage =
    intent === "seo-audit"
      ? "I would like an SEO audit covering technical health, search visibility, and growth opportunities."
      : intent === "visibility"
        ? "I would like to improve our search visibility across Google and AI-powered discovery."
        : "";

  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const phone = form.get("phone");
    const company = form.get("company");
    if (form.get("website")) return;
    setStatus("sending");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name} <${email}>\nPhone: ${phone || "-"}\nCompany: ${company || "-"}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <>
      <Seo
        title="Contact Tech Eeez | Build Your Next Digital Product"
        description="Talk to Tech Eeez in Mumbai about websites, SEO, AI search visibility, or software projects."
        path="/contact"
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
          <FadeInUp>
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
            <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
              Contact
            </p>
            <h1 className="mt-5 text-[clamp(2.8rem,6vw,5.4rem)] font-medium leading-[0.95] tracking-tight">
              Let&apos;s build what&apos;s{" "}
              <span className="font-serif italic font-normal">next.</span>
            </h1>
            <p className="mt-6 max-w-md text-[16px] leading-7 text-[#D4D4D8]">
              Have a project in mind? Need a technology partner in Mumbai? Talk to Tech Eeez.
            </p>
          </FadeInUp>

          <FadeInUp delay={80}>
            <form onSubmit={onSubmit} noValidate={false}>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="relative block text-sm text-[#D4D4D8]">
                  Full Name *
                  <input required name="name" placeholder="Name" className={fieldClass} />
                </label>
                <label className="relative block text-sm text-[#D4D4D8]">
                  Email *
                  <input required type="email" name="email" placeholder="Email" className={fieldClass} />
                </label>
                <label className="relative block text-sm text-[#D4D4D8]">
                  Phone
                  <input name="phone" placeholder="Phone" className={fieldClass} />
                </label>
                <label className="relative block text-sm text-[#D4D4D8]">
                  Company
                  <input name="company" placeholder="Company" className={fieldClass} />
                </label>
              </div>
              <label className="hidden">
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
              <label className="mt-6 block text-sm text-[#D4D4D8]">
                Message *
                <textarea
                  key={intent || "default"}
                  required
                  name="message"
                  rows={5}
                  minLength={10}
                  defaultValue={defaultMessage}
                  placeholder="Tell us about the work"
                  className={fieldClass}
                />
              </label>
              <SubmitButton loading={status === "sending"} className="mt-8">
                Send message
              </SubmitButton>
              {status === "sent" ? (
                <p className="mt-4 text-sm text-[#D4D4D8]" role="status">
                  Opening your email client so we can continue the conversation.
                </p>
              ) : null}
            </form>
          </FadeInUp>
        </div>

        <address className="mt-24 grid gap-6 border-t border-white/10 pt-10 text-sm not-italic text-[#D4D4D8] md:grid-cols-3">
          <p>
            {siteConfig.name}
            <br />
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
            <br />
            {siteConfig.address.city}
          </p>
          <p>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
          </p>
          <p>
            <a href={`mailto:${siteConfig.email}`} className="text-white">
              {siteConfig.email}
            </a>
          </p>
        </address>
      </main>
    </>
  );
}
