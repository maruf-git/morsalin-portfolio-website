/**
 * Footer — Minimalist
 */

"use client";

import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio";

export default function Footer() {
  const half = Math.ceil(navLinks.length / 2);
  const col1 = navLinks.slice(0, half);
  const col2 = navLinks.slice(half);

  return (
    <footer className="bg-bg-card/50 backdrop-blur-md border-t border-border mt-20">
      <div className="page-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <h2 className="text-[16px] font-bold text-text-primary tracking-tight mb-4">
              Md. Morsalin
            </h2>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-6 max-w-sm">
              EEE Researcher currently pursuing B.Sc. in Electrical and Electronic Engineering at HSTU, Bangladesh.
            </p>
            
            <div className="flex gap-3">
              {[
                { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: "Phone", href: `tel:${personalInfo.phone}` },
                { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
                { icon: ExternalLink, label: "ResearchGate", href: personalInfo.researchgate },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-bg-secondary border border-border text-text-muted hover:text-text-primary hover:border-text-primary transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:gap-8">
            {[col1, col2].map((col, ci) => (
              <div key={ci}>
                {ci === 0 && <p className="text-[12px] font-semibold text-text-primary uppercase tracking-wider mb-5">Navigation</p>}
                {ci === 1 && <p className="text-[12px] font-semibold text-transparent uppercase tracking-wider mb-5 select-none" aria-hidden>Nav</p>}
                <ul className="space-y-3">
                  {col.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" }); }}
                        className="text-[14px] text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-text-muted">
            &copy; {new Date().getFullYear()} Md. Morsalin. All rights reserved.
          </p>
          <p className="text-[13px] text-text-muted">
            Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
