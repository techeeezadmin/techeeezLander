import { useEffect, useRef, useState } from "react";
import { FadeInUp } from "./FadeInUp";
import { ExternalButton, PrimaryButton, SecondaryButton } from "./Buttons";
import { LogoMarquee } from "./LogoMarquee";
import { siteConfig, videos } from "../data/site";
import { prefersReducedMotion } from "../lib/motion";

export function Hero() {
  const mediaRef = useRef(null);
  const lightRef = useRef(null);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    const reduce = prefersReducedMotion();
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!mediaRef.current || reduce) return;
        const y = Math.min(window.scrollY / window.innerHeight, 1);
        mediaRef.current.style.transform = `translate3d(0, ${-8 * y}vh, 0) scale(${1.05 - y * 0.05})`;
      });
    };

    const onMove = (event) => {
      if (!lightRef.current || reduce) return;
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      lightRef.current.style.setProperty("--mx", `${x}%`);
      lightRef.current.style.setProperty("--my", `${y}%`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative z-0 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32"
    >
      <div
        ref={mediaRef}
        className="absolute inset-0 -z-10 origin-center scale-[1.05] will-change-transform"
      >
        {videoOk ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={videos.hero}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoOk(false)}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2A2A32,#121214)]" />
        )}
        <div className="hero-grid" />
        <div ref={lightRef} className="hero-light" />
        <div className="hero-vignette" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.92] tracking-[-0.04em]">
          <span className="reveal-line">
            <span>We build the systems</span>
          </span>
          <span className="reveal-line">
            <span style={{ animationDelay: "90ms" }}>that make business</span>
          </span>
          <span className="reveal-line">
            <span className="font-serif italic font-normal" style={{ animationDelay: "180ms" }}>
              move.
            </span>
          </span>
        </h1>

        <FadeInUp delay={200}>
          <p className="mx-auto mt-7 max-w-xl text-[16px] leading-7 text-[#D4D4D8]">
            Tech Eeez engineers AI, web, mobile, cloud, analytics, cybersecurity and
            integration — systems designed to move businesses in Mumbai forward.
          </p>
        </FadeInUp>

        <FadeInUp delay={350} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton to="/contact">Get started</PrimaryButton>
          <ExternalButton href={siteConfig.whatsapp}>WhatsApp {siteConfig.phone}</ExternalButton>
          <SecondaryButton to="/services">Learn more</SecondaryButton>
        </FadeInUp>
      </div>

      <FadeInUp delay={500} className="w-full">
        <LogoMarquee />
      </FadeInUp>
    </section>
  );
}
