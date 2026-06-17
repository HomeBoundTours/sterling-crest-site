"use client";

import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="sc-footer" role="contentinfo">
      <div className="sc-container">
        <div className="sc-footer-grid">
          <div>
            <div className="sc-footer-logo">
              <span className="sc-footer-logo-dot" aria-hidden="true" />
              Sterling Crest Holdings LLC
            </div>
            <p className="sc-footer-tagline">
              A privately held Arizona holding company and the parent of a family of premium operating brands.
            </p>
          </div>

          <div>
            <p className="sc-footer-col-head">Portfolio</p>
            <Link className="sc-footer-link" href="/portfolio#consulting">Vellmont Consulting</Link>
            <Link className="sc-footer-link" href="/portfolio#voyelle">Voyelle</Link>
            <Link className="sc-footer-link" href="/portfolio#courtwell">Courtwell</Link>
          </div>

          <div>
            <p className="sc-footer-col-head">Company</p>
            <Link className="sc-footer-link" href="/approach">Approach</Link>
            <Link className="sc-footer-link" href="/structure">Standard</Link>
            <Link className="sc-footer-link" href="/about">About</Link>
            <Link className="sc-footer-link" href="/#contact">Contact</Link>
          </div>
        </div>

        <hr className="sc-footer-divider" />

        <div className="sc-footer-bottom">
          <span>
            © {year} Sterling Crest Holdings LLC. All rights reserved. Sterling Crest Holdings is a
            privately held company based in Arizona; the brands shown are operated independently under
            common ownership.
          </span>
          <span>Phoenix, Arizona</span>
        </div>
      </div>
    </footer>
  );
}
