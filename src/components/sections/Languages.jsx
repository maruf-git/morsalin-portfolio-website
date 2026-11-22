/**
 * Languages Section
 * English card spans two columns (md+) so the four DET subscores always have
 * room; subscores render as a 2x2 grid on mobile and a 4-up row from sm up.
 */

"use client";

import { motion } from "framer-motion";
import { languages } from "@/data/portfolio";

const DET_MAX = 160;

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {languages.map((lang, i) => {
            const hasScores = Boolean(lang.subscores?.length);
            return (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`clean-card p-6 sm:p-8 group hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgba(168,85,247,0.1)] transition-all duration-300 flex flex-col ${
                  hasScores ? "md:col-span-2" : ""
                }`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg sm:text-xl text-text-primary mb-1 group-hover:text-purple-500 transition-colors">
                      {lang.language}
                    </h3>
                    <p className="text-[14.5px] font-medium text-text-secondary">
                      {lang.proficiency}
                    </p>
                  </div>

                  {hasScores ? (
                    <div className="flex items-baseline gap-2 shrink-0 self-start bg-purple-500/10 border border-purple-500/20 rounded-xl px-4 py-2">
                      <span className="text-3xl font-extrabold leading-none text-purple-500">
                        {lang.overall}
                      </span>
                      <span className="text-[12px] font-semibold text-text-muted">
                        / {DET_MAX}
                      </span>
                    </div>
                  ) : (
                    <span className="self-start shrink-0 text-[13px] font-bold text-purple-500 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-md whitespace-nowrap">
                      {lang.score}
                    </span>
                  )}
                </div>

                {hasScores && (
                  <p className="text-[12px] font-bold uppercase tracking-wider text-text-muted mb-3">
                    {lang.test} · Overall Score
                  </p>
                )}

                {/* Overall progress bar */}
                <div className="h-2 w-full bg-bg-secondary rounded-full overflow-hidden border border-border/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, type: "spring", stiffness: 50 }}
                    className="h-full bg-linear-to-r from-purple-500 to-indigo-500 rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-8 bg-linear-to-r from-transparent to-white/30" />
                  </motion.div>
                </div>

                {/* Subscores */}
                {hasScores && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-border/50">
                    {lang.subscores.map((sub) => (
                      <div
                        key={sub.label}
                        className="rounded-xl bg-bg-secondary/60 border border-border/50 p-3.5 min-w-0"
                      >
                        <p className="text-[11px] font-bold uppercase tracking-wider text-text-muted truncate">
                          {sub.label}
                        </p>
                        <p className="text-2xl font-bold text-text-primary leading-tight mt-1">
                          {sub.value}
                        </p>
                        <div className="h-1 w-full bg-border/60 rounded-full overflow-hidden mt-2.5">
                          <div
                            className="h-full bg-linear-to-r from-purple-500 to-indigo-500 rounded-full"
                            style={{ width: `${(sub.value / DET_MAX) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
