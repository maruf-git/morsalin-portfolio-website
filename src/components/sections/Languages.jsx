/**
 * Languages Section — Minimalist
 */

"use client";

import { motion } from "framer-motion";
import { languages } from "@/data/portfolio";

export default function Languages() {
  return (
    <section id="languages" className="alt-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -translate-y-1/2 -z-10" />

      <div className="page-container section-pad">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Communication</p>
          <h2 className="section-heading">Languages</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {languages.map((lang, i) => (
            <motion.div 
              key={lang.language}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="clean-card p-6 sm:p-8 group hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgba(168,85,247,0.1)] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-text-primary mb-1 group-hover:text-purple-500 transition-colors">
                    {lang.language}
                  </h3>
                  <p className="text-[14.5px] font-medium text-text-secondary">{lang.proficiency}</p>
                </div>
                <span className="text-[13px] font-bold text-purple-500 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-md">
                  {lang.score}
                </span>
              </div>
              
              <div className="h-2 w-full bg-bg-secondary rounded-full overflow-hidden border border-border/50">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + (i * 0.1), type: "spring", stiffness: 50 }}
                  className="h-full bg-linear-to-r from-purple-500 to-indigo-500 rounded-full relative" 
                >
                  <div className="absolute top-0 right-0 bottom-0 w-8 bg-linear-to-r from-transparent to-white/30" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
