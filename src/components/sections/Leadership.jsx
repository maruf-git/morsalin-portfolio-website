/**
 * Leadership Section — Minimalist
 */

"use client";

import { motion } from "framer-motion";
import { leadership } from "@/data/portfolio";
import { Users } from "lucide-react";

export default function Leadership() {
  return (
    <section id="leadership" className="alt-bg relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] -translate-y-1/2 -z-10" />

      <div className="page-container section-pad">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Giving Back</p>
          <h2 className="section-heading">Leadership & Volunteering</h2>
        </motion.div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-0 md:before:ml-6 before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border/80 before:to-transparent">
          {leadership.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-start gap-6 md:gap-8 group"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-indigo-500/10 text-indigo-500 shadow-sm shrink-0 md:ml-1 relative z-10 transition-colors duration-300 group-hover:bg-indigo-500 group-hover:text-white mt-4">
                <Users className="w-4 h-4" />
              </div>
              
              {/* Card */}
              <div className="flex-1 clean-card p-6 sm:p-8 group-hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-text-primary mb-1 group-hover:text-indigo-500 transition-colors">
                      {item.organization}
                    </h3>
                    <p className="font-semibold text-[15px] text-text-secondary flex items-center gap-2">
                       {item.position}
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-md text-[12px] font-bold tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 shrink-0 h-fit w-fit">
                    {item.duration}
                  </div>
                </div>
                
                {item.details && (
                  <p className="text-[14px] sm:text-[15px] text-text-secondary leading-relaxed pt-4 border-t border-border/50 mt-2">
                    {item.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
