export function Hero() {
  return (
    <section className="pt-36 pb-24 px-6 fade-in-section">
      <div className="max-w-[1080px] mx-auto">
        <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] tracking-tight text-black max-w-[720px]">
          Custom software and AI automations for businesses that have outgrown{" "}
          <span className="text-accent">generic tools.</span>
        </h1>
        <p className="mt-6 font-body text-lg text-neutral-500 max-w-[480px]">
          Built in India. Live in a week.
        </p>
        <a
          href="#contact"
          className="inline-block mt-10 px-7 py-3.5 bg-accent text-white font-body text-sm font-medium rounded-full hover:bg-accent-hover transition-colors"
        >
          Book a 15-minute call
        </a>
      </div>
    </section>
  );
}
