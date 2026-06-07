export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#081828]">
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-[#ff7a59]/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-32 w-32 rounded-full bg-[#ff7a59]/10 blur-3xl" />

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h1 className="select-none text-[80px] md:text-[150px] font-black text-white/[0.02]">
          HOSSAIN
        </h1>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="text-center">
          {/* Animated Name */}
          <h2 className="text-3xl font-bold">
            <span className="animate-shimmer bg-gradient-to-r from-white via-[#ff7a59] to-white bg-[length:200%_100%] bg-clip-text text-transparent">
              Mohammad A Hossain
            </span>
            <span className="text-[#ff7a59]">.</span>
          </h2>

          {/* Tagline */}
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400">
            Thanks for visiting my portfolio. I enjoy building modern,
            responsive, and user-focused web experiences.
          </p>

          {/* Accent Line */}
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#ff7a59] to-transparent" />

          {/* Quote */}
          <p className="mt-6 text-sm italic text-slate-500">
            Turning ideas into interactive digital experiences.
          </p>

          {/* Bottom */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Mohammad A Hossain. All rights
              reserved.
            </p>

            <div className="h-1 w-1 rounded-full bg-[#ff7a59]" />

            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-600">
              Next.js • React • Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
