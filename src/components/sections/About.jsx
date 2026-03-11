/**
 * About Section — Colorful, Modern
 */

"use client";

import { motion } from "framer-motion";
import { summary } from "@/data/portfolio";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="alt-bg relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-emerald-500/6 rounded-full blur-[100px] -z-10" />

      <div className="page-container section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-heading">Introduction</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="clean-card p-8 sm:p-12 relative overflow-hidden group"
          >
            {/* Left accent bar — gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-linear-to-b from-blue-500 via-indigo-500 to-emerald-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Top-right sparkle decoration */}
            <div className="absolute top-4 right-4 text-accent/20 group-hover:text-accent/40 transition-colors">
              <Sparkles className="w-8 h-8" />
            </div>

            {/* Quote marks */}
            <span className="absolute top-6 left-8 text-[5rem] leading-none font-serif text-accent/10 select-none pointer-events-none group-hover:text-accent/20 transition-colors">
              "
            </span>

            <p className="text-[16px] sm:text-[18px] leading-[1.9] text-text-secondary font-light relative z-10 pl-4 pt-8">
              {summary}
            </p>

            {/* Bottom gradient accent */}
            <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap gap-3">
              {["Renewable Energy", "Power Electronics", "Hybrid Electric Vehicles", "Simulation & Modeling"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-[12px] font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
