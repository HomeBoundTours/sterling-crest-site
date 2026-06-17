import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Sterling Crest Holdings operates: brands lead, parent supports. Clean structure, quality over breadth.",
  alternates: { canonical: "https://sterlingcrestholdings.com/approach" },
};

const pillars = [
  {
    num: "01",
    title: "Brands lead, parent supports",
    body: "Each operating company keeps its own voice and runs its own playbook. Sterling Crest provides ownership, oversight, and shared backbone — not micromanagement.",
  },
  {
    num: "02",
    title: "Clean structure",
    body: "A single parent wholly owns each company, keeping ownership, liability, and bookkeeping clearly separated and easy to govern as the group grows.",
  },
  {
    num: "03",
    title: "Quality over breadth",
    body: "A focused, intentional portfolio rather than a sprawl of ventures. Every brand earns its place by doing premium work clients actually feel.",
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <div className="sc-page-hero">
        <div className="sc-page-hero-wrap">
          <p className="sc-eyebrow sc-eyebrow-light sc-anim-1">Ownership &amp; Governance</p>
          <h1 className="sc-page-hero-h1 sc-anim-2">How Sterling Crest operates.</h1>
          <p className="sc-page-hero-sub sc-anim-3">
            The holding company stays deliberately in the background. Its job is to give each brand the
            structure and stability to do its best work.
          </p>
        </div>
      </div>

      {/* ── PILLARS ───────────────────────────────────────────── */}
      <section className="sc-section-pad sc-band-mid">
        <div className="sc-container">
          <div className="sc-pillars-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.075}>
                <div className="sc-pillar">
                  <div className="sc-pillar-num" aria-hidden="true">{p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </Reveal>
            ))}
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
