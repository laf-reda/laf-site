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
          className="grid grid-cols-2 gap-8 items-end mb-[clamp(3rem,6vw,5rem)]"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <div>
            <p className={`eyebrow reveal${headerInView ? " in-view" : ""}`}>
              Extended Voyages
            </p>
            <h2
              className={`font-display font-light text-[#f0ece4] mb-4 reveal reveal-delay-1${headerInView ? " in-view" : ""}`}
            >
              New England <em className="italic font-light">Coastline</em>
            </h2>
          </div>
          <p
            className={`font-body text-[clamp(0.95rem,1.5vw,1.1rem)] text-[#6e6e7a] font-light leading-8 max-w-[540px] reveal reveal-delay-2${headerInView ? " in-view" : ""}`}
          >
            Explore the coastline on your terms — weekend escapes, week-long
            cruises, or a custom multi-stop voyage. Every itinerary provisioned
            and arranged by Reda.
          </p>
        </div>

        {/* Main Content */}
        <div ref={formRef as React.RefObject<HTMLDivElement>}>
          {/* Popular Destinations Section */}
          <div>
            <p className="eyebrow">Popular Destinations</p>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
              {destinations.map((dest) => (
                <button
                  key={dest}
                  type="button"
                  className="bg-[#0f0f1a] border border-[rgba(201,168,76,0.22)] px-5 py-3.5 font-label text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#6e6e7a] transition-all duration-250 flex items-center gap-1 hover:bg-[#13131f] hover:border-[#c9a84c] hover:text-[#f0ece4]"
                  aria-label={`Select ${dest} as destination`}
                >
                  <span className="block w-1 h-1 bg-[#c9a84c] rounded-full mr-2"></span>
                  {dest}
                </button>
              ))}
              <button
                type="button"
                className="bg-[#0f0f1a] border border-dashed border-[#c9a84c] px-5 py-3.5 font-label text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] transition-all duration-250 flex items-center gap-1 hover:bg-[#c9a84c] hover:text-[#050508]"
                aria-label="Select custom route"
              >
                Custom Route ✦
              </button>
            </div>

            <div
              className={`bg-[#0f0f1a] border border-[rgba(201,168,76,0.22)] border-l-3 border-l-[#c9a84c] px-8 py-6 flex flex-col gap-1 max-w-[500px] reveal reveal-delay-1${bodyInView ? " in-view" : ""}`}
            >
              <span className="font-label text-[0.58rem] font-semibold tracking-[0.3em] text-[#c9a84c] uppercase">
                Default Departure
              </span>
              <span className="font-display text-[1.8rem] font-normal text-[#f0ece4] leading-1">
                Marina Bay Harbor — Quincy, MA
              </span>
              <span className="font-body text-[1.05rem] text-[#6e6e7a] font-light leading-6">
                Dock R&nbsp;·&nbsp; Ample parking at Squantum Park
                lot&nbsp;·&nbsp; Boston &amp; Encore Casino pickups available on
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
              <div className="grid grid-cols-1 gap-6">
                {/* Select Vessel */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="vessel"
                    className="font-label text-[0.58rem] font-semibold tracking-[0.3em] text-[#c9a84c] uppercase"
                  >
                    Select Vessel
                  </label>
                  <select
                    id="vessel"
                    name="vessel"
                    required
                    className="bg-[#0f0f1a] border border-[rgba(201,168,76,0.22)] px-5 py-4 font-body text-[1.05rem] text-[#f0ece4] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(201,168,76,0.4)] focus:border-[#c9a84c] transition-all duration-200"
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
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="tripType"
                    className="font-label text-[0.58rem] font-semibold tracking-[0.3em] text-[#c9a84c] uppercase"
                  >
                    Trip Type
                  </label>
                  <select
                    id="tripType"
                    name="tripType"
                    required
                    className="bg-[#0f0f1a] border border-[rgba(201,168,76,0.22)] px-5 py-4 font-body text-[1.05rem] text-[#f0ece4] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(201,168,76,0.4)] focus:border-[#c9a84c] transition-all duration-200"
                  >
                    <option value="">Select trip type...</option>
                    <option value="day">Day Charter</option>
                    <option value="overnight">Overnight Charter</option>
                    <option value="multi-stop">Multi-Stop Voyage</option>
                    <option value="custom">Custom Itinerary</option>
                  </select>
                </div>

                {/* Departure Date */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="departureDate"
                    className="font-label text-[0.58rem] font-semibold tracking-[0.3em] text-[#c9a84c] uppercase"
                  >
                    Departure Date
                  </label>
                  <input
                    id="departureDate"
                    name="departureDate"
                    type="date"
                    required
                    className="bg-[#0f0f1a] border border-[rgba(201,168,76,0.22)] px-5 py-4 font-body text-[1.05rem] text-[#f0ece4] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(201,168,76,0.4)] focus:border-[#c9a84c] transition-all duration-200"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Return Date (only for extended/corporate tabs) */}
                {(activeTab === "extended" || activeTab === "corporate") && (
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="returnDate"
                      className="font-label text-[0.58rem] font-semibold tracking-[0.3em] text-[#c9a84c] uppercase"
                    >
                      Return Date
                    </label>
                    <input
                      id="returnDate"
                      name="returnDate"
                      type="date"
                      className="bg-[#0f0f1a] border border-[rgba(201,168,76,0.22)] px-5 py-4 font-body text-[1.05rem] text-[#f0ece4] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(201,168,76,0.4)] focus:border-[#c9a84c] transition-all duration-200"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                )}

                {/* Number of Guests */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="guests"
                    className="font-label text-[0.58rem] font-semibold tracking-[0.3em] text-[#c9a84c] uppercase"
                  >
                    Number of Guests
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="150"
                    required
                    className="bg-[#0f0f1a] border border-[rgba(201,168,76,0.22)] px-5 py-4 font-body text-[1.05rem] text-[#f0ece4] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(201,168,76,0.4)] focus:border-[#c9a84c] transition-all duration-200"
                    placeholder="e.g., 6"
                  />
                </div>

                {/* Destination / Route */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="route"
                    className="font-label text-[0.58rem] font-semibold tracking-[0.3em] text-[#c9a84c] uppercase"
                  >
                    Destination / Route
                  </label>
                  <input
                    id="route"
                    name="route"
                    type="text"
                    required
                    className="bg-[#0f0f1a] border border-[rgba(201,168,76,0.22)] px-5 py-4 font-body text-[1.05rem] text-[#f0ece4] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(201,168,76,0.4)] focus:border-[#c9a84c] transition-all duration-200"
                    placeholder="e.g., Cape Cod → Martha's Vineyard → Nantucket"
                  />
                </div>

                {/* Add-On Services */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="addOns"
                    className="font-label text-[0.58rem] font-semibold tracking-[0.3em] text-[#c9a84c] uppercase"
                  >
                    Add-On Services
                  </label>
                  <textarea
                    id="addOns"
                    name="addOns"
                    rows={3}
                    className="bg-[#0f0f1a] border border-[rgba(201,168,76,0.22)] px-5 py-4 font-body text-[1.05rem] text-[#f0ece4] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(201,168,76,0.4)] focus:border-[#c9a84c] transition-all duration-200 resize-none"
                    placeholder="Catering, entertainment, special amenities, etc."
                  />
                </div>

                {/* Special Requests */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="specialRequests"
                    className="font-label text-[0.58rem] font-semibold tracking-[0.3em] text-[#c9a84c] uppercase"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={3}
                    className="bg-[#0f0f1a] border border-[rgba(201,168,76,0.22)] px-5 py-4 font-body text-[1.05rem] text-[#f0ece4] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(201,168,76,0.4)] focus:border-[#c9a84c] transition-all duration-200 resize-none"
                    placeholder="Dietary requirements, celebration details, preferred ports of call, specific amenities..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn--gold btn--full">
                Send Vacation Enquiry — L.A.F Empire →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
