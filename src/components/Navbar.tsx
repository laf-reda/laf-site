import { useState, useEffect } from "react";

const navLinks = [
  { label: "Fleet", href: "#fleet" },
  { label: "Destinations", href: "#destinations" },
  { label: "Events", href: "#events" },
  { label: "Nightlife", href: "#nightlife" },
  { label: "Jet Charters", href: "#jet" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 px-6 flex items-center justify-between ${scrolled ? "bg-[#050508]/92 backdrop-blur-md py-4 border-b border-[rgba(201,168,76,0.22)]" : "py-6"}`}
      >
        <a
          href="#hero"
          className="flex flex-col items-start"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        >
          <span className="font-label text-[0.9rem] font-semibold tracking-[0.18em] text-[#f0ece4] uppercase">
            Reda Laftih
          </span>
          <span className="font-label text-[0.55rem] font-medium tracking-[0.32em] text-[#c9a84c] uppercase">
            L.A.F Empire · The Loyalty & Family Group
          </span>
        </a>

        <ul className="flex items-center gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-label text-[0.65rem] font-medium tracking-[0.22em] uppercase text-[#6e6e7a] relative transition-colors duration-200"
              >
                {link.label}
                <span className="absolute bottom-[-3px] left-0 right-0 h-[1px] bg-[#c9a84c] transform scale-x-0 transition-transform duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:7813633462"
          className="font-label text-[0.62rem] font-semibold tracking-[0.22em] uppercase bg-[#c9a84c] text-[#050508] px-6 py-[0.65rem] transition-colors duration-200 whitespace-nowrap hover:bg-[#dbbe68]"
        >
          Call Reda
        </a>

        <button
          className={`hidden md:flex flex-col gap-[5px] p-1 cursor-pointer ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="w-[22px] h-[1px] bg-[#f0ece4] transition-all duration-300" />
          <span className="w-[22px] h-[1px] bg-[#f0ece4] transition-all duration-300" />
          <span className="w-[22px] h-[1px] bg-[#f0ece4] transition-all duration-300" />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 bg-[#050508] z-40 flex flex-col items-center justify-center gap-10 opacity-0 pointer-events-none transition-opacity duration-300 ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            className="font-display text-[2.5rem] font-light text-[#f0ece4] tracking-[-0.02em] transition-colors duration-200 hover:text-[#c9a84c]"
          >
            {link.label}
          </a>
        ))}
        <div className="mt-4 text-center">
          <a
            href="tel:7813633462"
            className="font-label text-[1rem] font-semibold tracking-[0.25em] uppercase text-[#c9a84c]"
          >
            781-363-3462
          </a>
        </div>
      </div>
    </>
  );
}
