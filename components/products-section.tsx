"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Turmeric Fingers",
    description:
      "Premium whole dried turmeric fingers with high curcumin content, sourced from select farms.",
    image: "/images/product-turmeric-fingers.jpg",
    badge: "Best Seller",
  },
  {
    name: "Turmeric Powder",
    description:
      "Finely ground turmeric powder with vibrant golden color and rich aroma, ideal for export.",
    image: "/images/product-turmeric-powder.jpg",
    badge: "Premium Grade",
  },
  {
    name: "Red Chilli",
    description:
      "Dried red chilli varieties with consistent heat levels, color, and pungency for global markets.",
    image: "/images/product-red-chilli.jpg",
    badge: null,
  },
  {
    name: "Coriander",
    description:
      "Whole and ground coriander with distinctive aroma, carefully cleaned and processed.",
    image: "/images/product-coriander.jpg",
    badge: null,
  },
  {
    name: "Other Spices",
    description:
      "Cumin, black pepper, cardamom, cloves, and a wide range of premium Indian spices.",
    image: "/images/product-mixed-spices.jpg",
    badge: "Wide Range",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Our Products
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Premium Spices, Sourced with Care
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Each product undergoes rigorous quality testing and is available in
            custom packaging to meet your market requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
