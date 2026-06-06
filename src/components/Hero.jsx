"use client";

import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#081828]">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-[#ff7a59]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#ff7a59]/10 blur-[120px]" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-8 lg:flex-row lg:px-12">
        {/* LEFT */}
        <div className="z-10 mt-32 w-full text-center lg:mt-0 lg:w-1/2 lg:text-left">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            <span className="text-sm text-slate-300">Available for Work</span>
          </div>

          <h2 className="text-5xl font-bold text-white md:text-6xl">
            Hello
            <span className="text-[#ff7a59]">.</span>
          </h2>

          {/* Animated Name */}
          <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
            <div className="h-[2px] w-20 bg-[#ff7a59]" />

            <div className="typewriter">
              <span>I'm Hossain</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="mt-8 leading-tight">
            <span className="block text-5xl font-bold text-white md:text-7xl">
              Frontend
            </span>

            <span className="bg-gradient-to-r from-[#ff7a59] to-orange-300 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
              Developer
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-400 lg:mx-0">
            I build modern, scalable, and responsive web applications using
            React, Next.js, JavaScript, and Tailwind CSS.
          </p>

          {/* Social */}
          <div className="mt-10 flex justify-center gap-5 lg:justify-start">
            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7a59] hover:text-[#ff7a59]"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7a59] hover:text-[#ff7a59]"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7a59] hover:text-[#ff7a59]"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mt-20 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
          {/* Glow */}
          <div className="absolute h-[500px] w-[500px] rounded-full bg-[#ff7a59]/20 blur-[120px]" />

          {/* Floating Dots */}
          <div className="particle absolute left-10 top-20 h-4 w-4 rounded-full bg-[#ff7a59]" />

          <div className="particle-delay absolute bottom-20 right-10 h-3 w-3 rounded-full bg-white" />

          <div className="particle absolute right-0 top-1/2 h-2 w-2 rounded-full bg-[#ff7a59]" />

          {/* Arrows */}
          <div className="absolute left-0 top-1/3 hidden text-8xl font-light text-[#ff7a59]/20 lg:block">
            &lt;
          </div>

          <div className="absolute bottom-1/4 right-0 hidden text-8xl font-light text-[#ff7a59]/20 lg:block">
            &gt;
          </div>

          {/* Image */}
          <div className="relative flex h-[320px] w-[320px] items-center justify-center md:h-[420px] md:w-[420px]">
            <div className="absolute inset-0 rounded-full border-[18px] border-[#ff7a59]" />

            <div className="relative z-10 h-[260px] w-[260px] overflow-hidden rounded-full md:h-[340px] md:w-[340px]">
              <Image
                src="/arshad.png"
                alt="Profile"
                fill
                priority
                className="object-cover"
                style={{
                  objectPosition: "center 15%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center">
        <span className="mb-2 text-sm text-slate-400">Scroll Down</span>

        <div className="h-12 w-[2px] overflow-hidden bg-white/20">
          <div className="scroll-indicator h-6 w-full bg-[#ff7a59]" />
        </div>
      </div>
    </section>
  );
}
