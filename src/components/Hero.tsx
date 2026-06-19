import redaBroker from "../assets/reda-broker.jpg";
import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger subtle zoom-out on the background after a brief delay
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToFleet = () => {
    document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-[center_40%] transition-transform duration-1200 ease ${loaded ? "scale-100" : "scale-104"}`}
        style={{
          backgroundImage: `url(${redaBroker})`,
        }}
        role="img"
        aria-label="Luxury superyacht at sea"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,8,0.45)] via-[rgba(5,5,8,0.5)] to-[#050508]" />

      {/* Content */}
      <div className="relative z-20 px-6 w-full max-w-[1200px] mx-auto">
        <p className="font-label text-[0.62rem] font-semibold tracking-[0.38em] text-[#c9a84c] uppercase mb-8 flex items-center gap-2 opacity-0 animate-fadeUp delay-300">
          <span className="w-10 h-[1px] bg-[#c9a84c] block" />
          Private Broker · Ultra-High Net Worth Experiences
        </p>

        <h1 className="font-display font-light leading-[0.92] mb-10 flex flex-col gap-0 opacity-0 animate-fadeUp delay-500">
          <span className="block text-[#f0ece4]">Access Beyond</span>

          {/* Editorial slash separator — the signature element */}
          <span
            className="flex items-center gap-2.5 mb-1.5 opacity-0 animate-fadeIn delay-750"
            aria-hidden="true"
          >
            <span className="text-[#c9a84c] font-label text-[0.6rem] font-semibold tracking-[0.4em] uppercase">
              L.A.F Empire
            </span>
          </span>

          <em className="block text-[#f0ece4] font-light italic pl-2.5 text-[clamp(3.5rem,8vw,9rem)]">
            the Ordinary
          </em>
        </h1>

        <p className="font-body text-[clamp(0.8rem,1.5vw,0.95rem)] font-light text-[#6e6e7a] tracking-[0.08em] mb-10 opacity-0 animate-fadeUp delay-900">
          Superyacht charters · Private jets · Exclusive events · Elite
          nightlife
        </p>

        <div className="flex items-center gap-6 flex-wrap opacity-0 animate-fadeUp delay-1100">
          <a
            href="tel:7813633462"
            className="font-label text-[0.62rem] font-semibold tracking-[0.25em] uppercase bg-[#c9a84c] text-[#050508] px-10 py-4 transition-all duration-250 hover:bg-[#dbbe68]"
          >
            Call Reda — 781-363-3462
          </a>
          <button
            onClick={scrollToFleet}
            className="font-label text-[0.62rem] font-semibold tracking-[0.25em] uppercase text-[#c9a84c] px-10 py-4 border border-[rgba(201,168,76,0.22)] transition-all duration-250 hover:bg-[rgba(201,168,76,0.1)] hover:border-[#c9a84c]"
          >
            View Fleet
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-0 animate-fadeIn delay-1500"
        role="presentation"
      >
        <span className="font-label text-[0.55rem] font-medium tracking-[0.35em] text-[#6e6e7a] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c9a84c] to-transparent animate-scrollPulse" />
      </div>
    </section>
  );
}
