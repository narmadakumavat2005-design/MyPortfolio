function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 text-center">
          <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-2xl min-[380px]:text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Web Experiences
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
        </div>

        {/* About Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Hi, I'm Narmada Kumavat 
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              I'm a passionate MERN Stack Developer who enjoys creating
              modern, responsive and user-friendly web applications. I love
              turning ideas into clean and functional digital experiences.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              I work with technologies like React, Node.js, Express.js and
              MongoDB to build full-stack applications. I'm continuously
              improving my skills and learning new technologies through
              practical projects and real-world development.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              Currently, I'm working as a MERN Stack Developer Intern at{" "}
              <span className="font-medium text-slate-200">
                Gitakshmi Technology
              </span>
              , where I'm gaining valuable experience by working on a live
              project.
            </p>

            {/* Small Info */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                MERN Stack
              </span>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                Full Stack
              </span>

              <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-300">
                Problem Solver
              </span>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                  />
                </svg>
              </div>

              <h4 className="text-lg font-semibold text-white">
                Clean Code
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Writing maintainable, organized and reusable code with a focus
                on quality.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l3 3-3 3M13 15h3"
                  />
                </svg>
              </div>

              <h4 className="text-lg font-semibold text-white">
                Full Stack
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Building complete web applications using modern frontend and
                backend technologies.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-400">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3l2.8 5.7L21 9.6l-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3z"
                  />
                </svg>
              </div>

              <h4 className="text-lg font-semibold text-white">
                User Focused
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Creating responsive interfaces that are simple, intuitive and
                enjoyable to use.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18M3 12h18"
                  />
                </svg>
              </div>

              <h4 className="text-lg font-semibold text-white">
                Always Learning
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Continuously learning new technologies and improving my
                development skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;