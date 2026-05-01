import { motion } from "motion/react";

const projects = [
  {
    title: "LaslesVPN Landing Template To VPN Company",
    category: "Front End",
    image: "/lasles-vpn.webp",
    link: "https://ahmedwaelhub.github.io/LaslesVPN",
  },
  {
    title: "Remind Me - Landing Page to Mobile App",
    category: "Front End",
    image: "/remind-me-app.webp",
    link: "https://ahmedwaelhub.github.io/Remind-Me",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 border-y border-white/5 bg-surface/10"
    >
      <div className="container-boxed">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-brand"></span>
              <span className="text-brand font-bold uppercase tracking-widest text-xs">
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">
              Selected <span className="text-brand">Work</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6 aspect-video bg-surface border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter group-hover:text-brand transition-colors">
                    <a href={project.link}>{project.title}</a>
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
