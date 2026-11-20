import { Hero } from "../components/Hero";
import { ParallaxGallery } from "../components/ParallaxGallery";
import { AboutPreview } from "../components/AboutPreview";
import { Team } from "../components/Team";
import { StickyChapters } from "../components/StickyChapters";
import { ServiceShowcase } from "../components/ServiceShowcase";
import { SeoPreview } from "../components/SeoPreview";
import { WorkPreview } from "../components/WorkPreview";
import { Testimonial } from "../components/Testimonial";
import { Process } from "../components/Process";
import { BlogPreview } from "../components/BlogPreview";
import { Seo, organizationJsonLd, personJsonLd } from "../components/Seo";
import { siteConfig } from "../data/site";

export function Home() {
  return (
    <>
      <Seo
        title="Tech Eeez | AI Agents & Software for UK, UAE & India"
        description="Tech Eeez is an international AI and software agency. We build agents, automation, and products for businesses in the UK, UAE, and India. WhatsApp +91 9619118917."
        path="/"
        jsonLd={[organizationJsonLd(), ...siteConfig.people.map((person) => personJsonLd(person))]}
      />
      <main>
        <Hero />
        <ParallaxGallery />
        <AboutPreview />
        <Team compact />
        <StickyChapters />
        <ServiceShowcase />
        <SeoPreview />
        <WorkPreview />
        <Testimonial />
        <Process />
        <BlogPreview />
      </main>
    </>
  );
}
