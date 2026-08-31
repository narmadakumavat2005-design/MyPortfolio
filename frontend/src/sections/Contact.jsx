import { useState } from "react";

function Contact() {
  
const [isSending, setIsSending] = useState(false);
const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  setIsSending(true);
  setStatus("");

  try {
    const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/+$/, "");
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message");
    }

    setStatus("Message sent successfully! 🎉");
    form.reset();
  } catch (error) {
    console.error("Contact form error:", error);
    setStatus(error.message || "Something went wrong. Please try again.");
  } finally {
    setIsSending(false);
  }
};
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 lg:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 text-center">
          <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-400">
            Contact Me
          </p>

          <h2 className="text-2xl min-[380px]:text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Have a project, opportunity or just want to say hello? Feel free
            to get in touch with me.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7 md:p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white">
              Get In Touch
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              I'm always open to discussing new projects, internship
              opportunities, collaborations and interesting ideas.
            </p>

            {/* Email */}
            <a
              href="mailto:narmadakumavat2005@gmail.com"
              className="group mt-8 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4 transition duration-300 hover:border-violet-400/30 hover:bg-white/10 min-w-0"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
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
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <p className="mt-1 text-xs min-[380px]:text-sm font-medium text-slate-200 transition group-hover:text-white sm:text-base break-all min-[400px]:break-normal">
                  narmadakumavat2005@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <div className="mt-4 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.6 3h2.2l1.5 4-1.9 1.6a15.7 15.7 0 006.9 6.9l1.6-1.9 4 1.5v2.2c0 1.1-.9 2-2 2C11.2 19.3 4.7 12.8 4.7 5c0-1.1.9-2 1.9-2z"
                  />
                </svg>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Phone
                </p>

                <p className="mt-1 text-sm font-medium text-slate-200 sm:text-base">
                  7621862460
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm font-medium text-slate-300">
                Find me online
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/narmadakumavat2005-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/narmada-kumavat-b4132a325/"
                 target="_blank"
                rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7 md:p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/40 focus:ring-1 focus:ring-violet-400/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-fuchsia-400/40 focus:ring-1 focus:ring-fuchsia-400/20"
                />
              </div>

              {/* Submit */}
              <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:scale-[1.02] hover:shadow-violet-500/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                 {isSending ? "Sending..." : "Send Message"}
              </button>
              {status && (
              <p className="mt-4 text-center text-sm text-slate-300">
              {status}
              </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;