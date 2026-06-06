import Image from "next/image";
import {
  BriefcaseBusiness,
  BadgeCheck,
  Headphones,
  Download,
} from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <BriefcaseBusiness size={20} />,
      title: "Experience",
      value: "1+ Years Working",
    },
    {
      icon: <BadgeCheck size={20} />,
      title: "Completed",
      value: "50+ Projects",
    },
    {
      icon: <Headphones size={20} />,
      title: "Support",
      value: "24/7 Online",
    },
  ];

  return (
    <section id="about" className="relative bg-[#081828] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff7a59]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff7a59]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#ff7a59] uppercase tracking-[4px] text-sm">
            My Introduction
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-3">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#ff7a59]/10 blur-[100px]" />

              <Image
                src="/arshad2.png"
                alt="Arshad"
                width={500}
                height={600}
                priority
                className="relative z-10 w-full max-w-[450px] h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-md
                    rounded-xl
                    p-5
                    text-center
                    transition-all
                    duration-300
                    hover:border-[#ff7a59]/50
                    hover:-translate-y-1
                  "
                >
                  <div className="flex justify-center text-[#ff7a59] mb-3">
                    {item.icon}
                  </div>

                  <h3 className="text-white font-semibold">{item.title}</h3>

                  <p className="text-slate-400 text-sm mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="mt-8 text-slate-300 leading-8">
              I'm a passionate Frontend Developer specializing in React.js,
              Next.js, JavaScript, and Tailwind CSS. I enjoy building
              responsive, accessible, and high-performance web applications that
              provide exceptional user experiences.
            </p>

            <p className="mt-4 text-slate-300 leading-8">
              With experience working on modern web technologies and scalable
              architectures, I focus on writing clean code, creating intuitive
              interfaces, and delivering solutions that solve real business
              problems.
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-[#ff7a59]
                  px-8
                  py-4
                  text-white
                  font-medium
                  rounded-md
                  hover:bg-[#ff6a45]
                  transition-all
                  duration-300
                "
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
