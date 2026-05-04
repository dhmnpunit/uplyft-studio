"use client";

import { useEffect, useRef, useState } from "react";

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#25D366" />
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        fill="white"
      />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#f59e0b" />
      <path
        d="M12 6a2 2 0 012 2v1h2a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4a2 2 0 012-2h2V8a2 2 0 012-2zm-2 7a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"
        fill="white"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#8b5cf6" />
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReminderIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#3b82f6" />
      <path
        d="M12 8v4l2 2m-2-9a7 7 0 107 7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState(12);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, 1 - rect.top / (windowHeight * 0.6))
      );
      setTilt(12 * (1 - progress));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <div
        className="w-full max-w-[1082px] rounded-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.35)",
          padding: "21.7px",
          perspective: "1200px",
        }}
      >
        <div
          className="w-full rounded-xl overflow-hidden transition-transform duration-100 ease-out"
          style={{
            transform: `perspective(1200px) rotateX(${tilt}deg)`,
            transformOrigin: "center bottom",
          }}
        >
          {/* Product illustration */}
          <div
            className="w-full relative"
            style={{
              background: "#dbe4f0",
              padding: "48px 40px 48px",
              minHeight: "480px",
            }}
          >
            {/* Top card - Customer messages */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/80 backdrop-blur rounded-xl px-8 py-5 shadow-sm max-w-[420px] w-full">
                <p className="text-[13px] text-[#6b7280] font-body mb-1">
                  Customer messages on WhatsApp
                </p>
                <p className="text-[22px] text-[#090A0D] font-body font-medium tracking-[-0.01em]">
                  Book appointment
                </p>
              </div>
            </div>

            {/* SVG connector lines */}
            <svg
              className="w-full absolute left-0"
              style={{ top: "140px", height: "200px" }}
              viewBox="0 0 800 200"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Center line down */}
              <path
                d="M400 0 L400 60"
                stroke="#9ca3af"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              {/* Branch left */}
              <path
                d="M400 60 Q400 100 250 120 L250 160"
                stroke="#9ca3af"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              {/* Branch right */}
              <path
                d="M400 60 Q400 100 550 120 L550 160"
                stroke="#9ca3af"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              {/* Center continues */}
              <path
                d="M400 60 L400 100"
                stroke="#9ca3af"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            </svg>

            {/* Middle card - AI checks availability */}
            <div className="flex justify-center mt-10 mb-16 relative z-10">
              <div className="bg-white/70 backdrop-blur rounded-full px-5 py-2.5 shadow-sm flex items-center gap-2.5">
                <BotIcon />
                <span className="text-[15px] text-[#090A0D] font-body">
                  AI checks availability
                </span>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex justify-between items-center px-8 mt-12 relative z-10">
              <div className="bg-white/70 backdrop-blur rounded-full px-5 py-2.5 shadow-sm flex items-center gap-2.5">
                <CheckIcon />
                <span className="text-[15px] text-[#090A0D] font-body">
                  Confirms booking
                </span>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-full px-5 py-2.5 shadow-sm flex items-center gap-2.5">
                <ReminderIcon />
                <span className="text-[15px] text-[#090A0D] font-body">
                  Sends reminder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
