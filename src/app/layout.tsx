import type { Metadata } from "next";
import { DM_Serif_Display, Instrument_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Uplyft Studios — Custom Software & AI Automations",
  description:
    "Custom software and AI automations for businesses that have outgrown generic tools. Built in India. Live in a week.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${ibmPlexSerif.variable} ${instrumentSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
