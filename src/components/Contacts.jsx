export default function Contacts() {
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

            <button
              className="
                mt-10
                bg-[#ff7a59]
                text-white
                px-8
                py-4
                font-medium
                transition-all
                duration-300
                hover:bg-[#ff6a45]
                hover:-translate-y-1
              "
            >
              Submit
            </button>
          </div>

          {/* Right Side */}
          <form className="space-y-10">
            {/* Name */}
            <div>
              <label className="block text-slate-300 mb-3">Name</label>

              <input
                type="text"
                className="
                  w-full
                  bg-transparent
                  border-b
                  border-slate-500
                  pb-3
                  text-white
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
                className="
                  w-full
                  bg-transparent
                  border-b
                  border-slate-500
                  pb-3
                  text-white
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
                className="
                  w-full
                  resize-none
                  bg-transparent
                  border-b
                  border-slate-500
                  pb-3
                  text-white
                  outline-none
                  focus:border-[#ff7a59]
                  transition
                "
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
