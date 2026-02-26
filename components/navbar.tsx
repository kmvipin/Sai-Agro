"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-primary"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 2C8 2 4 6 4 12s4 10 8 10c1 0 2-2 2-4 0-1-.5-2-1-2.5C12.5 15 12 14 12 12c0-2 1-4 3-5.5C16.5 5.5 16 2 12 2z" />
              </svg>
            </div>
            <span className={`text-xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? "text-secondary" : "text-white"
            }`}>
              Sai Agro
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="#products"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white"
              }`}
            >
              Products
            </Link>
            <Link
              href="#exports"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white"
              }`}
            >
              Why Us
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white"
              }`}
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 
                 text-primary-foreground bg-primary hover:bg-primary/90`}
            >
              Request Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}          
            </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-500">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors`}
            >
              About
            </Link>
            <Link
              href="#products"
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors`}
            >
              Products
            </Link>
            <Link
              href="#exports"
              onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors`}
            >
              Why Us
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors`}
            >
              Contact
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`mt-2 inline-flex items-center px-5 py-2 text-sm font-semibold rounded-md bg-primary hover:bg-primary/90 text-primary-foreground`}
            >
              Request Quote
            </Link>
        </div>
      )}
    </nav>
  )
}
