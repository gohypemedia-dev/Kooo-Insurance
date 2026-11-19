import { home, solutionsPage } from "@/content/site";
import { VideoHero } from "@/components/home/video-hero";
import { Statement } from "@/components/home/statement";
import { Licensee } from "@/components/home/licensee";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { Marquee } from "@/components/home/marquee";
import { NumberedRows } from "@/components/sections/numbered-rows";
import { Process } from "@/components/home/process";
import { InsurersGrid } from "@/components/home/insurers-grid";
import { HomeClaims } from "@/components/home/home-claims";
import { WorkWith } from "@/components/home/work-with";
import { Testimonials } from "@/components/home/testimonials";
import { HomeFaqs } from "@/components/home/home-faqs";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      {/* 1. Main message and opening experience: Cinematic video hero + statement slide-over */}
      <div className="relative">
        <VideoHero />
        <Statement />
      </div>

      {/* 2. Company introduction: Corporate credentials, AFSL authorization, national reach */}
      <Licensee />

      {/* 3. Insurance categories: Interactive category grid & moving ticker */}
      <SolutionsGrid />
      <Marquee />

      {/* 4. Why clients choose Kooo: Plain English, proactive guidance, trusted relationships */}
      <NumberedRows title="Why choose us" items={home.whyChooseUs} />

      {/* 5. How our service works: 4-step advisory methodology */}
      <Process />

      {/* 6. Insurers and underwriting agencies we work with: Tier-1 insurer panel */}
      <InsurersGrid />

      {/* 7. Claims support & advocacy: Dedicated broker advocacy from notice of loss to payout */}
      <HomeClaims />

      {/* 8. Industries we support: Horizontal parallax cards (placed just below Claims Support & Advocacy) */}
      <WorkWith />

      {/* 9. Genuine client reviews: Authentic client feedback carousel */}
      <Testimonials />

      {/* 10. Useful questions and answers: Top FAQs with smooth accordion + link to all FAQs */}
      <HomeFaqs />

      {/* Closing conversion band */}
      <CtaBand title={solutionsPage.cta.title} text={solutionsPage.cta.text} label="Let’s Talk" />
    </>
  );
}
