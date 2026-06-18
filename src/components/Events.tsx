import { useInView } from '../hooks/useInView'

interface Event {
  day: string
  month: string
  name: string
  location: string
  time: string
  desc: string
  status: 'fast' | 'available' | 'sold'
  spots: string
}

const events: Event[] = [
  {
    day: '19',
    month: 'Jul',
    name: 'Solstice at Sea',
    location: 'Monaco Harbour',
    time: '8pm – 3am',
    desc: 'Open Bar · DJ TBA · Dress Code: White',
    status: 'fast',
    spots: '34 spots remaining',
  },
  {
    day: '02',
    month: 'Aug',
    name: 'Golden Hour Cruise',
    location: 'Ibiza South Bay',
    time: '6pm – midnight',
    desc: 'Champagne Reception · Sunset DJ Set',
    status: 'available',
    spots: '80 spots remaining',
  },
  {
    day: '16',
    month: 'Aug',
    name: 'Midnight Rendezvous',
    location: 'Côte d\'Azur',
    time: '10pm – 4am',
    desc: 'Black Tie · Curated 120-Person List',
    status: 'sold',
    spots: 'Waitlist only',
  },
  {
    day: '06',
    month: 'Sep',
    name: 'Autumn Gala',
    location: 'Amalfi Coast',
    time: '7pm – 2am',
    desc: 'Seated Dinner · Live Jazz · Wine Pairing',
    status: 'available',
    spots: '110 spots remaining',
  },
]

const statusLabel: Record<Event['status'], string> = {
  fast:      'Selling Fast',
  available: 'Available',
  sold:      'Sold Out',
}

const statusClass: Record<Event['status'], string> = {
  fast:      'event-status--fast',
  available: 'event-status--available',
  sold:      'event-status--sold',
}

export function Events() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2)
  const { ref: listRef,   inView: listInView }   = useInView(0.1)

  return (
    <section id="events" className="section section--surface">
      <div className="container">
        <div ref={headerRef as React.RefObject<HTMLDivElement>}>
          <p className={`eyebrow reveal${headerInView ? ' in-view' : ''}`}>
            Invitation Only
          </p>
          <h2 className={`section-title reveal reveal-delay-1${headerInView ? ' in-view' : ''}`}>
            Live Boat <em>Party Events</em>
          </h2>
          <p className={`section-subtitle reveal reveal-delay-2${headerInView ? ' in-view' : ''}`}>
            Curated guest lists, world-class DJs, open bar, and sunset views.
            Every event is strictly vetted — contact Reda directly to secure your spot.
          </p>
        </div>

        <div
          className="events__list"
          ref={listRef as React.RefObject<HTMLDivElement>}
        >
          {events.map((event, i) => (
            <article
              key={event.name}
              className={`event-item reveal reveal-delay-${i as 0|1|2|3}${listInView ? ' in-view' : ''}`}
            >
              {/* Date */}
              <div className="event-item__date">
                <span className="event-item__day">{event.day}</span>
                <span className="event-item__month">{event.month}</span>
              </div>

              {/* Info */}
              <div className="event-item__info">
                <h3 className="event-item__name">{event.name}</h3>
                <div className="event-item__meta">
                  <span>{event.location}</span>
                  <span>{event.time}</span>
                </div>
                <p className="event-item__desc">{event.desc}</p>
              </div>

              {/* Action */}
              <div className="event-item__action">
                <span className={`event-status ${statusClass[event.status]}`}>
                  {statusLabel[event.status]}
                </span>
                <span className="event-spots">{event.spots}</span>
                {event.status !== 'sold' ? (
                  <a href="tel:7813633462" className="btn btn--outline" style={{ fontSize: '0.58rem', padding: '0.65rem 1.2rem' }}>
                    Reserve
                  </a>
                ) : (
                  <a href="tel:7813633462" className="btn btn--text" style={{ fontSize: '0.58rem' }}>
                    Join Waitlist
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
