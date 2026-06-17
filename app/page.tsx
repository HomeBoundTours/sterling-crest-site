import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sterling Crest Holdings LLC — A Privately Held Family of Premium Brands",
  description:
    "Sterling Crest Holdings LLC is a privately held Arizona holding company and the parent of three premium service brands: Vellmont Consulting, Voyelle, and Courtwell.",
  alternates: { canonical: "https://sterlingcrestholdings.com" },
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="sc-hero" aria-label="Introduction">
        <div className="sc-hero-wrap">
          <p className="sc-eyebrow sc-eyebrow-light sc-anim-1">Privately Held · Arizona</p>
          <h1 className="sc-hero-h1 sc-anim-2">
            We own and build a family of{" "}
            <span className="sc-hero-accent">premium</span> service brands.
          </h1>
          <p className="sc-hero-sub sc-anim-3">
            Sterling Crest Holdings LLC is the parent company of three independently operated brands —
            Vellmont Consulting, Voyelle, and Courtwell. We own and steward each for the long term,
            giving them the structure to deliver premium service.
          </p>
          <div className="sc-hero-actions sc-anim-4">
            <Link href="/portfolio" className="sc-btn-gold">Explore the portfolio</Link>
            <Link href="#contact" className="sc-btn-ghost">Get in touch</Link>
          </div>
          <div className="sc-hero-meta sc-anim-5" aria-label="Company facts">
            <div className="sc-hero-meta-item">
              <b className="sc-hero-meta-num">3</b>
              Brands in the family
            </div>
            <div className="sc-hero-meta-item">
              <b className="sc-hero-meta-num">100%</b>
              Wholly owned
            </div>
            <div className="sc-hero-meta-item">
              <b className="sc-hero-meta-num">Arizona</b>
              Home base
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ─────────────────────────────────────────── */}
      <section className="sc-section-pad" id="portfolio">
        <div className="sc-container">
          <Reveal>
            <div className="sc-sec-head">
              <p className="sc-eyebrow">The Portfolio</p>
              <h2 className="sc-section-h2">Three brands, one standard of quality.</h2>
              <p className="sc-section-lead">
                Sterling Crest Holdings is the holding company for the three businesses below. Each
                operates independently with its own team, offer, and identity — united by a shared
                commitment to doing premium work the right way.
              </p>
            </div>
          </Reveal>
          <div className="sc-portfolio-grid">
            <Reveal delay={0}>
              <article className="sc-pcard" id="consulting">
                <span className="sc-ptag">Sterling Crest</span>
                <h3 className="sc-pcard-h3">Vellmont Consulting</h3>
                <p className="sc-pcard-role">Operations &amp; SOP Consulting</p>
                <p className="sc-pcard-desc">
                  A B2B operations consultancy — documenting SOPs, streamlining processes, and (as one
                  service) booking appointments, so a business runs consistently without depending on
                  any one person.
                </p>
                <div className="sc-pcard-foot">
                  <a
                    className="sc-pcard-link"
                    href="https://vellmontconsulting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.075}>
              <article className="sc-pcard" id="voyelle">
                <span className="sc-ptag">Sterling Crest</span>
                <h3 className="sc-pcard-h3">Voyelle</h3>
                <p className="sc-pcard-role">Travel Advisory</p>
                <p className="sc-pcard-desc">
                  A modern travel advisor crafting tailored itineraries and handling the details — from
                  first idea to a trip that feels effortless.
                </p>
                <div className="sc-pcard-foot">
                  <a
                    className="sc-pcard-link"
                    href="https://voyelle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.15}>
              <article className="sc-pcard" id="courtwell">
                <span className="sc-ptag">Sterling Crest</span>
                <h3 className="sc-pcard-h3">Courtwell</h3>
                <p className="sc-pcard-role">Backyard Sport Courts &amp; Outdoor Builds</p>
                <p className="sc-pcard-desc">
                  Designing and building backyard sport courts and outdoor spaces — durable,
                  well-engineered, and finished to a standard that lasts.
                </p>
                <div className="sc-pcard-foot">
                  <span className="sc-pcard-status">Launching 2026</span>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── APPROACH / GOVERNANCE ─────────────────────────────── */}
      <section className="sc-section-pad sc-band-mid" id="approach">
        <div className="sc-container">
          <Reveal>
            <div className="sc-sec-head sc-sec-head-center">
              <p className="sc-eyebrow">Ownership &amp; Governance</p>
              <h2 className="sc-section-h2">How Sterling Crest operates.</h2>
              <p className="sc-section-lead" style={{ maxWidth: "56ch", margin: "18px auto 0" }}>
                The holding company stays deliberately in the background. Its job is to give each brand
                the structure and stability to do its best work.
              </p>
            </div>
          </Reveal>
          <div className="sc-pillars-grid">
            {[
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
            ].map((p, i) => (
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

      {/* ── STANDARD ──────────────────────────────────────────── */}
      <section className="sc-section-pad" id="standard">
        <div className="sc-container">
          <Reveal>
            <div className="sc-sec-head sc-sec-head-center">
              <p className="sc-eyebrow">What Unites Them</p>
              <h2 className="sc-section-h2">The Sterling Crest standard.</h2>
              <p className="sc-section-lead" style={{ maxWidth: "56ch", margin: "18px auto 0" }}>
                The brands run independently — but anyone who hires one can expect the same things.
                These are the commitments every company in the family is held to.
              </p>
            </div>
          </Reveal>
          <div className="sc-standards-grid">
            {[
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
            ].map((s, i) => (
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

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="sc-section-pad sc-band-mid" id="about" style={{ borderBottom: "none" }}>
        <div className="sc-container">
          <div className="sc-about-grid">
            <Reveal>
              <div>
                <p className="sc-eyebrow">About</p>
                <h2>Built in Arizona, with a long-term view.</h2>
                <p>
                  Sterling Crest Holdings LLC is a privately held company based in Phoenix, Arizona. It
                  exists to own and steward a small group of premium service brands — giving each one
                  the structure, stability, and ownership discipline to grow on its own terms.
                </p>
                <p>
                  The parent name stays quiet on purpose. The brands meet clients; Sterling Crest keeps
                  the structure sound behind them.
                </p>
                <Link href="#contact" className="sc-btn-outline">
                  Partnership &amp; ownership inquiries
                </Link>
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

      {/* ── CONTACT / CTA ─────────────────────────────────────── */}
      <section className="sc-section-pad" id="contact">
        <div className="sc-container">
          <Reveal>
            <div className="sc-cta-band">
              <p className="sc-eyebrow sc-eyebrow-light">Corporate Inquiries</p>
              <h2>Reach the holding company.</h2>
              <p>
                For partnership, ownership, or general inquiries about Sterling Crest Holdings, LLC and
                its brands, contact the corporate office directly. Brand-specific requests are routed to
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
