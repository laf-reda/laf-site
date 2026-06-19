import { useInView } from "../hooks/useInView";
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

export function Contact() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);
  const { ref: formRef } = useInView(0.1);

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Header */}
        <div
          className="contact__header"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <p className={`eyebrow reveal${headerInView ? " in-view" : ""}`}>
            Get In Touch
          </p>

          <h2
            className={`section-title reveal reveal-delay-1${headerInView ? " in-view" : ""}`}
          >
            Private <em>Enquiries</em>
          </h2>

          <p
            className={`section-subtitle reveal reveal-delay-2${headerInView ? " in-view" : ""}`}
          >
            One call books everything. Yachts, jets, events, entertainment —
            Reda handles it all personally. Available 24/7.
          </p>
        </div>

        {/* Main Content */}
        <div ref={formRef as React.RefObject<HTMLDivElement>}>
          <div className="contact__grid">
            {/* Left: Contact Info */}
            <div className="contact__info">
              {/* Contact Boxes */}
              <div className="contact__social">
                <div className="contact__social-row">
                  {/* Phone */}
                  <a
                    href="tel:7813633462"
                    className="contact__social-item"
                    data-tooltip="Phone: 781-363-3462"
                  >
                    <FaPhone className="contact__social-icon" />
                    <span className="contact__social-value">PHONE</span>
                    <span className="contact__social-tooltip" role="tooltip">
                      781-363-3462
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:laftihreda7@gmail.com"
                    className="contact__social-item"
                    data-tooltip="Email: laftihreda7@gmail.com"
                  >
                    <FaEnvelope className="contact__social-icon" />
                    <span className="contact__social-value">Email</span>
                    <span className="contact__social-tooltip" role="tooltip">
                      laftihreda7@gmail.com
                    </span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/17813633462"
                    className="contact__social-item"
                    data-tooltip="WhatsApp: Private — Enquire Below"
                  >
                    <FaWhatsapp className="contact__social-icon" />
                    <span className="contact__social-value">WhatsApp</span>
                    <span className="contact__social-tooltip" role="tooltip">
                      Private — Enquire Below
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/l.a.f_725"
                    className="contact__social-item"
                    data-tooltip="Instagram: @l.a.f_725"
                  >
                    <FaInstagram className="contact__social-icon" />
                    <span className="contact__social-value">Instagram</span>
                    <span className="contact__social-tooltip" role="tooltip">
                      @l.a.f_725
                    </span>
                  </a>
                </div>

                {/* Response Time */}
                <div className="contact__response-item">
                  <svg
                    className="contact__response-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className="contact__response-label">Response Time</span>
                  <span className="contact__response-value">
                    Within 4 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact__form">
              <form
                className="contact__form-inner"
                action="https://formsubmit.co/laftihreda7@gmail.com"
                method="post"
              >
                {/* Hidden fields for form handling */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Private Enquiry from Website"
                />
                <input type="hidden" name="_template" value="table" />
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Your first name"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone" className="form-label">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="+1 555 000 0000"
                    />
                  </div>
                </div>

                <div className="form-field full">
                  <label htmlFor="service" className="form-label">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="form-input"
                  >
                    <option value="">Select a service...</option>
                    <option value="yacht-charter">Yacht Charter</option>
                    <option value="private-jet">Private Jet</option>
                    <option value="yacht-stay">Yacht Stay</option>
                    <option value="boat-party">Boat Party</option>
                    <option value="nightlife">Nightlife</option>
                    <option value="event">Exclusive Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-field full">
                  <label htmlFor="requirements" className="form-label">
                    Your Requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    required
                    rows={4}
                    className="form-input form-textarea"
                    placeholder="Tell Reda what you have in mind — destination, dates, group size, and any special requests..."
                  />
                </div>

                <button type="submit" className="btn btn--gold btn--full">
                  Send Private Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="contact__footer">
          <div className="container">
            <div className="footer-grid">
              {/* Brand */}
              <div className="footer-brand">
                <h3 className="footer-brand__name">Reda Laftih</h3>
                <p className="footer-brand__empire">L.A.F Empire</p>
                <p className="footer-brand__tagline">
                  The Loyalty &amp; Family Group
                </p>
                <p className="footer-brand__desc">
                  Private Broker · Ultra-High Net Worth Experiences
                </p>
              </div>

              {/* Services */}
              <div className="footer-links">
                <h4 className="footer-links__eyebrow">Services</h4>
                <ul className="footer-links__list">
                  <li>
                    <a href="#fleet">Yacht Charters</a>
                  </li>
                  <li>
                    <a href="#fleet">Yacht Stays</a>
                  </li>
                  <li>
                    <a href="#jet">Boat Parties</a>
                  </li>
                  <li>
                    <a href="#nightlife">Nightlife</a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="footer-links">
                <h4 className="footer-links__eyebrow">Company</h4>
                <ul className="footer-links__list">
                  <li>
                    <a href="#about">About Reda</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="#privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#terms">Terms</a>
                  </li>
                </ul>
              </div>

              {/* Destinations */}
              <div className="footer-links">
                <h4 className="footer-links__eyebrow">Destinations</h4>
                <ul className="footer-links__list">
                  <li>
                    <a href="#destinations">Mediterranean</a>
                  </li>
                  <li>
                    <a href="#destinations">Caribbean</a>
                  </li>
                  <li>
                    <a href="#destinations">French Riviera</a>
                  </li>
                  <li>
                    <a href="#destinations">Middle East</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
              <p>
                &copy; 2026 Reda Laftih · L.A.F Empire · All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
