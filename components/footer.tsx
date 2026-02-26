import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 text-primary-foreground"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 2C8 2 4 6 4 12s4 10 8 10c1 0 2-2 2-4 0-1-.5-2-1-2.5C12.5 15 12 14 12 12c0-2 1-4 3-5.5C16.5 5.5 16 2 12 2z" />
                </svg>
              </div>
              <span className="text-xl font-serif font-bold text-secondary-foreground">
                Sai Agro
              </span>
            </div>
            <p className="text-sm leading-relaxed text-secondary-foreground/60">
              Premium turmeric exporter serving global markets with quality,
              trust, and reliability. Vaishnavi 108 brand turmeric for
              wholesale and export.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-foreground mb-4">
              Turmeric Products
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#products"
                  className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  Turmeric Fingers
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  Turmeric Powder
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  Turmeric Bulbs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-foreground mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#exports"
                  className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-foreground mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-secondary-foreground/60">
                Market Yard, Mondha,
                <br />
                Basmath Taluka, Hingoli District,
                <br />
                Maharashtra – 431512, India
              </li>
              <li className="text-sm text-secondary-foreground/60">
                exports@saiagro.com
              </li>
              <li className="text-sm text-secondary-foreground/60">
                +91 98765 43210
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/40">
            {`\u00A9 ${new Date().getFullYear()} Sai Agro Spices and Edible Products Pvt. Ltd. All rights reserved.`}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-secondary-foreground/40 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-secondary-foreground/40 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
