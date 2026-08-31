function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Building responsive and interactive user interfaces.",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
      color: "violet",
    },
    {
      title: "Backend",
      description: "Developing server-side applications and REST APIs.",
      skills: ["Node.js", "Express.js", "REST API"],
      color: "cyan",
    },
    {
      title: "Database",
      description: "Working with databases and managing application data.",
      skills: ["MongoDB", "Mongoose"],
      color: "fuchsia",
    },
    {
      title: "Tools & Development",
      description: "Using modern tools for development and API testing.",
      skills: ["Git", "GitHub", "Postman", "npm", "VS Code"],
      color: "violet",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 sm:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I use modern technologies and development tools to build
            responsive, scalable and user-friendly web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>
                </div>

                {/* Icon */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    category.color === "cyan"
                      ? "bg-cyan-500/10 text-cyan-400"
                      : category.color === "fuchsia"
                        ? "bg-fuchsia-500/10 text-fuchsia-400"
                        : "bg-violet-500/10 text-violet-400"
                  }`}
                >
                  {category.title === "Frontend" && (
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
                        d="M4 5h16v14H4z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 9l3 3-3 3M13 15h3"
                      />
                    </svg>
                  )}

                  {category.title === "Backend" && (
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <ellipse cx="12" cy="5" rx="7" ry="3" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"
                      />
                    </svg>
                  )}

                  {category.title === "Database" && (
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <ellipse cx="12" cy="5" rx="7" ry="3" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"
                      />
                    </svg>
                  )}

                  {category.title === "Tools & Development" && (
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
                        d="M14.7 6.3a4 4 0 015.3 5.3l-7.1 7.1a2 2 0 01-2.8 0l-.8-.8a2 2 0 010-2.8l7.1-7.1"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.3 17.7L6 21H3v-3l3.3-3.3"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/5 to-cyan-500/10 p-6 text-center backdrop-blur-sm">
          <p className="text-sm text-slate-400 sm:text-base">
            Always learning, experimenting and improving my development
            skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;