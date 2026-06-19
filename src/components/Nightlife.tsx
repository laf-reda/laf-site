import { useInView } from "../hooks/useInView";

const services = [
  {
    num: "01",
    eyebrow: "Nightclub · VIP",
    title: "Private Table Reservations",
    desc: "First-access VIP tables at the world's most sought-after clubs. Bottle service, private booths, and no queues — ever.",
    locs: "Ibiza · Monaco · Dubai · Mykonos · Miami",
  },
  {
    num: "02",
    eyebrow: "Talent · Performance",
    title: "Private Artist & DJ Bookings",
    desc: "Commission world-class DJ sets and live performances for private events — on your yacht, villa, or venue of choice.",
    locs: "A-List DJs · Live Acts · Residencies",
  },
  {
    num: "03",
    eyebrow: "Venue · Exclusive",
    title: "Private Venue Hire & Events",
    desc: "Entire venue exclusivity — rooftop terraces, waterfront clubs, and underground speakeasies hired for your private night.",
    locs: "Full Buyout · Bespoke Décor · Custom Menu",
  },
  {
    num: "04",
    eyebrow: "Full Package · Curated",
    title: "Bespoke Entertainment Nights",
    desc: "From concept to execution — Reda's team builds your perfect evening from scratch. Yacht, venue, artist, dining, and afterparty all coordinated.",
    locs: "Fully Managed · White Glove · Any Destination",
  },
];

export function Nightlife() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);
  const { ref: gridRef, inView: gridInView } = useInView(0.1);

  return (
    <section id="nightlife" className="section section--alt">
      <div className="container">
        <div
          className="mb-12 md:mb-16"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <p className={`eyebrow reveal${headerInView ? " in-view" : ""}`}>
            After Dark
          </p>
          <h2
            className={`section-title reveal reveal-delay-1${headerInView ? " in-view" : ""}`}
          >
            Nightlife &amp; <em>Entertainment</em>
          </h2>
          <p
            className={`section-subtitle reveal reveal-delay-2${headerInView ? " in-view" : ""}`}
          >
            Access to the most exclusive venues and experiences on the planet —
            arranged with Reda's personal network and deep industry
            relationships.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10"
          ref={gridRef as React.RefObject<HTMLDivElement>}
        >
          {services.map((service, i) => (
            <div
              key={service.num}
              className={`nightlife-service reveal reveal-delay-${i as 0 | 1 | 2 | 3}${gridInView ? " in-view" : ""}`}
            >
              <span className="nightlife-service__num">{service.num}</span>
              <p className="nightlife-service__eyebrow">{service.eyebrow}</p>
              <h3 className="nightlife-service__title">{service.title}</h3>
              <p className="nightlife-service__desc">{service.desc}</p>
              <p className="nightlife-service__locs">{service.locs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
