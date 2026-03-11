/**
 * Education Section — Minimalist
 */

"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="page-container section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Academic Background</p>
          <h2 className="section-heading">Education</h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="clean-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="flex-1">
                <h3 className="font-bold text-xl text-text-primary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-accent group-hover:to-blue-500 transition-all duration-300">
                  {edu.degree}
                </h3>
                <p className="font-medium text-text-secondary mb-1">{edu.field}</p>
                <div className="flex items-center gap-2 text-sm text-text-muted mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {edu.institution}
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-3 text-sm text-text-secondary bg-bg-secondary/50 p-4 rounded-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{edu.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600">
                    {edu.result}
                  </span>
                  {edu.status && (
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-accent/10 border border-accent/20 text-accent">
                      {edu.status}
                    </span>
                  )}
                </div>
                {edu.expectedGraduation && (
                  <span className="text-xs text-text-muted/80 italic">Expected: {edu.expectedGraduation}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
