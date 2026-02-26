"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Turmeric Fingers",
    description:
      "Raw whole turmeric with high curcumin content. Premium export-grade quality for bulk supply worldwide.",
    image: "/images/product-turmeric-fingers.png",
    badge: "Best Seller",
  },
  {
    name: "Turmeric Powder",
    description:
      "Finely ground turmeric with consistent golden color and rich aroma. Suitable for international markets.",
    image: "/images/product-turmeric-powder.png",
    badge: "Premium Grade",
  },
  {
    name: "Turmeric Bulbs",
    description:
      "High-curcumin turmeric bulbs, cleaned and processed for industrial and export use.",
    image: "/images/product-turmeric-bulbs.png",
    badge: null,
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Turmeric Products
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Premium Haldi (Turmeric), Sourced with Care
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Each product undergoes rigorous quality testing and is available in
            custom packaging to meet your international market requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <span
                  role="link"
                  tabIndex={0}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors cursor-pointer"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
