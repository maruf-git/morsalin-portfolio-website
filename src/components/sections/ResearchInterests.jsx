/**
 * Research Interests Section — Colorful, Modern
 */

"use client";

import { motion } from "framer-motion";
import { researchInterests } from "@/data/portfolio";

// Rotating color themes per interest card
const cardColors = [
  { dot: "bg-blue-500", glow: "group-hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]", border: "hover:border-blue-500/30", bg: "hover:bg-blue-500/5", number: "text-blue-400" },
  { dot: "bg-indigo-500", glow: "group-hover:shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]", border: "hover:border-indigo-500/30", bg: "hover:bg-indigo-500/5", number: "text-indigo-400" },
  { dot: "bg-emerald-500", glow: "group-hover:shadow-[0_0_10px_2px_rgba(16,185,129,0.5)]", border: "hover:border-emerald-500/30", bg: "hover:bg-emerald-500/5", number: "text-emerald-400" },
  { dot: "bg-purple-500", glow: "group-hover:shadow-[0_0_10px_2px_rgba(168,85,247,0.5)]", border: "hover:border-purple-500/30", bg: "hover:bg-purple-500/5", number: "text-purple-400" },
  { dot: "bg-cyan-500", glow: "group-hover:shadow-[0_0_10px_2px_rgba(6,182,212,0.4)]", border: "hover:border-cyan-500/30", bg: "hover:bg-cyan-500/5", number: "text-cyan-400" },
  { dot: "bg-rose-500", glow: "group-hover:shadow-[0_0_10px_2px_rgba(244,63,94,0.4)]", border: "hover:border-rose-500/30", bg: "hover:bg-rose-500/5", number: "text-rose-400" },
];

export default function ResearchInterests() {
  return (
    <section id="research" className="relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="page-container section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">What I Study</p>
          <h2 className="section-heading">Research Interests</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {researchInterests.map(({ label }, i) => {
            const c = cardColors[i % cardColors.length];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`clean-card px-6 py-6 flex items-center gap-4 group cursor-default hover:-translate-y-1 transition-all duration-300 ${c.border} ${c.bg}`}
              >
                {/* Number badge */}
                <span className={`text-[11px] font-black tabular-nums ${c.number} opacity-50 group-hover:opacity-100 transition-opacity shrink-0 w-5`}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Glowing dot */}
                <span className={`w-2.5 h-2.5 rounded-full ${c.dot} opacity-40 group-hover:opacity-100 ${c.glow} transition-all duration-300 shrink-0`} />

                <span className="text-[14.5px] font-semibold text-text-secondary group-hover:text-text-primary transition-colors duration-300 leading-snug">
                  {label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
