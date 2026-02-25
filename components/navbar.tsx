"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
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
            <span className="text-xl font-serif font-bold text-secondary">
              SpiceRoot
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              href="#exports"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              Request Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#products"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              href="#exports"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground text-center hover:bg-secondary/90 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
