/**
 * References Section — Minimalist
 */

"use client";

import { motion } from "framer-motion";
import { references } from "@/data/portfolio";
import { Mail, Phone } from "lucide-react";

export default function References() {
  return (
    <section id="references" className="relative">
      <div className="page-container section-pad">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Academic Contacts</p>
          <h2 className="section-heading">References</h2>
          
          <p className="text-[14.5px] font-medium text-text-muted mb-10 -mt-6">
            Available upon request. Contact details provided with permission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {references.map((rRef, i) => (
            <motion.div 
              key={rRef.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="clean-card p-6 sm:p-8 flex flex-col md:flex-row gap-6 relative group hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-accent/10 to-transparent -z-10 group-hover:from-accent/20 transition-colors" />

              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-bg-secondary to-bg-primary border border-border flex items-center justify-center shrink-0 text-xl font-bold text-transparent bg-clip-text bg-linear-to-br from-accent to-emerald-500 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {rRef.name.split(" ").slice(-1)[0].charAt(0)}
              </div>
              
              <div className="flex-1 flex flex-col h-full">
                <h3 className="font-bold text-lg text-text-primary mb-1 group-hover:text-accent transition-colors">{rRef.name}</h3>
                <p className="text-[14.5px] font-semibold text-text-secondary mb-2">{rRef.title}</p>
                <div className="text-[13.5px] font-medium text-text-muted space-y-1 mb-6">
                  <p>{rRef.department}</p>
                  <p>{rRef.faculty}</p>
                  <p>{rRef.institution}, {rRef.location}</p>
                </div>
                
                <div className="flex flex-col gap-3 pt-5 border-t border-border/60 mt-auto">
                  <a href={`mailto:${rRef.email}`} className="inline-flex items-center gap-2.5 text-[13.5px] font-semibold text-text-secondary hover:text-accent transition-colors group/link w-fit">
                    <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/link:bg-accent group-hover/link:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5" /> 
                    </span>
                    {rRef.email}
                  </a>
                  <a href={`tel:${rRef.phone}`} className="inline-flex items-center gap-2.5 text-[13.5px] font-semibold text-text-secondary hover:text-emerald-500 transition-colors group/link w-fit">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover/link:bg-emerald-500 group-hover/link:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5" /> 
                    </span>
                    {rRef.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
