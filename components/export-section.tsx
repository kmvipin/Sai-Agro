'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { Globe, Ship, BarChart3, Clock } from "lucide-react"

const stats = [
  { value: "40+", label: "Companies Served", icon: Globe },
  { value: "5000+", label: "Metric Tons Annually", icon: Ship },
  { value: "99.5%", label: "Quality Compliance", icon: BarChart3 },
  { value: "40+", label: "Years in Export", icon: Clock },
]

const exportImages = [
  {
    src: "/images/export-section1.jpeg",
    alt: "SpiceRoot export warehouse and logistics",
  },
  {
    src: "/images/export-section2.jpeg",
    alt: "Spice processing and quality control",
  },
  {
    src: "/images/export-section3.jpeg",
    alt: "Global logistics and shipping operations",
  }
]

export function ExportSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % exportImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovering])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % exportImages.length)
    } else if (isRightSwipe) {
      setCurrentIndex((prev) =>
        prev === 0 ? exportImages.length - 1 : prev - 1
      )
    }
  }

  return (
    <section id="exports" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Global Exports
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl leading-tight text-balance">
              Why Global Buyers Trust SaiAgro
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our operations are built around an integrated supply chain that connects trusted sourcing 
              regions with modern processing facilities. Each stage—from procurement to handling and 
              packaging—is managed with a strong focus on quality, consistency, and reliability.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <stat.icon className="h-6 w-6 text-primary mb-3" />
                  <p className="font-serif text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {exportImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {exportImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border w-2 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}