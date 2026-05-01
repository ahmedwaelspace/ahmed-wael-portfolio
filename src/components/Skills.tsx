import { motion } from "motion/react";
import { Code, Palette } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <Code size={24} />,
    description:
      "Building scalable, performant, and interactive user interfaces using modern tools.",
    tags: ["HTML", "CSS", "JS", "TS", "Tailwind", "React", "Next.js", "Motion"],
  },
  {
    title: "UI/UX Design",
    icon: <Palette size={24} />,
    description:
      "Creating intuitive and visually appealing designs focused on user needs and goals.",
    tags: ["Figma", "UI/UX", "Prototyping", "Wireframing", "Design Systems"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <div className="container-boxed">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-brand"></span>
            <span className="text-brand font-bold uppercase tracking-widest text-xs">
              Technical
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">
            My <span className="text-brand">Toolkit</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="boxed-card group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  {group.icon}
                </div>
                <span className="text-[40px] font-black text-white/5 group-hover:text-brand/10 transition-colors leading-none">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-2xl mb-4 text-white uppercase tracking-tighter">
                {group.title}
              </h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed font-light">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-bg-dark/50 text-gray-500 text-[10px] font-bold uppercase tracking-widest border border-white/5 hover:border-brand/30 hover:text-brand transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
