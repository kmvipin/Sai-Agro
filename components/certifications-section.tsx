import { ShieldCheck } from "lucide-react"

const certifications = [
  { name: "FSSAI", description: "Food Safety & Standards Authority of India" },
  { name: "ISO 22000", description: "Food Safety Management Certified" },
  { name: "HACCP", description: "Hazard Analysis Critical Control Points" },
  { name: "APEDA", description: "Agricultural Export Registration" },
  { name: "Spice Board", description: "Registered with Spice Board of India" },
  { name: "Organic", description: "Certified Organic Processing" },
]

export function CertificationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Certifications
          </p>
          <h2 className="font-serif text-3xl font-bold text-secondary-foreground sm:text-4xl lg:text-5xl text-balance">
            Quality You Can Verify
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-foreground/70">
            Our commitment to quality is backed by internationally recognized
            certifications and rigorous internal audits.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center text-center rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 hover:bg-secondary-foreground/10 transition-colors"
            >
              <ShieldCheck className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-sm font-bold text-secondary-foreground">
                {cert.name}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-secondary-foreground/60">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
