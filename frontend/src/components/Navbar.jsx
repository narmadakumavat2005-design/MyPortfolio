import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 sm:px-5 shadow-2xl shadow-violet-950/20 backdrop-blur-xl">

        {/* Logo */}
        <a
          href="#home"
          className="group min-w-0 text-lg sm:text-xl font-bold tracking-tight"
        >
          <span className="truncate bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Narmada Kumavat
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-slate-950/90 p-3 shadow-2xl shadow-violet-950/20 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-violet-500/10 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;