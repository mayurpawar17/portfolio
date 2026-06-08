import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState("idle"); // idle, submitting, success, error

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mayurpawar4908@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormState("error");
      return;
    }

    setFormState("submitting");

    // Simulate form submit endpoint
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden px-6 lg:px-8">
      {/* Background Blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-primary dark:text-primary-foreground font-semibold tracking-wider uppercase text-sm bg-primary/5 dark:bg-primary/10 px-3 py-1.5 rounded-full">
            Contact Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 dark:text-zinc-50 mt-4">
            Get In Touch
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to talk about developer opportunities? Drop a line!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Column 1: Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-zinc-100">
                Let's discuss something great
              </h3>
              <p className="text-slate-500 dark:text-zinc-400 leading-relaxed font-sans text-sm sm:text-base">
                I am responsive to emails and professional platforms. Feel free to ask questions, discuss contract/freelance projects, or inquire about open engineering roles.
              </p>

              {/* Direct Email CTA Card */}
              <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md flex items-center justify-between shadow-sm gap-4">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 dark:bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                      Email address
                    </div>
                    <a
                      href="mailto:mayurpawar4908@gmail.com"
                      className="text-sm sm:text-base font-bold text-slate-700 dark:text-zinc-300 hover:text-primary transition-colors block truncate"
                    >
                      mayurpawar4908@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200 cursor-pointer transition-colors relative shrink-0"
                  title="Copy email to clipboard"
                  id="copy-email-btn"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Check className="w-4 h-4 text-success" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Copy className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            {/* Social Grid */}
            <div className="flex flex-col gap-4 border-t border-slate-200/60 dark:border-zinc-800/60 pt-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                Professional networks
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/mayurpawar17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-semibold text-sm transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mayurpawar17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-semibold text-sm transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/40 backdrop-blur-md shadow-sm h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center text-center gap-4 py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-success/15 text-success flex items-center justify-center animate-bounce-slow">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold font-display text-slate-800 dark:text-zinc-100">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-sm leading-relaxed">
                      Thank you for reaching out. I have received your email and will respond to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="mt-4 px-5 py-2.5 bg-slate-100 dark:bg-zinc-850 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                    noValidate
                  >
                    {/* Name & Email inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-slate-600 dark:text-zinc-400">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-slate-800 dark:text-zinc-100 text-sm focus:border-primary focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-slate-600 dark:text-zinc-400">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-slate-800 dark:text-zinc-100 text-sm focus:border-primary focus:outline-none transition-colors"
                          placeholder="johndoe@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-xs font-bold text-slate-600 dark:text-zinc-400">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-slate-800 dark:text-zinc-100 text-sm focus:border-primary focus:outline-none transition-colors"
                        placeholder="Project Collaboration"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-slate-600 dark:text-zinc-400">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-slate-800 dark:text-zinc-100 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      id="contact-submit-btn"
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-primary/20 disabled:opacity-75 cursor-pointer disabled:cursor-not-allowed text-sm mt-2"
                    >
                      {formState === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    {formState === "error" && (
                      <p className="text-xs text-error font-medium text-center">
                        Please fill in all required fields (*) before submitting.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
