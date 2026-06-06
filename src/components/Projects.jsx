import Image from "next/image";

const projects = [
  {
    title: "Mediqueue",
    image: "/Medique.png",
    description:
      "MediQueue is a modern tutor booking and management platform that allows students to discover tutors, schedule sessions, and manage bookings seamlessly. The platform provides secure authentication, responsive design, and an intuitive user experience for both tutors and students.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/Arshad-Hossain/Mediqueue.git",
    live: "https://mediqueue-tau.vercel.app/",
  },
  {
    title: "SkillSphere",
    image: "/skillsphere.png",
    description:
      "SkillSphere is an online learning platform designed to provide a seamless and interactive learning experience for users. It helps learners access structured educational content in a simple and modern interface.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Better-Auth"],
    github: "https://github.com/Arshad-Hossain/skillsphere.git",
    live: "https://skillsphere-omega.vercel.app/",
  },
  {
    title: "KeenKeeper",
    image: "/keenkeeper.png",
    description:
      "KeenKeeper is a modern web application designed to keep friends and family connected in today’s busy world. It helps you maintain meaningful relationships through simple, intuitive interactions and thoughtful features.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "DaisyUI"],
    github: "https://github.com/Arshad-Hossain/A7-KeenKeeper.git",
    live: "https://a7-keenkeeper.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#081828] py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#ff7a59]/5 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#ff7a59]/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white">Projects</h2>

          <div className="mt-6 flex justify-center">
            <div className="h-12 w-[2px] bg-[#ff7a59]" />
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`
                grid
                lg:grid-cols-2
                gap-12
                items-center
                ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* Image */}
              <div className="relative">
                <div className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-4xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        px-4
                        py-2
                        text-xs
                        text-slate-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="mt-6 text-slate-400 leading-8">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-[#ff7a59]
                      px-6
                      py-3
                      text-white
                      transition
                      hover:bg-[#ff6a45]
                    "
                  >
                    View GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      border-b
                      border-white
                      pb-1
                      text-white
                      transition
                      hover:text-[#ff7a59]
                      hover:border-[#ff7a59]
                    "
                  >
                    View Project ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
