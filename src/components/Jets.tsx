import bombardier from "../assets/g650er.jpg";
import fenix from "../assets/fenix.jpg";
import cesna from "../assets/cesna.jpg";
import { useInView } from "../hooks/useInView";

interface Jet {
  id: string;
  name: string;
  model: string;
  type: string;
  badge: string;
  img: string;
  specs: { value: string; label: string }[];
  highlights: string[];
  price: string;
  priceNote: string;
  phone: string;
}

const jets: Jet[] = [
  {
    id: "g650er",
    name: "G650ER",
    model: "Gulfstream G650ER",
    type: "Long-Range · 7,000nm Range",
    badge: "Ultra-Long Range",
    img: bombardier,
    specs: [
      { value: "7,000nm", label: "Range" },
      { value: "19", label: "Passengers" },
      { value: "750mi", label: "Height" },
      { value: "5,500ft", label: "Cabin" },
    ],
    highlights: [
      "World-class long-range capability — fly non-stop from NY to London",
      "Spacious cabin with lounge, bedroom, and conference area",
      "Advanced avionics — fly anywhere, anytime with confidence",
    ],
    price: "$45,000",
    priceNote: "per flight · varies by itinerary",
    phone: "7813633462",
  },
  {
    id: "phoenix",
    name: "Phoenix",
    model: "Bombardier Global 7500",
    type: "Premium · 7,700nm Range",
    badge: "Flagship Experience",
    img: fenix,
    specs: [
      { value: "7,700nm", label: "Range" },
      { value: "19", label: "Passengers" },
      { value: "750mi", label: "Height" },
      { value: "6,000ft", label: "Cabin" },
    ],
    highlights: [
      "The pinnacle of jet travel — spacious, luxurious, and technologically advanced",
      "Bedroom, living room, and dining area — true home away from home",
      "Direct flights to 115+ destinations worldwide",
    ],
    price: "$55,000",
    priceNote: "per flight · varies by itinerary",
    phone: "7813633462",
  },
  {
    id: "fenix",
    name: "Fenix",
    model: "Cessna Citation Longitude",
    type: "Mid-Size · 3,710nm Range",
    badge: "Efficient & Comfortable",
    img: cesna,
    specs: [
      { value: "3,710nm", label: "Range" },
      { value: "12", label: "Passengers" },
      { value: "450mi", label: "Height" },
      { value: "4,800ft", label: "Cabin" },
    ],
    highlights: [
      "Perfect for regional travel — efficient and comfortable",
      "Quiet cabin with premium leather seating",
      "Ideal for business travel and family vacations",
    ],
    price: "$35,000",
    priceNote: "per flight · varies by itinerary",
    phone: "7813633462",
  },
];

export function Jets() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);
  const { ref: gridRef, inView: gridInView } = useInView(0.1);

  return (
    <section id="jet" className="section section--surface">
      <div className="container">
        {/* Header */}
        <div
          className="jets__header"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <p className={`eyebrow reveal${headerInView ? " in-view" : ""}`}>
            Private Jet Charters
          </p>

          <h2
            className={`section-title reveal reveal-delay-1${headerInView ? " in-view" : ""}`}
          >
            Access Beyond <em>the Ordinary</em>
          </h2>

          <p
            className={`section-subtitle reveal reveal-delay-2${headerInView ? " in-view" : ""}`}
          >
            Through our partnership with <strong>Apollo Jets</strong> — the #1
            brokerage in the U.S. — we arrange private jet travel with zero
            hassle. No membership. No commitment. Just call Reda.
          </p>
        </div>

        {/* Jet Grid */}
        <div
          className="fleet__grid"
          ref={gridRef as React.RefObject<HTMLDivElement>}
        >
          {jets.map((jet, i) => (
            <article
              key={jet.id}
              className={`jet-card reveal reveal-delay-${i as 0 | 1 | 2 | 3}${gridInView ? " in-view" : ""}`}
            >
              {/* Image */}
              <div className="vessel-card__img-wrap">
                <img
                  src={jet.img}
                  alt={`${jet.name} — ${jet.model}`}
                  loading="lazy"
                />
                <span className="vessel-card__badge">{jet.badge}</span>
              </div>

              {/* Body */}
              <div className="vessel-card__body">
                <div>
                  <h3 className="vessel-card__name">{jet.name}</h3>
                  <p className="vessel-card__type">
                    {jet.model} &nbsp;·&nbsp; {jet.type}
                  </p>
                </div>

                {/* Specs */}
                <div className="vessel-card__specs">
                  {jet.specs.map((spec) => (
                    <div className="spec-item" key={spec.label}>
                      <span className="spec-item__value">{spec.value}</span>
                      <span className="spec-item__label">{spec.label}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="vessel-card__highlights">
                  {jet.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                {/* Footer: price + CTA */}
                <div className="vessel-card__footer">
                  <div className="vessel-card__price-wrap">
                    <span className="vessel-card__price">{jet.price}</span>
                    <span className="vessel-card__price-note">
                      {jet.priceNote}
                    </span>
                  </div>
                  <a href={`tel:${jet.phone}`} className="vessel-card__inquire">
                    Inquire &rarr;
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Benefits Strip */}
        <div className="jets__benefits">
          <div className="jets__benefits-inner">
            <div className="jet-benefit">
              <span className="jet-benefit__icon" aria-hidden="true">
                ✓
              </span>
              <span className="jet-benefit__title">Argus Certified</span>
              <span className="jet-benefit__desc">Gold Standard Safety</span>
            </div>
            <div className="jet-benefit">
              <span className="jet-benefit__icon" aria-hidden="true">
                ✓
              </span>
              <span className="jet-benefit__title">Wyvern Wingman</span>
              <span className="jet-benefit__desc">Verified Safety Rating</span>
            </div>
            <div className="jet-benefit">
              <span className="jet-benefit__icon" aria-hidden="true">
                ★
              </span>
              <span className="jet-benefit__title">Largest U.S. Brokerage</span>
              <span className="jet-benefit__desc">3,500+ vetted aircraft</span>
            </div>
            <div className="jet-benefit">
              <span className="jet-benefit__icon" aria-hidden="true">
                $
              </span>
              <span className="jet-benefit__title">No Membership</span>
              <span className="jet-benefit__desc">Pay per flight only</span>
            </div>
            <div className="jet-benefit">
              <span className="jet-benefit__icon" aria-hidden="true">
                %
              </span>
              <span className="jet-benefit__title">30-40% Savings</span>
              <span className="jet-benefit__desc">
                vs jet cards & fractional
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
