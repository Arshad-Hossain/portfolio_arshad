"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function Technologies() {
  const techStack = [
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
    { icon: SiNodedotjs, name: "Node.js", color: "#3C873A" },
    { icon: SiExpress, name: "Express", color: "#FFFFFF" },
    { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },

    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiPrisma, name: "Prisma", color: "#FFFFFF" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: FaAws, name: "AWS", color: "#FF9900" },
  ];

  return (
    <section className="bg-[#081828] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold">Technologies</h2>

          <p className="text-slate-400 mt-2">My Tech Stack</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-8 justify-items-center">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div key={index} className="group flex flex-col items-center">
                {/* Circle */}
                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-md
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-[#ff7a59]/50
                  "
                >
                  <Icon
                    size={32}
                    style={{
                      color: tech.color,
                    }}
                  />
                </div>

                {/* Label */}
                <p className="text-slate-300 text-xs mt-3 text-center">
                  {tech.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
