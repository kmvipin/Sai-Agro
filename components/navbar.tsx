"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#exports" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent border-b border-transparent"}`}>
      <div className="container-narrow flex items-center justify-between h-16 px-6 md:px-12 lg:px-24">
        <a href="#" className={`font-heading text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-secondary-foreground"}`}>
          <span className="text-primary">Sai</span>Agro
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-secondary-foreground/70 hover:text-secondary-foreground"}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Request Quote
          </a>
        </div>

        <button
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-secondary-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center px-5 py-2 text-sm font-semibold rounded-md bg-primary text-primary-foreground"
          >
            Request Quote
          </a>
        </div>
      )}
    </nav>
  );
};