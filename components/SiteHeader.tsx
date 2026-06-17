"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Portfolio",  href: "/portfolio" },
  { label: "Approach",   href: "/approach" },
  { label: "Standard",   href: "/structure" },
  { label: "About",      href: "/about" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sc-nav${scrolled ? " scrolled" : ""}`} role="banner">
      <div className="sc-nav-inner">
        <Link href="/" className="sc-nav-logo" aria-label="Sterling Crest Holdings home">
          <span className="sc-nav-logo-dot" aria-hidden="true" />
          <span>
            <span style={{ display: "block" }}>Sterling Crest</span>
            <span className="sc-nav-logo-sub">Holdings LLC</span>
          </span>
        </Link>

        <nav className="sc-nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`sc-nav-link${pathname === link.href ? " sc-nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="sc-nav-cta">
          <Link
            href="/#contact"
            className="sc-btn-outline sc-btn-outline-sm hidden md:inline-flex"
          >
            Contact
          </Link>
          <button
            className="sc-nav-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sc-nav-toggle-bar" />
            <span className="sc-nav-toggle-bar" />
            <span className="sc-nav-toggle-bar" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="sc-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`sc-mobile-link${pathname === link.href ? " sc-nav-link-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(220,203,160,0.18)" }}>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="sc-btn-outline"
                style={{ justifyContent: "center", display: "flex" }}
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
