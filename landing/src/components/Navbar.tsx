import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = ["Product", "Docs", "API", "Roadmap", "FAQ"];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map((id) => document.getElementById(id.toLowerCase()));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(NAV_ITEMS[i]);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 nav-glow transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-foreground">
          <span className="glow-text">block</span>
          <span>ID</span>
        </a>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-1 glass-panel px-1 py-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === item
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Bekal17/trust-ledger"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]"
          >
            Launch App
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
