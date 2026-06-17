import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Sterling Crest Standard",
  description:
    "The commitments every Sterling Crest brand is held to: senior-level attention, accountable independent operation, long-term ownership, and clear communication.",
  alternates: { canonical: "https://sterlingcrestholdings.com/structure" },
};

const standards = [
  {
    title: "Senior-level attention",
    body: "You work with people who own the outcome — not a handoff chain or a junior queue.",
  },
  {
    title: "Independently run, fully accountable",
    body: "Each brand operates on its own, but answers to a single owner with one bar for quality.",
  },
  {
    title: "Built to last, not to flip",
    body: "Long-term ownership means decisions are made for durability and reputation, never a quick exit.",
  },
  {
    title: "Clear, honest communication",
    body: "Straight answers, realistic timelines, and no surprises — the same way across every brand.",
  },
];

export default function StructurePage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <div className="sc-page-hero">
        <div className="sc-page-hero-wrap">
          <p className="sc-eyebrow sc-eyebrow-light sc-anim-1">What Unites Them</p>
          <h1 className="sc-page-hero-h1 sc-anim-2">The Sterling Crest standard.</h1>
          <p className="sc-page-hero-sub sc-anim-3">
            The brands run independently — but anyone who hires one can expect the same things. These
            are the commitments every company in the family is held to.
          </p>
        </div>
      </div>

      {/* ── STANDARDS ─────────────────────────────────────────── */}
      <section className="sc-section-pad">
        <div className="sc-container">
          <div className="sc-standards-grid">
            {standards.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.075}>
                <div className="sc-std">
                  <div className="sc-std-icon" aria-hidden="true">✓</div>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="sc-section-pad" style={{ paddingTop: 0 }}>
        <div className="sc-container">
          <Reveal>
            <div className="sc-cta-band">
              <p className="sc-eyebrow sc-eyebrow-light">Corporate Inquiries</p>
              <h2>Reach the holding company.</h2>
              <p>
                For partnership, ownership, or general inquiries about Sterling Crest Holdings and its
                brands, contact the corporate office directly.
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
