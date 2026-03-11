/**
 * Home Page — Portfolio Assembly
 * Renders all section components in order with Navbar and Footer.
 * All sections are lazy-loaded with scroll-triggered animations via framer-motion.
 */

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import ResearchInterests from "@/components/sections/ResearchInterests";
import TechnicalSkills from "@/components/sections/TechnicalSkills";
import Publications from "@/components/sections/Publications";
import Conferences from "@/components/sections/Conferences";
import HonorsAwards from "@/components/sections/HonorsAwards";
import Leadership from "@/components/sections/Leadership";
import Certifications from "@/components/sections/Certifications";
import Memberships from "@/components/sections/Memberships";
import Seminars from "@/components/sections/Seminars";
import Languages from "@/components/sections/Languages";
import References from "@/components/sections/References";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Sticky navigation bar */}
      <Navbar />

      <main>
        {/* 1. Full-screen animated hero with particles */}
        <Hero />

        {/* 2. Personal summary */}
        <About />

        {/* 3. Academic education timeline */}
        <Education />

        {/* 4. Research internship experience */}
        <Experience />

        {/* 5. Research interest tags */}
        <ResearchInterests />

        {/* 6. Programming languages, software tools, writing tools */}
        <TechnicalSkills />

        {/* 7. All publications with DOI links and status badges */}
        <Publications />

        {/* 8. Conference presentations worldwide */}
        <Conferences />

        {/* 9. Dean's List, Travel Grant, Best Star Award */}
        <HonorsAwards />

        {/* 10. IEEE leadership and volunteering */}
        <Leadership />

        {/* 11. MathWorks, DataCamp, and conference certifications */}
        <Certifications />

        {/* 12. IEEE Student Member, PES, Photonics */}
        <Memberships />

        {/* 13. Speaker seminars */}
        <Seminars />

        {/* 14. Language proficiency with progress bars */}
        <Languages />

        {/* 15. Academic references from HSTU faculty */}
        <References />

        {/* 16. Contact form → MongoDB API → sonner toast */}
        <Contact />
      </main>

      {/* Footer with quick links and social */}
      <Footer />
    </>
  );
}
