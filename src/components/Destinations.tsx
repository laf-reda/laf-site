import { useInView } from "../hooks/useInView";

const destinations = [
  "Cape Cod",
  "Martha's Vineyard",
  "Nantucket",
  "Block Island",
  "Provincetown",
  "Newburyport",
  "Portsmouth, NH",
  "Kennebunkport, ME",
  "Portland, ME",
  "Bar Harbor, ME",
];

export function Destinations() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);
  const { ref: bodyRef, inView: bodyInView } = useInView(0.15);

  return (
    <section id="destinations" className="section">
      <div className="container">
        <div
          className="destinations__header"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <div>
            <p className={`eyebrow reveal${headerInView ? " in-view" : ""}`}>
              Extended Voyages
            </p>
            <h2
              className={`section-title reveal reveal-delay-1${headerInView ? " in-view" : ""}`}
            >
              New England <em>Coastline</em>
            </h2>
          </div>
          <p
            className={`section-subtitle reveal reveal-delay-2${headerInView ? " in-view" : ""}`}
          >
            Explore the coastline on your terms — weekend escapes, week-long
            cruises, or a custom multi-stop voyage. Every itinerary provisioned
            and arranged by Reda.
          </p>
        </div>

        <div ref={bodyRef as React.RefObject<HTMLDivElement>}>
          <div
            className={`destinations__grid reveal${bodyInView ? " in-view" : ""}`}
          >
            {destinations.map((dest) => (
              <div key={dest} className="destination-tag">
                {dest}
              </div>
            ))}
            <div className="destination-tag custom">Custom Route ✦</div>
          </div>

          <div
            className={`destinations__departure reveal reveal-delay-1${bodyInView ? " in-view" : ""}`}
          >
            <span className="destinations__departure-label">
              Default Departure
            </span>
            <span className="destinations__departure-name">
              Marina Bay Harbor — Quincy, MA
            </span>
            <span className="destinations__departure-detail">
              Dock R &nbsp;·&nbsp; Ample parking at Squantum Park lot
              &nbsp;·&nbsp; Boston &amp; Encore Casino pickups available on
              request
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
