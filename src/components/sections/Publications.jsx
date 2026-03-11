/**
 * Publications Section — Minimalist
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publications } from "@/data/portfolio";
import { ExternalLink, ChevronDown } from "lucide-react";

export default function Publications() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  return (
    <section id="publications" className="relative">
      <div className="page-container section-pad">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Research Output</p>
          <h2 className="section-heading">Publications</h2>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.div 
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="clean-card p-6 sm:p-8 group hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] transition-all duration-300"
            >
              <div className="flex gap-4 sm:gap-6">
                <div className="text-transparent bg-clip-text bg-linear-to-b from-accent to-emerald-500 font-bold font-mono text-xl sm:text-2xl pt-1 w-6 sm:w-10 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase border text-text-primary bg-bg-secondary border-border/50 group-hover:border-border transition-colors ${pub.status === 'published' ? 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/40' : ''}`}>
                      {pub.status.charAt(0).toUpperCase() + pub.status.slice(1).replace('-', ' ')}
                    </span>
                    {pub.isFirstAuthor && <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase border text-accent bg-accent/10 border-accent/20 group-hover:border-accent/40 transition-colors">First Author</span>}
                  </div>
                  
                  <h3 className="font-bold text-base sm:text-lg text-text-primary leading-snug mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-accent group-hover:to-blue-500 transition-all duration-300">
                    {pub.title}
                  </h3>
                  
                  {pub.journal && (
                    <p className="text-[14px] font-medium text-text-secondary italic mb-3">
                      {pub.journal}{pub.details ? ` · ${pub.details}` : ""}
                    </p>
                  )}
                  
                  <div className="mb-4">
                    <button
                      onClick={() => toggle(pub.id)}
                      className="flex items-center gap-1.5 text-[13px] font-medium text-text-muted hover:text-accent transition-colors"
                    >
                      <motion.div animate={{ rotate: expanded[pub.id] ? 180 : 0 }}>
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                      {expanded[pub.id] ? "Hide Authors" : "View Authors"}
                    </button>
                    <AnimatePresence>
                      {expanded[pub.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[13.5px] text-text-secondary leading-relaxed mt-3 p-4 bg-bg-secondary/50 rounded-xl border border-border/50 shadow-inner">
                            {pub.authors}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-emerald-500 hover:text-emerald-400 hover:underline transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> {pub.doiText || "View DOI"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
