import Image from "next/image"
import { Leaf, Award, Package, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure, unadulterated spices with no artificial additives or preservatives.",
  },
  {
    icon: Award,
    title: "Export Quality",
    description: "Meeting the highest international quality and safety standards.",
  },
  {
    icon: Package,
    title: "Bulk Supply",
    description: "Reliable large-scale supply chain for domestic and international orders.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Tested",
    description: "Rigorous lab testing for purity, curcumin content, and safety.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-roots.jpg"
                alt="Fresh turmeric roots and spices"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 shadow-xl hidden lg:block">
              <p className="font-serif text-3xl font-bold text-primary-foreground">25+</p>
              <p className="text-sm font-medium text-primary-foreground/80">
                Years of Excellence
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Our Heritage
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl leading-tight text-balance">
              Sai Agro: Turmeric Specialists for Global Markets
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Sai Agro Spices and Edible Products Pvt. Ltd. specializes exclusively
              in sourcing and exporting the finest turmeric (Haldi) from
              India{"'"}s most fertile regions under the Vaishnavi 108 brand.
              Our deep-rooted relationships with farming communities, combined
              with modern processing facilities, ensure that every shipment
              meets the stringent quality benchmarks demanded by international
              markets.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From farm to port, we control every step of the supply chain,
              delivering premium turmeric products with consistent quality,
              competitive bulk pricing, and dependable logistics to buyers
              across global markets.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
