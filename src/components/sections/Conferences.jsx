/**
 * Conferences Section — Minimalist
 */

"use client";

import { motion } from "framer-motion";
import { conferences } from "@/data/portfolio";
import { ExternalLink, Mic2 } from "lucide-react";

export default function Conferences() {
  return (
    <section id="conferences" className="alt-bg relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -z-10" />

      <div className="page-container section-pad">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Global Presentations</p>
          <h2 className="section-heading">Conferences</h2>
        </motion.div>

        <div className="space-y-6">
          {conferences.map((conf, i) => (
            <motion.div 
              key={conf.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="clean-card p-6 sm:p-8 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover gradient wash */}
              <div className="absolute inset-0 bg-linear-to-r from-accent/0 to-emerald-500/0 group-hover:from-accent/5 group-hover:to-emerald-500/5 transition-colors duration-500" />
              
              <div className="flex gap-4 sm:gap-6 relative z-10">
                <div className="text-transparent bg-clip-text bg-linear-to-b from-accent to-emerald-500 font-bold font-mono text-xl sm:text-2xl pt-1 w-6 sm:w-10 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                <div className="flex-1 min-w-0">
                  {conf.isFirstAuthor && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase border text-emerald-500 bg-emerald-500/10 border-emerald-500/20 mb-4 group-hover:border-emerald-500/40 transition-colors">
                      <Mic2 className="w-3.5 h-3.5" /> Presenter
                    </span>
                  )}
                  
                  <h3 className="font-bold text-lg sm:text-xl text-text-primary leading-snug mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-accent group-hover:to-blue-500 transition-all duration-300">
                    {conf.title}
                  </h3>
                  
                  <p className="text-[14px] font-medium text-text-secondary italic mb-5">
                    {conf.authors}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/60">
                    <div>
                      <p className="text-[14px] font-bold text-text-primary mb-1">{conf.event}</p>
                      <p className="text-[13.5px] font-medium text-text-muted">
                        {conf.date} <span className="mx-1.5 text-accent/50">•</span> {conf.location}
                      </p>
                    </div>
                    
                    {conf.credential && (
                      <a
                        href={conf.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-bg-secondary hover:bg-bg-primary border border-border/80 hover:border-accent rounded-lg text-[13px] font-semibold text-text-secondary hover:text-accent shrink-0 transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.15)]"
                      >
                        Credential <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
