import Image from "next/image"
import { Globe, Ship, BarChart3, Clock } from "lucide-react"

const stats = [
  { value: "40+", label: "Companies Served", icon: Globe },
  { value: "5000+", label: "Metric Tons Annually", icon: Ship },
  { value: "99.5%", label: "Quality Compliance", icon: BarChart3 },
  { value: "40+", label: "Years in Export", icon: Clock },
]

export function ExportSection() {
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
              Our vertically integrated supply chain, state-of-the-art
              processing facilities, and commitment to international quality
              certifications make us the preferred partner for buyers across
              the Americas, Europe, the Middle East, and Asia-Pacific.
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
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/export-warehouse.jpg"
                alt="SpiceRoot export warehouse and logistics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
