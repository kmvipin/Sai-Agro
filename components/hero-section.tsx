import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-turmeric.jpg"
          alt="Premium turmeric exports by Sai Agro"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
      </div>

\      {/* Content */}
      <div className="relative z-10 section-padding container-narrow w-full pt-32">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-primary font-body text-sm font-semibold uppercase tracking-[0.2em] mb-6">
            Wholesale Export Since 2010
          </p>
          <h1 className="animate-fade-up-delay-1 section-title text-secondary-foreground leading-[1.1]">
            Premium Turmeric & Spices for Global Markets
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 text-lg text-secondary-foreground/80 max-w-lg leading-relaxed font-body">
            Sourced from India's finest farms. Tested for purity. Exported worldwide with consistency you can trust.
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View Our Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-md border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors"
            >
              Request Bulk Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}