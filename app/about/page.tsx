import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sterling Crest Holdings LLC is a privately held company based in Phoenix, Arizona, built to own and steward a small group of premium service brands.",
  alternates: { canonical: "https://sterlingcrestholdings.com/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <div className="sc-page-hero">
        <div className="sc-page-hero-wrap">
          <p className="sc-eyebrow sc-eyebrow-light sc-anim-1">About</p>
          <h1 className="sc-page-hero-h1 sc-anim-2">Built in Arizona, with a long-term view.</h1>
          <p className="sc-page-hero-sub sc-anim-3">
            Sterling Crest Holdings LLC exists to own and steward a small group of premium service
            brands — giving each one the structure, stability, and ownership discipline to grow on its
            own terms.
          </p>
        </div>
      </div>

      {/* ── ABOUT GRID ────────────────────────────────────────── */}
      <section className="sc-section-pad sc-band-mid">
        <div className="sc-container">
          <div className="sc-about-grid">
            <Reveal>
              <div>
                <p className="sc-eyebrow">The company</p>
                <h2>A holding company built for the long term.</h2>
                <p>
                  Sterling Crest Holdings LLC is a privately held company based in Phoenix, Arizona. It
                  exists to own and steward a small group of premium service brands — giving each one
                  the structure, stability, and ownership discipline to grow on its own terms.
                </p>
                <p>
                  The parent name stays quiet on purpose. The brands meet clients; Sterling Crest keeps
                  the structure sound behind them.
                </p>
                <a
                  className="sc-btn-outline"
                  href="mailto:aaron3534@outlook.com?subject=Sterling%20Crest%20Holdings%20inquiry"
                >
                  Partnership &amp; ownership inquiries
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="sc-factbox" aria-label="Company facts">
                {[
                  { k: "Entity",            v: "Sterling Crest Holdings LLC" },
                  { k: "Type",              v: "Privately held holding company" },
                  { k: "Home base",         v: "Phoenix, Arizona" },
                  { k: "Operating brands",  v: "3 · wholly owned" },
                  { k: "Focus",             v: "Consulting · Travel · Outdoor" },
                ].map((row) => (
                  <div key={row.k} className="sc-factbox-row">
                    <span className="sc-factbox-k">{row.k}</span>
                    <span className="sc-factbox-v">{row.v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="sc-section-pad">
        <div className="sc-container">
          <Reveal>
            <div className="sc-cta-band">
              <p className="sc-eyebrow sc-eyebrow-light">Corporate Inquiries</p>
              <h2>Reach the holding company.</h2>
              <p>
                For partnership, ownership, or general inquiries about Sterling Crest Holdings and its
                brands, contact the corporate office directly. Brand-specific requests are routed to
                the right team.
              </p>
              <a
                className="sc-btn-gold"
                href="mailto:aaron3534@outlook.com?subject=Sterling%20Crest%20Holdings%20inquiry"
              >
                Contact corporate office
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
