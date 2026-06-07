"use client";

import { useState } from "react";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
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

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (error) {
      setStatus("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-[#081828] py-24 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-14 h-[2px] bg-[#ff7a59]" />
          <span className="text-slate-300 text-sm uppercase tracking-widest">
            Contacts
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Have a project?
              <br />
              Let's talk!
            </h2>

            <p className="mt-6 text-slate-400 leading-8 max-w-md">
              Looking for a Frontend Developer to build modern, responsive, and
              user-friendly web applications? Send me a message and I'll get
              back to you soon.
            </p>
          </div>

          {/* Right Side */}
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Name */}
            <div>
              <label className="block text-slate-300 mb-3">Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="
                  w-full
                  bg-transparent
                  border-b
                  border-slate-500
                  pb-3
                  text-white
                  placeholder:text-slate-500
                  outline-none
                  focus:border-[#ff7a59]
                  transition
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-300 mb-3">Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="
                  w-full
                  bg-transparent
                  border-b
                  border-slate-500
                  pb-3
                  text-white
                  placeholder:text-slate-500
                  outline-none
                  focus:border-[#ff7a59]
                  transition
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-slate-300 mb-3">Message</label>

              <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Tell me about your project..."
                className="
                  w-full
                  resize-none
                  bg-transparent
                  border-b
                  border-slate-500
                  pb-3
                  text-white
                  placeholder:text-slate-500
                  outline-none
                  focus:border-[#ff7a59]
                  transition
                "
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                bg-[#ff7a59]
                text-white
                px-8
                py-4
                font-medium
                transition-all
                duration-300
                hover:bg-[#ff6a45]
                hover:-translate-y-1
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message */}
            {status && <p className="text-sm text-slate-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
