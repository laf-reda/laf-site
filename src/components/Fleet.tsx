import { useInView } from '../hooks/useInView'

interface Vessel {
  id: string
  name: string
  model: string
  type: string
  badge: string
  img: string
  specs: { value: string; label: string }[]
  highlights: string[]
  price: string
  priceNote: string
  phone: string
}

const vessels: Vessel[] = [
  {
    id: 'calais',
    name: 'Calais',
    model: '100ft Jumbo Azimut',
    type: 'Motor Yacht · Caribbean & Beyond',
    badge: 'Day & Overnight',
    img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=900&q=80',
    specs: [
      { value: '100ft', label: 'Length' },
      { value: '12',    label: 'Guests' },
      { value: '4',     label: 'Suites' },
      { value: '5',     label: 'Baths' },
    ],
    highlights: [
      'Elegant Zuretti-designed interior with panoramic salon views',
      'Deck jacuzzi, expansive teak decks, dining & lounge areas',
      'Seamless indoor-outdoor living — fully equipped galley',
    ],
    price: '$2,900',
    priceNote: 'per charter · up to 12 guests',
    phone: '7813633462',
  },
  {
    id: 'trilogy',
    name: 'Trilogy',
    model: '103ft Broward',
    type: 'Motor Yacht · Ft. Lauderdale',
    badge: 'Day & Evening',
    img: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=900&q=80',
    specs: [
      { value: '103ft', label: 'Length' },
      { value: '12',    label: 'Guests' },
      { value: '4',     label: 'Baths' },
      { value: 'A/C',   label: 'Climate' },
    ],
    highlights: [
      'Modern upscale interior — climate-controlled cabin throughout',
      'Fully equipped galley kitchen — comfortable lounge & dining',
      'Jacuzzi, swim platform & panoramic waterfront views',
    ],
    price: '$1,800',
    priceNote: 'per charter · up to 12 guests',
    phone: '7813633462',
  },
  {
    id: 'champagne-lady',
    name: 'Champagne Lady',
    model: '80ft Party Yacht',
    type: 'Event Vessel · Up to 150 Guests',
    badge: 'Events & Parties',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
    specs: [
      { value: '80ft', label: 'Length' },
      { value: '150',  label: 'Guests' },
      { value: '2',    label: 'Baths' },
      { value: 'Full', label: 'Open Bar' },
    ],
    highlights: [
      'High-capacity vessel — built for large-scale events & celebrations',
      'Expansive open decks with dedicated dance floor & entertainment',
      'Professional crew & event support — perfect for corporate & private',
    ],
    price: '$1,500',
    priceNote: 'per charter · up to 150 guests',
    phone: '7813633462',
  },
]

export function Fleet() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2)
  const { ref: gridRef,   inView: gridInView }   = useInView(0.1)

  return (
    <section id="fleet" className="section section--alt">
      <div className="container">
        {/* Header */}
        <div
          className="fleet__header"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <p className={`eyebrow reveal${headerInView ? ' in-view' : ''}`}>Charter Fleet</p>
          <h2 className={`section-title reveal reveal-delay-1${headerInView ? ' in-view' : ''}`}>
            Hand-Selected <em>Superyachts</em>
          </h2>
          <p className={`section-subtitle reveal reveal-delay-2${headerInView ? ' in-view' : ''}`}>
            Every vessel is crewed, provisioned, and prepared to your exact specification.
            Departure from Marina Bay Harbor, Quincy MA — or arrange a custom departure directly with Reda.
          </p>
        </div>

        {/* Grid */}
        <div
          className="fleet__grid"
          ref={gridRef as React.RefObject<HTMLDivElement>}
        >
          {vessels.map((vessel, i) => (
            <article
              key={vessel.id}
              className={`vessel-card reveal reveal-delay-${i as 0 | 1 | 2 | 3}${gridInView ? ' in-view' : ''}`}
            >
              {/* Image */}
              <div className="vessel-card__img-wrap">
                <img
                  src={vessel.img}
                  alt={`${vessel.name} — ${vessel.model}`}
                  loading="lazy"
                />
                <span className="vessel-card__badge">{vessel.badge}</span>
              </div>

              {/* Body */}
              <div className="vessel-card__body">
                <div>
                  <h3 className="vessel-card__name">{vessel.name}</h3>
                  <p className="vessel-card__type">{vessel.model} &nbsp;·&nbsp; {vessel.type}</p>
                </div>

                {/* Specs */}
                <div className="vessel-card__specs">
                  {vessel.specs.map(spec => (
                    <div className="spec-item" key={spec.label}>
                      <span className="spec-item__value">{spec.value}</span>
                      <span className="spec-item__label">{spec.label}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="vessel-card__highlights">
                  {vessel.highlights.map(h => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                {/* Footer: price + CTA */}
                <div className="vessel-card__footer">
                  <div className="vessel-card__price-wrap">
                    <span className="vessel-card__price">{vessel.price}</span>
                    <span className="vessel-card__price-note">{vessel.priceNote}</span>
                  </div>
                  <a
                    href={`tel:${vessel.phone}`}
                    className="vessel-card__inquire"
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
  )
}
