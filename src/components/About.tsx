import { motion } from "motion/react";
import {
  Github,
  Mail,
  Youtube,
  Twitter,
  MapPin,
  Globe,
  Calendar,
} from "lucide-react";

const infoCards = [
  { icon: <Globe size={20} />, label: "Languages", value: "Arabic, English" },
  { icon: <MapPin size={20} />, label: "Residence", value: "Egypt" },
  { icon: <Calendar size={20} />, label: "Age", value: "21" },
];

const socials = [
  { icon: <Github size={20} />, href: "#", label: "GitHub" },
  { icon: <Twitter size={20} />, href: "#", label: "X" },
  { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
  {
    icon: <Mail size={20} />,
    href: "mailto:ahmed@example.com",
    label: "Email",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-transparent relative">
      <div className="container-boxed">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-brand"></span>
              <span className="text-brand font-bold uppercase tracking-widest text-xs">
                Story
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-8 uppercase tracking-tighter">
              Crafting <br />
              <span className="text-brand">Experiences</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg font-light">
              <p>
                I am a passionate{" "}
                <span className="text-white font-medium">
                  Frontend Developer
                </span>{" "}
                with a deep interest in crafting beautiful and functional
                digital experiences. I believe that good design is as important
                as solid engineering.
              </p>
              <p>
                Currently based in Egypt, I have been honing my skills in modern
                web technologies, always staying up-to-date with the latest
                industry standards and best practices. My goal is to build
                products that are not just used, but loved.
              </p>
              <div className="flex gap-6 pt-8">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-500 hover:text-brand transition-all hover:scale-110 active:scale-90"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 grid gap-4"
          >
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="boxed-card flex items-center gap-6 group"
              >
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">
                    {card.label}
                  </p>
                  <p className="font-bold text-white uppercase tracking-tighter">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
