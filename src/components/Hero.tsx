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
    <section id="hero" className="hero">
      {/* Background */}
      <div
        className={`hero__bg${loaded ? " loaded" : ""}`}
        style={{
          backgroundImage: `url(${redaBroker})`,
        }}
        role="img"
        aria-label="Luxury superyacht at sea"
      />
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content">
        <p className="hero__eyebrow">
          Private Broker · Ultra-High Net Worth Experiences
        </p>

        <h1 className="hero__title">
          <span className="hero__title-main">Access Beyond</span>

          {/* Editorial slash separator — the signature element */}
          <span className="hero__title-slash" aria-hidden="true">
            <span className="hero__title-slash-mark">L.A.F&nbsp;Empire</span>
          </span>

          <em className="hero__title-em">the Ordinary</em>
        </h1>

        <p className="hero__tagline">
          Superyacht charters&nbsp;·&nbsp;Private jets&nbsp;·&nbsp;Exclusive
          events&nbsp;·&nbsp;Elite nightlife
        </p>

        <div className="hero__ctas">
          <a href="tel:7813633462" className="btn btn--gold">
            Call Reda — 781-363-3462
          </a>
          <button className="btn btn--outline" onClick={scrollToFleet}>
            View Fleet
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" role="presentation">
        <span className="hero__scroll-label">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
