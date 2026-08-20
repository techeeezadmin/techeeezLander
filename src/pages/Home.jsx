import { Hero } from "../components/Hero";
import { AboutPreview } from "../components/AboutPreview";
import { ServiceShowcase } from "../components/ServiceShowcase";
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
        description="Tech Eeez builds AI, web, mobile, cloud, analytics, cybersecurity, and integration solutions that help businesses in Mumbai scale with speed and clarity."
        path="/"
        jsonLd={organizationJsonLd()}
      />
      <main>
        <Hero />
        <AboutPreview />
        <ServiceShowcase />
        <WorkPreview />
        <Testimonial />
        <Process />
        <BlogPreview />
      </main>
    </>
  );
}
