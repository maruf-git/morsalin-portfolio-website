/**
 * Technical Skills Section — Colorful, Modern
 */

"use client";

import { motion } from "framer-motion";
import { technicalSkills } from "@/data/portfolio";

const categoryColors = [
  { pill: "from-blue-500 to-indigo-500", ring: "hover:border-blue-400/50 hover:text-blue-400 hover:shadow-[0_0_14px_rgba(59,130,246,0.2)]", heading: "from-blue-400 to-indigo-500" },
  { pill: "from-emerald-500 to-teal-500", ring: "hover:border-emerald-400/50 hover:text-emerald-400 hover:shadow-[0_0_14px_rgba(16,185,129,0.2)]", heading: "from-emerald-400 to-teal-500" },
  { pill: "from-purple-500 to-indigo-500", ring: "hover:border-purple-400/50 hover:text-purple-400 hover:shadow-[0_0_14px_rgba(168,85,247,0.2)]", heading: "from-purple-400 to-indigo-500" },
];

export default function TechnicalSkills() {
  return (
    <section id="skills" className="alt-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/6 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/6 rounded-full blur-[120px] -translate-y-1/2 -z-10" />

      <div className="page-container section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Tools & Languages</p>
          <h2 className="section-heading">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {technicalSkills.map(({ category, skills }, i) => {
            const colors = categoryColors[i % categoryColors.length];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="clean-card p-6 sm:p-8 group relative overflow-hidden"
              >
                {/* Subtle top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${colors.pill} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />

                <h3 className={`font-extrabold text-sm text-transparent bg-clip-text bg-linear-to-r ${colors.heading} uppercase tracking-widest mb-6 pb-4 border-b border-border/50 group-hover:border-blue-500/20 transition-colors`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (i * 0.1) + (j * 0.05) }}
                      className={`px-3 py-1.5 text-[12.5px] font-semibold font-mono bg-bg-secondary border border-border/80 text-text-secondary rounded-lg -translate-y-0 hover:-translate-y-0.5 transition-all duration-300 cursor-default ${colors.ring}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
