/**
 * Experience Section — Minimalist
 */

"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { ExternalLink, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="alt-bg relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="page-container section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Work History</p>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent/10 text-accent shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] clean-card p-6 sm:p-8 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg text-text-primary group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <div className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 text-blue-500 shrink-0 ml-4">
                    {exp.type}
                  </div>
                </div>
                
                <p className="font-medium text-text-secondary mb-1 flex items-center gap-2">
                  {exp.organization}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-text-muted mt-3 pt-3 border-t border-border/50">
                  <span className="font-medium text-text-primary/70">{exp.duration}</span>
                  <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
                  <span>{exp.department}</span>
                </div>
                
                {exp.credential && (
                  <a
                    href={exp.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-400 hover:underline mt-4 transition-colors"
                  >
                    View Credential
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
