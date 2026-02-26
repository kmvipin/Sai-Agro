import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-turmeric.jpg"
          alt="Premium turmeric and spices"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Sai Agro – Turmeric Specialist
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-background sm:text-5xl lg:text-7xl text-balance">
            Premium Turmeric Products for Global Markets
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-background/80 max-w-2xl mx-auto text-pretty">
            Sourced from the finest turmeric farms, processed to international
            quality standards, and delivered worldwide. Your trusted partner for
            bulk turmeric exports.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#products"
              className="rounded-lg bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Turmeric Products
            </Link>
            <Link
              href="#contact"
              className="rounded-lg border-2 border-background/30 bg-background/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-background hover:bg-background/20 transition-colors"
            >
              Request Bulk Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
