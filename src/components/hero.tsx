import Link from "next/link";
import { HeroImage } from "./hero-image";

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#090A0D" strokeWidth="1.5" />
      <path d="M10 8.5l6 3.5-6 3.5V8.5z" fill="#090A0D" />
    </svg>
  );
}

function SparkleSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L13.09 8.26L18 5L14.74 10.91L21 12L14.74 13.09L18 19L13.09 15.74L12 22L10.91 15.74L6 19L9.26 13.09L3 12L9.26 10.91L6 5L10.91 8.26L12 2Z"
        fill="#22c55e"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "161px 48px 100px" }}
    >
      {/* Background gradient wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(196, 132, 252, 0.25) 0%, rgba(251, 191, 146, 0.12) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1325px] mx-auto text-center">
        {/* Pill */}
        <div className="flex justify-center mb-8">
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#ecfdf5] text-[#090A0D] rounded-full font-body text-[14px]"
            style={{ padding: "8px 12px" }}
          >
            <SparkleSmall />
            <span>Live in under two weeks</span>
          </Link>
        </div>

        {/* Heading */}
        <h1
          className="mx-auto max-w-[900px] text-[#090A0D] leading-[1.15] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-heading), 'IBM Plex Serif', serif",
            fontSize: "52px",
          }}
        >
          Custom software and AI automations
          <br />
          for businesses that have outgrown
          <br />
          generic tools
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-5 max-w-[640px] text-[#6a6a6a] font-body leading-[1.6]"
          style={{ fontSize: "20px" }}
        >
          We understand the problem first, then build the right solution for it.
          No packages. No guesswork. Just software that fits how your business
          actually works.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="#contact"
            className="font-body text-[15px] text-white bg-[#090A0D] hover:bg-[#1a1b1f] transition-colors rounded-lg"
            style={{
              padding: "12.22px 20.36px",
              height: "45.22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Book a Call
          </Link>
          <Link
            href="#"
            className="font-body text-[15px] text-[#090A0D] hover:text-black/70 transition-colors flex items-center gap-2"
          >
            <PlayIcon />
            Learn More
          </Link>
        </div>

        {/* Product image */}
        <div className="mt-14">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
