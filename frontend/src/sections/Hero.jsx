import mu from "../assets/meeee.jpeg";
function Hero() {

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* Hero Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            MERN Stack Developer    
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-4xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Narmada Kumavat
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern, responsive and scalable web applications
            using the MERN stack, with a focus on clean code and
            great user experiences.
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            MERN Stack Developer Intern at{" "}
            <span className="font-medium text-slate-300">
              Gitakshmi Technology
            </span>{" "}
            · Working on a live project
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-7 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:scale-105 hover:shadow-violet-500/40"
            >
              View My Work
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-center text-sm font-semibold text-slate-200 backdrop-blur-sm transition duration-300 hover:border-violet-400/40 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
            <span>React</span>
            <span className="text-violet-500">•</span>
            <span>Node.js</span>
            <span className="text-violet-500">•</span>
            <span>Express.js</span>
            <span className="text-violet-500">•</span>
            <span>MongoDB</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-500/30 blur-3xl" />

            {/* Image Container */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 bg-white/5 p-2 shadow-2xl shadow-violet-950/40 sm:h-80 sm:w-80">
              <div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
                  <img
                   src={mu}
                  alt="Narmada Kumavat"
                  className="h-full w-full  "
                  />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;