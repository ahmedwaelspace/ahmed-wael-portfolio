export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/5 bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--color-brand)_0%,_transparent_70%)]"></div>
      </div>
      <div className="container-boxed text-center relative z-10">
        <div className="mb-8">
          <a
            href="#home"
            className="text-2xl font-bold tracking-tighter inline-block mb-4"
          >
            AHMED<span className="text-brand">WAEL</span>
          </a>
          <p className="text-gray-500 text-xs uppercase tracking-[0.4em]">
            Frontend Architect
          </p>
        </div>
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">
          &copy; {currentYear} Handcrafted with precision. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
