import { Hero } from "../components/Hero";
import { ParallaxGallery } from "../components/ParallaxGallery";
import { AboutPreview } from "../components/AboutPreview";
import { StickyChapters } from "../components/StickyChapters";
import { ServiceShowcase } from "../components/ServiceShowcase";
import { SeoPreview } from "../components/SeoPreview";
import { WorkPreview } from "../components/WorkPreview";
import { Testimonial } from "../components/Testimonial";
import { Process } from "../components/Process";
import { BlogPreview } from "../components/BlogPreview";
import { Seo, organizationJsonLd } from "../components/Seo";

export function Home() {
  return (
    <>
      <Seo
        title="Tech Eeez | AI, Software & Digital Solutions Company in Mumbai"
        description="Tech Eeez builds websites, AI, and software systems — and helps businesses get found on Google and discovered in AI-powered search."
        path="/"
        jsonLd={organizationJsonLd()}
      />
      <main>
        <Hero />
        <ParallaxGallery />
        <AboutPreview />
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
