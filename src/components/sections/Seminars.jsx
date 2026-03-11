/**
 * Seminars Section — Minimalist
 */

"use client";

import { motion } from "framer-motion";
import { seminars } from "@/data/portfolio";
import { CalendarDays, MapPin } from "lucide-react";

export default function Seminars() {
  return (
    <section id="seminars" className="relative">
      <div className="page-container section-pad">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Speaking</p>
          <h2 className="section-heading">Seminars</h2>
        </motion.div>

        <div className="space-y-6">
          {seminars.map((sem, i) => (
            <motion.div 
              key={sem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="clean-card p-6 sm:p-8 group hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="px-3 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase border text-emerald-500 bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                      {sem.role}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-text-primary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-accent group-hover:to-blue-500 transition-colors">
                    &ldquo;{sem.title}&rdquo;
                  </h3>
                  <p className="text-[15px] font-medium text-text-secondary">
                    Organized by <span className="font-bold text-text-primary">{sem.organizer}</span>
                  </p>
                </div>
                
                <div className="md:w-48 shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 md:gap-3 bg-bg-secondary/50 p-4 rounded-xl border border-border/50">
                   <div className="flex items-center gap-2 text-[14px] font-semibold text-text-primary">
                      <CalendarDays className="w-4 h-4 text-accent" />
                      {sem.date}
                   </div>
                   <div className="flex items-center gap-2 text-[13.5px] font-medium text-text-secondary text-right">
                      <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                      {sem.location}
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
