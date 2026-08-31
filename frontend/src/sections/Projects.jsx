function Projects() {
  const projects = [
    {
      title: "HireHub",
      description:
        "A full-stack job platform where users can explore job opportunities, manage applications and interact with a secure backend powered by MongoDB.",
      tech: ["React", "Vite", "Tailwind CSS", "Express", "MongoDB", "JWT"],
      github:
        "https://github.com/narmadakumavat2005-design/Hire-hub",
      live:
        "https://hire-hubs.netlify.app/",
      featured: true,
    },

    {
      title: "Amazon Landing Page",
      description:
        "A responsive Amazon-inspired landing page built to practice modern layouts, styling and frontend development.",
      tech: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/narmadakumavat2005-design/Amazon-landing-page",
      live: "#",
      featured: false,
    },

    {
      title: "Weather App",
      description:
        "A weather application that uses an API to fetch and display weather information in a simple and responsive interface.",
      tech: ["JavaScript", "API", "CSS"],
      github:
        "https://github.com/narmadakumavat2005-design/Weather-app",
      live: "#",
      featured: false,
    },

    {
      title: "To-Do List",
      description:
        "A simple task management application for adding and managing daily tasks with an interactive user interface.",
      tech: ["JavaScript", "HTML", "CSS"],
      github:
        "https://github.com/narmadakumavat2005-design/To-do-list",
      live: "#",
      featured: false,
    },

    {
      title: "Quiz App",
      description:
        "An interactive quiz application focused on application logic, user interaction and dynamic content.",
      tech: ["JavaScript", "HTML", "CSS"],
      github:
        "https://github.com/narmadakumavat2005-design/Quiz-app",
      live: "#",
      featured: false,
    },

    {
      title: "Calculator",
      description:
        "A clean and responsive calculator application built to practice JavaScript logic and interactive UI development.",
      tech: ["JavaScript", "HTML", "CSS"],
      github:
        "https://github.com/narmadakumavat2005-design/Calculator",
      live: "#",
      featured: false,
    },

    {
      title: "Sample Portfolio",
      description:
        "A portfolio website project created to explore responsive layouts, modern UI design and frontend development.",
      tech: ["React", "JavaScript", "CSS"],
      github:
        "https://github.com/narmadakumavat2005-design/narmada-sample-portfolio",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 lg:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 text-center">
          <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-400">
            My Projects
          </p>

          <h2 className="text-2xl min-[380px]:text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Things I've{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Here are some of the projects I've built while learning and
            improving my frontend and full-stack development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/10 ${
                project.featured ? "lg:scale-[1.01]" : ""
              }`}
            >
              {/* Project Preview */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-500/20 opacity-80 transition duration-300 group-hover:scale-110" />

                <div className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm">
                    <span className="text-2xl font-bold text-white">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                    Project Preview
                  </p>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <span className="absolute right-4 top-4 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 backdrop-blur-sm">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-2 sm:gap-3 pt-6">
                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-white/10 bg-white/5 px-2.5 sm:px-4 py-2.5 text-center text-xs sm:text-sm font-semibold text-slate-200 transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                  >
                    GitHub
                  </a>

                  {/* Live Demo */}
                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-2.5 sm:px-4 py-2.5 text-center text-xs sm:text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition duration-300 hover:scale-105 hover:shadow-violet-500/30"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex-1 cursor-not-allowed rounded-full bg-gradient-to-r from-violet-500/40 to-cyan-500/40 px-2.5 sm:px-4 py-2.5 text-center text-xs sm:text-sm font-semibold text-slate-300">
                      Live Demo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/narmadakumavat2005-design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition duration-300 hover:border-violet-400/30 hover:bg-white/10 hover:text-white"
          >
            View More on GitHub

            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.93 10.93 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;