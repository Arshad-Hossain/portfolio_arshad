export default function Academics() {
  return (
    <section
      id="academics"
      className="relative overflow-hidden bg-[#081828] py-24 border-t border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#ff7a59]/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#ff7a59]/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#ff7a59] uppercase tracking-[0.3em] text-sm">
            Education
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Academic Journey
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-24 bg-[#ff7a59]" />
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          {/* Masters */}
          <div className="relative mb-16 flex flex-col md:flex-row md:items-center">
            <div className="hidden md:block md:w-1/2" />

            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border-4 border-[#081828] bg-[#ff7a59]" />

            <div className="ml-14 md:ml-10 md:w-1/2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#ff7a59]/40">
                <span className="text-sm uppercase tracking-widest text-[#ff7a59]">
                  Master's Degree
                </span>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  Master of Science in Management Information Systems
                </h3>

                <p className="mt-3 text-lg text-slate-300">
                  Ashland University
                </p>

                <p className="text-slate-500">Ohio, United States</p>

                <p className="mt-5 leading-8 text-slate-400">
                  Focused on information systems, data management, business
                  technology, and modern digital solutions. Strengthened
                  analytical, technical, and strategic decision-making skills
                  while studying enterprise systems and emerging technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Bachelor */}
          <div className="relative flex flex-col md:flex-row md:items-center">
            <div className="ml-14 md:ml-0 md:w-1/2 md:pr-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#ff7a59]/40">
                <span className="text-sm uppercase tracking-widest text-[#ff7a59]">
                  Bachelor's Degree
                </span>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  Bachelor of Business Administration in Finance
                </h3>

                <p className="mt-3 text-lg text-slate-300">
                  Independent University, Bangladesh
                </p>

                <p className="text-slate-500">Dhaka, Bangladesh</p>

                <p className="mt-5 leading-8 text-slate-400">
                  Built a strong foundation in finance, business strategy,
                  economics, and analytical problem-solving. Developed
                  quantitative and decision-making skills that continue to
                  support my approach to software development and business
                  technology solutions.
                </p>
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border-4 border-[#081828] bg-[#ff7a59]" />

            <div className="hidden md:block md:w-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
