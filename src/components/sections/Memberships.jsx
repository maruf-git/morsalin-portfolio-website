/**
 * Memberships Section — Minimalist
 */

"use client";

import { motion } from "framer-motion";
import { memberships } from "@/data/portfolio";
import { ShieldCheck } from "lucide-react";

export default function Memberships() {
  return (
    <section id="memberships" className="alt-bg relative overflow-hidden">
       {/* Decorative gradient blob */}
       <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] -z-10" />

      <div className="page-container section-pad">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Professional Bodies</p>
          <h2 className="section-heading">Professional Memberships</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memberships.map((mem, i) => (
            <motion.div 
              key={mem.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="clean-card p-6 sm:p-8 flex flex-col justify-between h-full group hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                   </div>
                  <h3 className="font-bold text-lg text-text-primary leading-snug group-hover:text-emerald-500 transition-colors">
                    {mem.organization}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-md text-[12px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 whitespace-nowrap self-start">
                  {mem.type}
                </span>
              </div>
              
              <div className="text-[13.5px] mt-auto pt-5 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                <div className="font-semibold text-text-secondary">
                  {mem.duration}
                </div>
                {mem.memberNumber && (
                  <span className="font-mono bg-bg-secondary px-3 py-1.5 rounded-md text-text-muted border border-border/80 font-medium">
                    ID : <span className="text-text-primary">{mem.memberNumber}</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
