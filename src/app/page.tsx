import { home, solutionsPage } from "@/content/site";
import { StoryHero } from "@/components/home/story/story-hero";
import { Statement } from "@/components/home/statement";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { Testimonials } from "@/components/home/testimonials";
import { InsurersGrid } from "@/components/home/insurers-grid";
import { Marquee } from "@/components/home/marquee";
import { Process } from "@/components/home/process";
import { WorkWith } from "@/components/home/work-with";
import { Licensee } from "@/components/home/licensee";
import { ImageBand } from "@/components/sections/image-band";
import { NumberedRows } from "@/components/sections/numbered-rows";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      {/* The hero film is sticky inside this wrapper, so the statement panel slides over its last frame. */}
      <div className="relative">
        <StoryHero />
        <Statement />
      </div>
      <SolutionsGrid />
      <Marquee />
      <Process />
      <ImageBand
        image="/images/photos/pexels-1128317.jpg"
        title={home.trusted.title}
        link={{ label: "About Kooo", href: "/about" }}
      />
      <NumberedRows title="Why choose us" items={home.whyChooseUs} />
      <WorkWith />
      <Testimonials />
      <InsurersGrid />
      <Licensee />
      <CtaBand title={solutionsPage.cta.title} text={solutionsPage.cta.text} label="Let’s Talk" />
    </>
  );
}
