import { motion } from "motion/react";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 border-b border-white/5 bg-gradient-to-br from-bg-dark to-surface/20"
    >
      <div className="container-boxed w-full py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 relative"
          >
            <div className="absolute -inset-4 bg-brand/10 blur-3xl rounded-full"></div>
            <div className="relative w-40 h-40 md:w-52 md:h-52 border-2 border-brand p-1 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-white relative overflow-hidden">
                <img
                  src="https://picsum.photos/seed/wael/500/500"
                  alt="Ahmed Wael"
                  className="w-full h-full object-cover grayscale brightness-90 hover:brightness-110 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-2 -right-6 bg-brand text-white px-4 py-1 text-xs font-bold uppercase tracking-widest -rotate-6"
            >
              Available
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-[1px] w-8 bg-brand/40"></span>
              <p className="text-brand font-bold tracking-[0.3em] uppercase text-xs">
                Based in Egypt
              </p>
              <span className="h-[1px] w-8 bg-brand/40"></span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl mb-8 leading-[0.85] tracking-tighter uppercase">
              Creative
              <br />
              <span className="text-brand italic">Developer</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Ahmed Wael — crafting high-end digital solutions with{" "}
              <span className="text-white font-medium">
                technical precision
              </span>{" "}
              and <span className="text-white font-medium">artistic flair</span>
              .
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#projects"
                className="btn-primary group w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-3">
                  Explore Work
                  <span className="w-4 h-4 rounded-full border border-white group-hover:bg-white flex items-center justify-center transition-colors">
                    <Download size={8} className="group-hover:text-brand" />
                  </span>
                </span>
              </a>
              <a
                href="#about"
                className="text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors flex items-center gap-3 py-3"
              >
                Learn More
                <span className="w-12 h-[1px] bg-white/20 group-hover:bg-brand transition-colors"></span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
