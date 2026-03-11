/**
 * Hero Section — Modern, Colorful, Smart Layout
 */

"use client";

import { Mail, ArrowRight, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="page-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-success-light text-success text-[13px] font-bold rounded-full mb-8 border border-success/20 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
              </span>
              Open to Research Collaborations
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-text-primary via-text-primary to-text-muted tracking-tight leading-[1.1] mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-indigo-500">
                Md. Morsalin
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl font-medium">
              Researcher specializing in <span className="font-bold text-text-primary">Renewable Energy</span>, <span className="font-bold text-text-primary">Power Electronics</span>, and <span className="font-bold text-text-primary">Hybrid Electric Vehicles</span>.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <div className="badge">📌 Dinajpur, Bangladesh</div>
              <div className="badge">🎓 HSTU — EEE</div>
              <div className="badge">🏆 CGPA 3.84 / 4.00</div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a href="#publications" className="btn-outline">
                View Publications
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-14 text-[14px] font-bold text-text-muted">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-text-primary hover:-translate-y-0.5 flex items-center gap-1.5 transition-all">
                Email <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:-translate-y-0.5 flex items-center gap-1.5 transition-all">
                LinkedIn <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href={personalInfo.researchgate} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 hover:-translate-y-0.5 flex items-center gap-1.5 transition-all">
                ResearchGate <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none flex justify-center lg:justify-end"
          >
            {/* Colorful Glow Background behind Photo */}
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-emerald-400 rounded-3xl rotate-3 scale-105 opacity-20 blur-2xl animate-pulse" />
            <div className="absolute inset-0 bg-linear-to-tr from-blue-600 to-indigo-500 rounded-3xl -rotate-3 scale-105 opacity-30" />
            
            {/* Photo Container */}
            <div className="relative z-10 w-full aspect-4/5 sm:aspect-square lg:aspect-4/5 max-w-[400px] rounded-3xl overflow-hidden border-2 border-white/20 dark:border-white/10 shadow-2xl bg-bg-secondary">
              
              {/* Fallback pattern while waiting for real image */}
              <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-bg-secondary to-bg-card">
                <span className="text-text-muted font-medium text-sm text-center px-4">
                  {/* USER: Replace the src below with your actual photo path (e.g. /images/morsalin.jpg) placed in the public folder */}
                  Please upload your photo to <br/><code className="text-accent bg-accent-light px-1 py-0.5 rounded">public/morsalin-photo.jpg</code>
                </span>
              </div>

              {/* Real Image component ready to use */}
              <Image 
                src="/white_morsalin.png" 
                // src="/blue_morsalin.png" 
                // src="/cafe1_morsalin.jpg" 
                alt="Md. Morsalin"
                fill
                className="object-cover object-center relative z-20"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                onError={(e) => {
                  // Hide broken image icon if image doesn't exist yet
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
