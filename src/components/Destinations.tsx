import { useState } from "react";
import { useInView } from "../hooks/useInView";
import calais1 from "../assets/calais-1.jpg";
import calais2 from "../assets/calais-2.jpg";
import trilogy1 from "../assets/trilogy-1.jpg";
import trilogy2 from "../assets/trilogy-2.jpg";
import trilogy3 from "../assets/trilogy-3.jpg";
import trilogy4 from "../assets/trilogy-4.jpg";
import trilogy5 from "../assets/trilogy-5.jpg";
import champagneLady1 from "../assets/champagne-lady-1.jpg";
import champagneLady2 from "../assets/champagne-lady-2.jpg";
import champagneLady3 from "../assets/champagne-lady-3.jpg";

// Vessel data
interface Vessel {
  id: string;
  name: string;
  model: string;
  type: string;
  badge: string;
  images: string[];
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

type TabType = "weekend" | "week" | "extended" | "corporate";

export function Destinations() {
  const [activeTab, setActiveTab] = useState<TabType>("weekend");
  const { ref: headerRef, inView: headerInView } = useInView(0.2);
  const { ref: formRef, inView: bodyInView } = useInView(0.15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handled by form action
  };

  const getTabLabel = (tab: TabType) => {
    switch (tab) {
      case "weekend":
        return "Weekend Getaway";
      case "week":
        return "Week Vacation";
      case "extended":
        return "Extended Voyage";
      case "corporate":
        return "Corporate Retreat";
    }
  };

  const getTabDescription = (tab: TabType) => {
    switch (tab) {
      case "weekend":
        return "Perfect for 2-3 day escapes along the coast";
      case "week":
        return "Full week-long cruises with multiple stops";
      case "extended":
        return "Multi-week voyages exploring distant waters";
      case "corporate":
        return "Executive retreats and team-building events";
    }
  };

  return (
    <section id="destinations" className="section">
      <div className="container">
        {/* Header */}
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

        {/* Main Content */}
        <div ref={formRef as React.RefObject<HTMLDivElement>}>
          {/* Popular Destinations Section */}
          <div className="destinations__destinations">
            <p className="destinations__eyebrow">Popular Destinations</p>

            <div className="destinations__tags">
              {destinations.map((dest) => (
                <button
                  key={dest}
                  type="button"
                  className="destination-tag"
                  aria-label={`Select ${dest} as destination`}
                >
                  {dest}
                </button>
              ))}
              <button
                type="button"
                className="destination-tag custom"
                aria-label="Select custom route"
              >
                Custom Route ✦
              </button>
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

          {/* Booking Form Section */}
          <div className="destinations__form">
            <form
              className="destinations__form-inner"
              onSubmit={handleSubmit}
              action="https://formsubmit.co/laftihreda7@gmail.com"
              method="post"
            >
              {/* Hidden fields for form handling */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Vacation Enquiry from Website"
              />
              <input type="hidden" name="_template" value="table" />

              {/* Tabs */}
              <div className="destinations__tabs">
                {(
                  ["weekend", "week", "extended", "corporate"] as TabType[]
                ).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={`destinations__tab${
                      activeTab === tab ? " destinations__tab--active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                    aria-selected={activeTab === tab}
                    role="tab"
                  >
                    {getTabLabel(tab)}
                  </button>
                ))}
              </div>

              <p className="destinations__tab-description">
                {getTabDescription(activeTab)}
              </p>

              {/* Form Fields */}
              <div className="form-grid">
                {/* Select Vessel */}
                <div className="form-field">
                  <label htmlFor="vessel" className="form-label">
                    Select Vessel
                  </label>
                  <select
                    id="vessel"
                    name="vessel"
                    required
                    className="form-input"
                  >
                    <option value="">Choose your vessel...</option>
                    {vessels.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} — {v.model}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Trip Type */}
                <div className="form-field">
                  <label htmlFor="tripType" className="form-label">
                    Trip Type
                  </label>
                  <select
                    id="tripType"
                    name="tripType"
                    required
                    className="form-input"
                  >
                    <option value="">Select trip type...</option>
                    <option value="day">Day Charter</option>
                    <option value="overnight">Overnight Charter</option>
                    <option value="multi-stop">Multi-Stop Voyage</option>
                    <option value="custom">Custom Itinerary</option>
                  </select>
                </div>

                {/* Departure Date */}
                <div className="form-field">
                  <label htmlFor="departureDate" className="form-label">
                    Departure Date
                  </label>
                  <input
                    id="departureDate"
                    name="departureDate"
                    type="date"
                    required
                    className="form-input"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Return Date */}
                <div className="form-field">
                  <label htmlFor="returnDate" className="form-label">
                    Return Date
                  </label>
                  <input
                    id="returnDate"
                    name="returnDate"
                    type="date"
                    required
                    className="form-input"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Number of Guests */}
                <div className="form-field">
                  <label htmlFor="guests" className="form-label">
                    Number of Guests
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="150"
                    required
                    className="form-input"
                    placeholder="e.g., 6"
                  />
                </div>

                {/* Destination / Route */}
                <div className="form-field">
                  <label htmlFor="route" className="form-label">
                    Destination / Route
                  </label>
                  <input
                    id="route"
                    name="route"
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g., Cape Cod → Martha's Vineyard → Nantucket"
                  />
                </div>

                {/* Add-On Services */}
                <div className="form-field full">
                  <label htmlFor="addOns" className="form-label">
                    Add-On Services
                  </label>
                  <textarea
                    id="addOns"
                    name="addOns"
                    rows={3}
                    className="form-input form-textarea"
                    placeholder="Catering, entertainment, special amenities, etc."
                  />
                </div>

                {/* Special Requests */}
                <div className="form-field full">
                  <label htmlFor="specialRequests" className="form-label">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={3}
                    className="form-input form-textarea"
                    placeholder="Dietary requirements, celebration details, preferred ports of call, specific amenities..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn--gold btn--full">
                Send Vacation Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
