import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The Sterling Crest Holdings portfolio: Vellmont Consulting, Voyelle, and Courtwell — three wholly owned premium service brands.",
  alternates: { canonical: "https://sterlingcrestholdings.com/portfolio" },
};

const brands = [
  {
    id: "consulting",
    tag: "Sterling Crest",
    name: "Vellmont Consulting",
    role: "Operations & SOP Consulting",
    desc: "A B2B operations consultancy — documenting SOPs, streamlining processes, and (as one service) booking appointments, so a business runs consistently without depending on any one person.",
    href: "https://vellmontconsulting.com",
    cta: "Visit site",
  },
  {
    id: "voyelle",
    tag: "Sterling Crest",
    name: "Voyelle",
    role: "Travel Advisory",
    desc: "A modern travel advisor crafting tailored itineraries and handling the details — from first idea to a trip that feels effortless.",
    href: "https://voyelle.com",
    cta: "Visit site",
  },
  {
    id: "courtwell",
    tag: "Sterling Crest",
    name: "Courtwell",
    role: "Backyard Sport Courts & Outdoor Builds",
    desc: "Designing and building backyard sport courts and outdoor spaces — durable, well-engineered, and finished to a standard that lasts.",
    href: null,
    cta: null,
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <div className="sc-page-hero">
        <div className="sc-page-hero-wrap">
          <p className="sc-eyebrow sc-eyebrow-light sc-anim-1">The Portfolio</p>
          <h1 className="sc-page-hero-h1 sc-anim-2">Three brands, one standard of quality.</h1>
          <p className="sc-page-hero-sub sc-anim-3">
            Sterling Crest Holdings is the parent of three independently operated brands — each with
            its own team, offer, and identity, united by a shared commitment to doing premium work the
            right way.
          </p>
        </div>
      </div>

      {/* ── PORTFOLIO CARDS ───────────────────────────────────── */}
      <section className="sc-section-pad">
        <div className="sc-container">
          <div className="sc-portfolio-grid">
            {brands.map((b, i) => (
              <Reveal key={b.id} delay={i * 0.075}>
                <article className="sc-pcard" id={b.id}>
                  <span className="sc-ptag">{b.tag}</span>
                  <h3 className="sc-pcard-h3">{b.name}</h3>
                  <p className="sc-pcard-role">{b.role}</p>
                  <p className="sc-pcard-desc">{b.desc}</p>
                  <div className="sc-pcard-foot">
                    {b.href ? (
                      <a
                        className="sc-pcard-link"
                        href={b.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {b.cta} <span aria-hidden="true">→</span>
                      </a>
                    ) : (
                      <span className="sc-pcard-status">Launching 2026</span>
                    )}
                  </div>
                </article>
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
