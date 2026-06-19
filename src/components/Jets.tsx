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
          className="mb-12 md:mb-16"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
          ref={gridRef as React.RefObject<HTMLDivElement>}
        >
          {jets.map((jet, i) => (
            <article
              key={jet.id}
              className={`jet-card reveal reveal-delay-${i as 0 | 1 | 2 | 3}${gridInView ? " in-view" : ""}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={jet.img}
                  alt={`${jet.name} — ${jet.model}`}
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 font-label text-[0.55rem] font-semibold tracking-widest uppercase bg-[#c9a84c] text-[#050508] px-3 py-1.5">
                  {jet.badge}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 gap-3 py-6 px-6">
                <div>
                  <h3 className="font-display text-3xl font-light text-[#f0ece4]">
                    {jet.name}
                  </h3>
                  <p className="font-label text-[0.58rem] font-medium tracking-wide text-[#6e6e7a] uppercase mt-0.5">
                    {jet.model} &nbsp;·&nbsp; {jet.type}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-4 gap-2.5 py-3 border-t border-[#13131f] border-b border-[#13131f]">
                  {jet.specs.map((spec) => (
                    <div className="flex flex-col gap-0.5" key={spec.label}>
                      <span className="font-body text-[1.05rem] font-medium text-[#f0ece4]">
                        {spec.value}
                      </span>
                      <span className="font-label text-[0.52rem] font-medium tracking-[0.2em] text-[#6e6e7a] uppercase">
                        {spec.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-1">
                  {jet.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-[0.85rem] text-[#6e6e7a] font-light flex items-start gap-0.6"
                    >
                      <span className="text-[#c9a84c] text-[0.75rem] mt-0.4">
                        —
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Footer: price + CTA */}
                <div className="flex items-end justify-between gap-2 mt-auto pt-3 border-t border-[#13131f]">
                  <div className="flex flex-col gap-0.15">
                    <span className="font-display text-[2.2rem] font-light text-[#c9a84c]">
                      {jet.price}
                    </span>
                    <span className="font-label text-[0.55rem] font-medium tracking-widest text-[#6e6e7a] uppercase">
                      {jet.priceNote}
                    </span>
                  </div>
                  <a
                    href={`tel:${jet.phone}`}
                    className="font-label text-[0.6rem] font-semibold tracking-[0.2em] text-[#c9a84c] relative pb-1 border-b border-[#c9a84c] hover:text-[#dbbe68] hover:border-[#c9a84c]"
                  >
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
