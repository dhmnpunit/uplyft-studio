const services = [
  {
    title: "AI WhatsApp Receptionist",
    description:
      "Your business WhatsApp becomes a 24/7 automated receptionist. Handles bookings, FAQs, lead capture, and follow-ups — in Hindi and English.",
    audience: "Clinics, real estate agents, salons, coaching centres, law offices",
  },
  {
    title: "Customer Support Automation",
    description:
      "An AI layer on your support inbox. Checks order status, handles returns, answers FAQs, and flags issues before customers complain.",
    audience: "Shopify brands in skincare, supplements, apparel, home goods",
  },
];

export function Services() {
  return (
    <section className="py-24 px-6 fade-in-section">
      <div className="max-w-[1080px] mx-auto">
        <div className="border-t border-neutral-200" />
        <p className="mt-12 font-body text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400">
          What We Build
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-neutral-200 rounded-lg p-8 hover:border-neutral-400 transition-colors"
            >
              <h3 className="font-display text-2xl tracking-tight text-black">
                {service.title}
              </h3>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-neutral-600">
                {service.description}
              </p>
              <p className="mt-6 font-body text-xs text-neutral-400">
                {service.audience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
