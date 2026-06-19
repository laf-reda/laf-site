import { useState } from "react";
import calais1 from "../assets/calais-1.jpg";
import calais2 from "../assets/calais-2.jpg";
import champagneLady1 from "../assets/champagne-lady-1.jpg";
import champagneLady2 from "../assets/champagne-lady-2.jpg";
import champagneLady3 from "../assets/champagne-lady-3.jpg";
import trilogy1 from "../assets/trilogy-1.jpg";
import trilogy2 from "../assets/trilogy-2.jpg";
import trilogy3 from "../assets/trilogy-3.jpg";
import trilogy4 from "../assets/trilogy-4.jpg";
import trilogy5 from "../assets/trilogy-5.jpg";
import { useInView } from "../hooks/useInView";

interface Vessel {
  id: string;
  name: string;
  model: string;
  type: string;
  badge: string;
  images: string[];
  currentImage: number;
  specs: { value: string; label: string }[];
  highlights: string[];
  price: string;
  priceNote: string;
  phone: string;
}

const vessels: Vessel[] = [
  {
    id: "calais",
    name: "Calais",
    model: "100ft Jumbo Azimut",
    type: "Motor Yacht · Caribbean & Beyond",
    badge: "Day & Overnight",
    images: [calais1, calais2],
    currentImage: 0,
    specs: [
      { value: "100ft", label: "Length" },
      { value: "12", label: "Guests" },
      { value: "4", label: "Suites" },
      { value: "5", label: "Baths" },
    ],
    highlights: [
      "Elegant Zuretti-designed interior with panoramic salon views",
      "Deck jacuzzi, expansive teak decks, dining & lounge areas",
      "Seamless indoor-outdoor living — fully equipped galley",
    ],
    price: "$2,900",
    priceNote: "per charter · up to 12 guests",
    phone: "7813633462",
  },
  {
    id: "trilogy",
    name: "Trilogy",
    model: "103ft Broward",
    type: "Motor Yacht · Ft. Lauderdale",
    badge: "Day & Evening",
    images: [trilogy1, trilogy2, trilogy3, trilogy4, trilogy5],
    currentImage: 0,
    specs: [
      { value: "103ft", label: "Length" },
      { value: "12", label: "Guests" },
      { value: "4", label: "Baths" },
      { value: "A/C", label: "Climate" },
    ],
    highlights: [
      "Modern upscale interior — climate-controlled cabin throughout",
      "Fully equipped galley kitchen — comfortable lounge & dining",
      "Jacuzzi, swim platform & panoramic waterfront views",
    ],
    price: "$1,800",
    priceNote: "per charter · up to 12 guests",
    phone: "7813633462",
  },
  {
    id: "champagne-lady",
    name: "Champagne Lady",
    model: "80ft Party Yacht",
    type: "Event Vessel · Up to 150 Guests",
    badge: "Events & Parties",
    images: [champagneLady1, champagneLady2, champagneLady3],
    currentImage: 0,
    specs: [
      { value: "80ft", label: "Length" },
      { value: "150", label: "Guests" },
      { value: "2", label: "Baths" },
      { value: "Full", label: "Open Bar" },
    ],
    highlights: [
      "High-capacity vessel — built for large-scale events & celebrations",
      "Expansive open decks with dedicated dance floor & entertainment",
      "Professional crew & event support — perfect for corporate & private",
    ],
    price: "$1,500",
    priceNote: "per charter · up to 150 guests",
    phone: "7813633462",
  },
];

export function Fleet() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);
  const { ref: gridRef, inView: gridInView } = useInView(0.1);

  // Slideshow state - each vessel tracks its own image index
  const [imageIndices, setImageIndices] = useState<Record<string, number>>(() =>
    vessels.reduce(
      (acc, vessel) => ({ ...acc, [vessel.id]: 0 }),
      {} as Record<string, number>,
    ),
  );

  const nextImage = (vesselId: string) => {
    const vessel = vessels.find((v) => v.id === vesselId);
    if (!vessel) return;
    setImageIndices((prev) => ({
      ...prev,
      [vesselId]: (prev[vesselId] + 1) % vessel.images.length,
    }));
  };

  const prevImage = (vesselId: string) => {
    const vessel = vessels.find((v) => v.id === vesselId);
    if (!vessel) return;
    setImageIndices((prev) => ({
      ...prev,
      [vesselId]:
        (prev[vesselId] - 1 + vessel.images.length) % vessel.images.length,
    }));
  };

  return (
    <section id="fleet" className="section bg-[#080810]">
      <div className="container">
        {/* Header */}
        <div
          className="fleet__header mb-12"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <p className={`eyebrow reveal${headerInView ? " in-view" : ""}`}>
            Charter Fleet
          </p>
          <h2
            className={`font-display font-light text-[#f0ece4] mb-4 reveal reveal-delay-1${headerInView ? " in-view" : ""}`}
          >
            Hand-Selected <em className="italic font-light">Superyachts</em>
          </h2>
          <p
            className={`font-body text-[clamp(0.95rem,1.5vw,1.1rem)] text-[#6e6e7a] font-light leading-8 max-w-[540px] reveal reveal-delay-2${headerInView ? " in-view" : ""}`}
          >
            Every vessel is crewed, provisioned, and prepared to your exact
            specification. Departure from Marina Bay Harbor, Quincy MA — or
            arrange a custom departure directly with Reda.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-3 gap-6"
          ref={gridRef as React.RefObject<HTMLDivElement>}
        >
          {vessels.map((vessel, index) => (
            <article
              key={vessel.id}
              className={`bg-[#0f0f1a] border border-[rgba(201,168,76,0.22)] flex flex-col transition-all duration-300 overflow-hidden reveal reveal-delay-${index + 1}${gridInView ? " in-view" : ""}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={vessel.images[imageIndices[vessel.id]]}
                  alt={`${vessel.name} — ${vessel.model}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-600 ease-custom brightness-[0.85] hover:brightness-[0.95] hover:scale-104"
                />
                <span className="absolute top-4 right-4 font-label text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-[#050508] bg-[#c9a84c] px-3 py-1.5 z-10">
                  {vessel.badge}
                </span>

                {/* Navigation Arrows */}
                <button
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-[1.5rem] text-[#c9a84c] bg-[rgba(5,5,8,0.7)] p-3 border border-[rgba(201,168,76,0.22)] rounded-lg opacity-0 transition-all duration-300 hover:opacity-100 hover:bg-[#c9a84c] hover:text-[#050508] hover:border-[#c9a84c] focus:outline-none z-20"
                  onClick={() => prevImage(vessel.id)}
                  aria-label={`Previous image of ${vessel.name}`}
                >
                  &larr;
                </button>
                <button
                  className="absolute top-1/2 -translate-y-1/2 right-3 text-[1.5rem] text-[#c9a84c] bg-[rgba(5,5,8,0.7)] p-3 border border-[rgba(201,168,76,0.22)] rounded-lg opacity-0 transition-all duration-300 hover:opacity-100 hover:bg-[#c9a84c] hover:text-[#050508] hover:border-[#c9a84c] focus:outline-none z-20"
                  onClick={() => nextImage(vessel.id)}
                  aria-label={`Next image of ${vessel.name}`}
                >
                  &rarr;
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col gap-4 p-7">
                <div>
                  <h3 className="font-display text-[1.9rem] font-normal text-[#f0ece4] leading-1.1">
                    {vessel.name}
                  </h3>
                  <p className="font-label text-[0.58rem] font-medium tracking-[0.25em] text-[#6e6e7a] uppercase mt-0.5">
                    {vessel.model} · {vessel.type}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-4 gap-3 pt-4 pb-4 border-t border-[#13131f] border-b border-[#13131f]">
                  {vessel.specs.map((spec) => (
                    <div className="flex flex-col gap-0.5" key={spec.label}>
                      <span className="font-body text-[1.05rem] font-medium text-[#f0ece4] leading-1">
                        {spec.value}
                      </span>
                      <span className="font-label text-[0.52rem] font-medium tracking-[0.2em] text-[#6e6e7a] uppercase">
                        {spec.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="list-none flex flex-col gap-1">
                  {vessel.highlights.map((h) => (
                    <li className="text-[0.85rem] text-[#6e6e7a] font-light flex items-start gap-0.6">
                      <span className="text-[#c9a84c] text-[0.75rem] mt-0.4">
                        —
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Footer: price + CTA */}
                <div className="flex items-end justify-between gap-4 mt-auto pt-4 border-t border-[#13131f]">
                  <div className="flex flex-col gap-0.15">
                    <span className="font-display text-[2.2rem] font-normal text-[#c9a84c] leading-1">
                      {vessel.price}
                    </span>
                    <span className="font-label text-[0.55rem] font-medium tracking-[0.15em] text-[#6e6e7a] uppercase">
                      {vessel.priceNote}
                    </span>
                  </div>
                  <a
                    href={`tel:${vessel.phone}`}
                    className="font-label text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] pb-1.5 border-b border-[rgba(201,168,76,0.22)] transition-all duration-200 hover:text-[#dbbe68] hover:border-[#c9a84c] whitespace-nowrap"
                  >
                    Inquire &rarr;
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
