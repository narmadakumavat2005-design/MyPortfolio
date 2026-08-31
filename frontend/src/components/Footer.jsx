function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-6 py-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-40 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Narmada Kumavat...
              </span>
            </a>

            <p className="mt-2 text-sm text-slate-500">
              MERN Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="#home"
              className="text-sm text-slate-400 transition duration-300 hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-slate-400 transition duration-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-slate-400 transition duration-300 hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-400 transition duration-300 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-400 transition duration-300 hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/narmadakumavat2005-design"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.93 10.93 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>

            <a
              href="mailto:narmadakumavat2005@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7l9 6 9-6"
                />
              </svg>
            </a>

            <a
         href="https://www.linkedin.com/in/narmada-kumavat-b4132a325/"
         target="_blank"
         rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition duration-300 hover:border-fuchsia-400/30 hover:bg-fuchsia-500/10 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27zM5.34 7.41a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V8.98h3.56v11.47zM22.23 0H1.77C.79 0 .01.77.01 1.72v20.56C.01 23.23.79 24 1.77 24h20.46c.98 0 1.76-.77 1.76-1.72V1.72C23.99.77 23.21 0 22.23 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {currentYear} Narmada Kumavat. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with{" "}
            <span className="text-violet-400">
              React, Node.js
            </span>{" "}
            &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;