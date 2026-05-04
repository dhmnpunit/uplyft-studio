"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Career", href: "/career" },
  { label: "Insights", href: "/insights" },
];

function SparkleIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.09 8.26L18 5L14.74 10.91L21 12L14.74 13.09L18 19L13.09 15.74L12 22L10.91 15.74L6 19L9.26 13.09L3 12L9.26 10.91L6 5L10.91 8.26L12 2Z"
        fill="#090A0D"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav
        className="mx-auto max-w-[1432px] flex items-center justify-between"
        style={{ padding: "14px 0" }}
      >
        <div
          className="flex items-center justify-between w-full"
          style={{ padding: "0 48px" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <SparkleIcon />
            <span className="font-body text-[17px] font-semibold text-[#090A0D] tracking-[-0.01em]">
              Uplyft Studios
            </span>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-body text-[15px] transition-colors ${
                    isActive
                      ? "text-[#090A0D] font-medium"
                      : "text-[#090A0D] hover:text-black/70"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-[18px] h-[2px] bg-[#090A0D] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="font-body text-[15px] text-[#090A0D] border border-[#e0e0e0] bg-white hover:bg-neutral-50 transition-colors rounded-lg"
              style={{
                padding: "12.22px 20.36px",
                height: "45.22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Learn more
            </Link>
            <Link
              href="#"
              className="font-body text-[15px] text-white bg-[#090A0D] hover:bg-[#1a1b1f] transition-colors rounded-lg"
              style={{
                padding: "12.22px 20.36px",
                height: "45.22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Bottom gradient line */}
      <div
        className="w-full h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #d8b4fe 25%, #c084fc 50%, #d8b4fe 75%, transparent 100%)",
        }}
      />
    </header>
  );
}
