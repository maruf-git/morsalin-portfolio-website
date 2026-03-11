/**
 * Certifications Section — Minimalist
 */

"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { ExternalLink, Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="relative">
      <div className="page-container section-pad">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Credentials</p>
          <h2 className="section-heading">Licenses & Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="clean-card p-8 flex flex-col h-full group hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-400 group-hover:via-emerald-400 group-hover:to-blue-400 transition-all duration-500 opacity-0 group-hover:opacity-100" />

              <div className="mb-6 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-text-primary leading-snug group-hover:text-blue-500 transition-colors">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-[14.5px] font-medium text-text-secondary leading-relaxed pl-12">
                  {cert.description}
                </p>
              </div>
              
              <div className="mt-auto pt-5 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 rounded-full h-2 bg-blue-500" />
                  <div>
                    <p className="text-[14px] font-bold text-text-primary mb-0.5">{cert.issuer}</p>
                    <p className="text-[12.5px] font-medium text-text-muted uppercase tracking-wider">{cert.issuedDate}</p>
                  </div>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-bg-secondary border border-border/80 hover:border-blue-500 text-[13px] font-semibold text-text-secondary hover:text-blue-500 transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.15)]"
                  >
                    Verify <ExternalLink className="w-3.5 h-3.5" />
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
