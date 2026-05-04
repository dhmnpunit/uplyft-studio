"use client";

import { useState, type FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 px-6 fade-in-section">
      <div className="max-w-[1080px] mx-auto">
        <div className="border-t border-neutral-200" />
        <div className="mt-16">
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] tracking-tight text-black">
            One conversation is{" "}
            <span className="text-accent">all it takes.</span>
          </h2>
          <p className="mt-4 font-body text-base text-neutral-500 max-w-[440px]">
            No commitment at this stage. Tell us what&apos;s broken and
            we&apos;ll tell you if we can fix it.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-16">
          {/* Book a call */}
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400">
              Book a Call
            </p>
            <p className="mt-4 font-body text-[15px] text-neutral-600 leading-relaxed">
              A 15-minute call to understand your current setup and what&apos;s
              broken. No pitch. Just listening.
            </p>
            <a
              href="#"
              className="inline-block mt-6 px-7 py-3.5 bg-black text-white font-body text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
            >
              Schedule a call
            </a>
          </div>

          {/* Contact form */}
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400">
              Send a Message
            </p>
            {submitted ? (
              <p className="mt-6 font-body text-[15px] text-accent">
                Thanks — we&apos;ll get back to you within 24 hours.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg font-body text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg font-body text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="What's broken?"
                  rows={3}
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg font-body text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-accent text-white font-body text-sm font-medium rounded-full hover:bg-accent-hover transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
