import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active link based on scroll position
      const sections = navLinks.map((link) => ({
        id: link.href.replace("#", ""),
        name: link.name,
      }));

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "bg-transparent py-8"}`}
    >
      <div className="container-boxed flex items-center justify-between border-b-0!">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tighter group flex items-center gap-2"
        >
          <span className="w-8 h-8 bg-brand flex items-center justify-center text-white text-base">
            A
          </span>
          <span className="hidden sm:inline">
            AHMED
            <span className="text-brand group-hover:text-white transition-colors">
              WAEL
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-brand relative pb-1 group ${
                  activeLink === link.name ? "text-brand" : "text-gray-400"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand transition-all duration-300 ${activeLink === link.name ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-white/5 overflow-hidden mbs-8"
          >
            <ul className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium ${
                      activeLink === link.name ? "text-brand" : "text-gray-400"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
