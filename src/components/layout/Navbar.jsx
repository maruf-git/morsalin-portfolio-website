/**
 * Navbar — Vibrant Colorful Glassmorphism + Resume Download
 */

"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setMobileOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "bg-bg-card/80 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(59,130,246,0.08)] py-2"
            : "bg-transparent border-b border-transparent py-4"
        )}
      >
        {/* Colorful gradient line at bottom of navbar when scrolled */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-blue-500 via-indigo-400 to-emerald-500"
          />
        )}

        <div className="page-container flex items-center justify-between h-14">
          {/* Logo — Gradient Text */}
          <button
            onClick={() => go("#hero")}
            className="flex items-center gap-2 font-extrabold text-[16px] tracking-tight group"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-indigo-500 group-hover:from-blue-400 group-hover:to-emerald-500 transition-all duration-300 hover:cursor-pointer">
              Md. Morsalin
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] font-semibold transition-all duration-200 rounded-lg hover:cursor-pointer",
                    isActive
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary/60"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-linear-to-r from-blue-500 to-indigo-500"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Resume + Contact + toggle + hamburger */}
          <div className="flex items-center gap-2">
            {/* Resume Download — Desktop */}
            <a
              href="/md_morsalin_resume.pdf"
              download="Md_Morsalin_Resume.pdf"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-bold text-white bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow-[0_2px_12px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_16px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer"
              aria-label="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>

            {/* Contact CTA — Desktop */}
            {/* <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); go("#contact"); }}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-bold text-white bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow-[0_2px_12px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_16px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact
            </a> */}

            <ThemeToggle  />

            <button
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-accent/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[calc(3.5rem+1px)] left-0 right-0 z-40 bg-bg-card/95 backdrop-blur-2xl border-b border-border shadow-[0_8px_30px_rgba(59,130,246,0.12)] p-4"
          >
            {/* Mobile gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-blue-500 via-indigo-400 to-emerald-500" />

            <div className="space-y-1 pt-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => go(link.href)}
                    className={cn(
                      "flex items-center justify-between w-full text-left px-4 py-3 text-[14px] font-semibold rounded-xl transition-all duration-200",
                      isActive
                        ? "bg-accent/10 text-accent border border-accent/20"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </button>
                );
              })}

              {/* Mobile action buttons */}
              <div className="pt-3 pb-1 border-t border-border/60 mt-2 grid grid-cols-1 gap-2">
                {/* Resume download — Mobile */}
                <a
                  href="/md_morsalin_resume.pdf"
                  download="Md_Morsalin_Resume.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-[14px] font-bold text-white bg-linear-to-r from-blue-500 to-indigo-600 shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition-all"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>

                {/* Contact — Mobile */}
                {/* <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); go("#contact"); }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-[14px] font-bold text-white bg-linear-to-r from-blue-500 to-indigo-600 shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition-all"
                >
                  Contact
                </a> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
