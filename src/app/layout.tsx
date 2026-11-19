import type { Metadata } from "next";
import { Suspense } from "react";
import { Alice, DM_Sans, Lato, Source_Sans_3 } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { TransitionOverlay } from "@/components/layout/transition-overlay";

const alice = Alice({
  variable: "--font-alice",
  subsets: ["latin"],
  weight: "400",
});

// Source Sans Pro (menu & UI), Lato (paragraphs), DM Sans (buttons) — as on koooinsurance.com.au.
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.koooinsurance.com.au"),
  title: {
    default: "Kooo Insurance | Protect your tomorrow, today",
    template: "%s | Kooo Insurance",
  },
  description:
    "Kooo Insurance is an Australian insurance brokerage helping protect your business, home, and everything in between. Based in Bella Vista, NSW, serving clients Australia-wide.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${alice.variable} ${sourceSans.variable} ${lato.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SmoothScroll>
          <Suspense fallback={null}>
            <TransitionOverlay />
          </Suspense>
          <Suspense fallback={null}>
            <SiteHeader />
          </Suspense>
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
