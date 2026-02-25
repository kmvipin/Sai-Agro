import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "SpiceRoot has been our primary supplier for three years. The consistency in quality and reliability in delivery is unmatched in the industry.",
    name: "Ahmed Al-Rashid",
    role: "Procurement Director",
    company: "Gulf Spice Trading, UAE",
  },
  {
    quote:
      "Their turmeric consistently tests above 5% curcumin content. We have tried other suppliers, but none match SpiceRoot's quality standards.",
    name: "Sarah Mitchell",
    role: "Quality Manager",
    company: "NatureFoods Inc., USA",
  },
  {
    quote:
      "From documentation to delivery, the export process with SpiceRoot is seamless. A truly professional team that understands global trade.",
    name: "Klaus Weber",
    role: "Import Manager",
    company: "EuroSpice GmbH, Germany",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Trusted by Buyers Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-border bg-card p-8 flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-base leading-relaxed text-muted-foreground flex-1">
                {`"${testimonial.quote}"`}
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-sm font-medium text-primary">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
