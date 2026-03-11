/**
 * Contact Section — Minimalist
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { personalInfo } from "@/data/portfolio";
import { Mail, Phone, Linkedin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) { toast.error("Please fill in all fields."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.ok && data.success) { toast.success("Message sent successfully."); setForm({ name: "", email: "", subject: "", message: "" }); }
      else toast.error(data.message || "Failed to send message.");
    } catch { toast.error("Network error. Please try again."); }
    finally { setLoading(false); }
  };

  return (
    <section id="contact" className="alt-bg relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] -z-10" />

      <div className="page-container section-pad">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Say Hello</p>
          <h2 className="section-heading">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-[15px] sm:text-[16px] font-medium text-text-secondary leading-relaxed">
              I am open to discussing research collaborations, academic opportunities, or inquiries about my work in <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-accent to-emerald-500">Renewable Energy</span> and <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-accent to-blue-500">Power Electronics</span>.
            </p>

            <div className="space-y-5 pt-8 border-t border-border/60">
              {[
                { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: Linkedin, label: "LinkedIn", value: personalInfo.linkedinHandle, href: personalInfo.linkedin },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group p-3 -ml-3 rounded-xl hover:bg-bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-bg-card border border-border/80 text-text-muted shadow-sm group-hover:text-white group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[12px] text-text-muted font-bold uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-[15px] font-bold text-text-primary group-hover:text-accent transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="clean-card p-6 sm:p-10 relative overflow-hidden group">
              {/* Card subtle border glow effect on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/0 to-emerald-500/0 group-hover:from-accent/5 group-hover:to-emerald-500/5 transition-colors duration-500 pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13.5px] font-bold text-text-secondary mb-2 cursor-pointer" htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required className="form-input" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-[13.5px] font-bold text-text-secondary mb-2 cursor-pointer" htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="form-input" placeholder="jane@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[13.5px] font-bold text-text-secondary mb-2 cursor-pointer" htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} required className="form-input" placeholder="Research Collaboration" />
                </div>
                <div>
                  <label className="block text-[13.5px] font-bold text-text-secondary mb-2 cursor-pointer" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} required className="form-input resize-none" placeholder="How can I help you?" />
                </div>
                
                <div className="pt-4">
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-70 group/btn relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                       {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" /> Send Message</>}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
