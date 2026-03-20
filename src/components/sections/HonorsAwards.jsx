/**
 * Honors & Awards Section — Fixed visibility for light/dark mode
 */

"use client";

import { motion } from "framer-motion";
import { honorsAwards } from "@/data/portfolio";
import { ExternalLink, Trophy } from "lucide-react";

export default function HonorsAwards() {
  return (
    <section id="awards" className="relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/3 w-[350px] h-[350px] bg-yellow-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="page-container section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Recognition</p>
          <h2 className="section-heading">Honors &amp; Awards</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {honorsAwards.map((award, i) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="clean-card p-8 flex flex-col justify-between h-full group hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-accent/10 to-transparent -z-10 group-hover:from-accent/20 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-bg-secondary text-text-primary text-[12px] font-bold rounded-md border border-border/80 group-hover:border-accent/30 group-hover:text-accent transition-colors">
                    <Trophy className="w-3.5 h-3.5 text-accent" />
                    {award.year}
                  </span>

                  {award.credential && (
                    <a
                      href={award.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-bg-secondary text-text-muted hover:bg-accent/10 hover:text-accent hover:scale-110 transition-all duration-300 shadow-sm border border-border/50 hover:border-accent/40"
                      aria-label="View Credential"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="font-bold text-lg sm:text-xl text-text-primary leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                  {award.title}
                </h3>
                <p className="text-[14px] font-medium text-text-secondary leading-relaxed mb-6">
                  {award.event}
                </p>
              </div>

              {/* Issuer row — fixed: no gradient text that disappears in light mode */}
              <div className="pt-5 border-t border-border/60 mt-auto relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <p className="text-[13px] font-bold text-text-secondary uppercase tracking-wide">
                  {award.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
