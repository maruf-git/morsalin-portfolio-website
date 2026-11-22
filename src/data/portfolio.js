/**
 * Portfolio Data — Single Source of Truth
 * All content extracted from Md. Morsalin's academic CV.
 * Modify this file to update any section of the website.
 */

// ─── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Md. Morsalin",
  title: "EEE Researcher & Engineer",
  roles: [
    "Electrical & Electronic Engineer",
    "Renewable Energy Researcher",
    "IEEE Student Member",
    "Power Electronics Enthusiast",
    "HEV Researcher",
  ],
  location: "Dinajpur-5200, Bangladesh",
  email: "mdmorsalin.hstu@gmail.com",
  phone: "(+880) 1616931396",
  linkedin: "https://www.linkedin.com/in/mdmorsalinhstu/",
  linkedinHandle: "/mdmorsalinhstu",
  researchgate: "https://www.researchgate.net/profile/Md-Morsalin-7",
  researchgateHandle: "/profile/Md-Morsalin-7",
  // Research Profile Links
  googleScholar: "https://scholar.google.com/citations?user=a-vhwUwAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0007-1398-5418",
  orcidId: "0009-0007-1398-5418",
  scopus: "https://www.scopus.com/authid/detail.uri?authorId=60128929700",
  scopusId: "60128929700",
  webOfScience: "https://www.webofscience.com/wos/author/record/NDS-9522-2025",
  webOfScienceId: "NDS-9522-2025",
};

// ─── Summary ──────────────────────────────────────────────────────────────────
export const summary =
  "B.Sc.(Engineering) graduate in Electrical and Electronic Engineering at Hajee Mohammad Danesh Science and Technology University, with a strong academic record (CGPA 3.843 / 4.00). Passionate about research in renewable-integrated power system stability, metaheuristic optimization-based control of grid-connected converters, and power system protection and control. Skilled in MATLAB, Python, Simulink, PSCAD, SCAPS-1D and OriginPro; actively engaged in research projects with faculty members and collaborators. Dedicated to continuous learning and innovation, with aspirations for higher studies.";

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "Bachelor of Science (Engineering)",
    field: "Electrical and Electronic Engineering",
    institution: "Hajee Mohammad Danesh Science and Technology University",
    location: "Dinajpur-5200, Bangladesh",
    duration: "Academic Session: 2021 – 2024",
    result: "CGPA 3.843 / 4.00 · Ranked 1st in the batch",
    status: "Completed",
    graduated: "September 2026",
    thesis:
      "THD Minimization of a Cascaded H-Bridge Multilevel Inverter using Metaheuristic Optimization Algorithms",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    role: "Industrial Training",
    organization: "Sympa Solar Power Limited",
    department: "",
    duration: "June 2026 – July 2026",
    credential:
      "https://drive.google.com/file/d/1ZCTimNRDsQ9Cx4fpgn66OXa7vBV7cq3V/view?usp=sharing",
    type: "Industrial",
  },
  {
    role: "Research Intern",
    organization: "UniV",
    department: "Research and Development (Science School) Unit",
    duration: "May 2025 – November 2025",
    credential:
      "https://drive.google.com/file/d/1-t1s77vZGojbSeqFGEq8CUKxIZ1ye3fG/view?usp=sharing",
    type: "Research",
  },
];

// ─── Research Interests ───────────────────────────────────────────────────────
export const researchInterests = [
  { label: "Renewable Integrated Power System Stability", icon: "⚡" },
  { label: "Intelligent & Metaheuristic Optimization-Based Control of Grid-Connected Converters", icon: "🏗️" },
  { label: "Power System Protection and Control", icon: "🛡️" },
  { label: "Hybrid Electric Vehicle (HEV)", icon: "🔋" },
  { label: "Perovskite Solar Cells", icon: "☀️" },
];

// ─── Technical Skills ─────────────────────────────────────────────────────────
export const technicalSkills = [
  {
    category: "Programming Languages",
    skills: ["MATLAB", "Python", "C", "C++"],
  },
  {
    category: "Simulation Tools",
    skills: ["Simulink", "PSCAD", "SCAPS-1D"],
  },
  {
    category: "Analysis & Plotting",
    skills: ["OriginPro", "MS Excel"],
  },
  {
    category: "Writing Tools",
    skills: ["LaTeX", "MS Word", "PowerPoint"],
  },
];

// ─── Publications ─────────────────────────────────────────────────────────────
export const publications = [
  {
    id: 1,
    authors:
      "Mohammed A. Albadrani, Ragab A. Sayed, Sabry Allam, Md. Morsalin, Hossam Youssef Hegazy, Samia Abdel Fattah, and Mohamed H. Abdelati",
    title:
      "Performance Comparison of Intelligent Energy Management Strategies for Hybrid Electric Vehicles with Photovoltaic Fuel Cell and Battery Integration",
    journal: "Batteries",
    details: "Vol. 12, No. 147, 2026 · Q1, SCI",
    doi: "https://www.mdpi.com/2313-0105/12/4/147",
    doiText: "10.3390/batteries12040147",
    status: "published",
    isFirstAuthor: false,
  },
  {
    id: 2,
    authors:
      "Md. Morsalin, Ragab A. Sayed, Md. Sazedur Rahman, Md. Ferdous Wahid, Mohammad Salah",
    title:
      "Performance Investigation and Efficiency Enhancement of Eco-friendly Tin-based CH₃NH₃SnI₃ Perovskite Solar Cell Via SCAPS-1D",
    journal: "IIUM Engineering Journal",
    details: "Vol. 27, No. 1, 2026 · Q3, SCI",
    doi: "https://doi.org/10.31436/iiumej.v27i1.3898",
    doiText: "10.31436/iiumej.v27i1.3898",
    status: "published",
    isFirstAuthor: true,
  },
  {
    id: 9,
    authors:
      "Ragab A. Sayed, Sabry Allam, Md. Morsalin*, and Mohammad Salah",
    title:
      "Theoretical Analysis of the Performance of a Hybrid Fuel Cell/Battery Powertrain Test Bench for Automotive Applications",
    journal:
      "2025 IEEE International Conference on Power, Electrical, Electronics and Industrial Applications (PEEIACON)",
    details: "Southeast University (SEU), Dhaka, Bangladesh, December 4–5, 2025",
    doi: "https://ieeexplore.ieee.org/document/11751036",
    doiText: "10.1109/PEEIACON69360.2025.11751036",
    status: "published",
    isFirstAuthor: false,
    isCorresponding: true,
  },
  {
    id: 3,
    authors:
      "Rony Tota, Tarikul Islam Tasin, Shak Mahmudul Hasan, Md. Morsalin, Md. Zamil Sultan, Md. Muien Ahmed Arnob, Mehedi Hasan Tanim, Najiba Abedin Sajan",
    title:
      "Performance Enhancement of Lead-Free K₂TiI₆-Based Perovskite Solar Cells Using SCAPS-1D Simulation Study",
    journal: "Journal of Materials Science and Chemical Engineering",
    details: "Vol.13 No.10, Oct 2025",
    doi: "https://doi.org/10.4236/msce.2025.1310002",
    doiText: "10.4236/msce.2025.1310002",
    status: "published",
    isFirstAuthor: false,
  },
  {
    id: 4,
    authors:
      "Md. Sazedur Rahman, Ibnul Zarrah, Md. Morsalin, Md. Moshiur Rahman, Pritom Mojumder",
    title:
      "Area-Efficient FPGA Implementation of Elliptic Curve Point Multiplication for Cryptography",
    journal:
      "2025 2nd International Conference on Next-Generation Computing, IoT and Machine Learning (NCIM)",
    details: "Gazipur, Bangladesh, 2025, pp. 1–5 · SCI",
    doi: "https://doi.org/10.1109/NCIM65934.2025.11160183",
    doiText: "10.1109/NCIM65934.2025.11160183",
    status: "published",
    isFirstAuthor: false,
  },
  {
    id: 8,
    authors:
      "Rony Tota, Tarikul Islam Tasin, Md. Morsalin*, Ragab A. Sayed, Sheeraz Iqbal, Shak Mahmudul Hasan, Md. Zamil Sultan, and Md. Muien Ahmed Arnob",
    title:
      "Performance Improvement of Lead-Free CsSnCl₃-Based Perovskite Solar Cell Using Multiple ETLs: A SCAPS-1D Simulation Study",
    journal: "Clean Technologies and Recycling",
    details: "2026, 6(1): 33–55",
    doi: "https://doi.org/10.3934/ctr.2026002",
    doiText: "10.3934/ctr.2026002",
    status: "published",
    isFirstAuthor: false,
    isCorresponding: true,
  },
  {
    id: 6,
    authors: "Rony Tota, Md. Morsalin, and Ragab A. Sayed",
    title:
      "Performance Investigation of Robust Fixed Diagonal Loading-Based Narrowband Near-Field Optimal Beamformer",
    journal: "JES. Journal of Engineering Sciences",
    details: "",
    doi: null,
    doiText: null,
    status: "under-review",
    isFirstAuthor: false,
  },
  {
    id: 7,
    authors:
      "Muhammad Usman, Babar Hussain, Md. Morsalin*, Muhammad Zeeshan, Muhammad Rasheed, Ragab A. Sayed, Ayman Flah",
    title:
      "Dynamic Stability Enhancement of High-Renewable Energy Penetrated Power System Using Coordinated PSS, ISFCL and STATCOM",
    journal: "",
    details: "",
    doi: null,
    doiText: null,
    status: "ongoing",
    isFirstAuthor: false,
    isCorresponding: true,
  },
  // {
  //   id: 8,
  //   authors: "Md. Morsalin et al.",
  //   title:
  //     "Performance Assessment of Perovskite Absorber CsSnI₃-based Solar Cells via SCAPS-1D and MATLAB",
  //   journal: "",
  //   details: "",
  //   doi: null,
  //   doiText: null,
  //   status: "ongoing",
  //   isFirstAuthor: true,
  // },
  // {
  //   id: 9,
  //   authors: "Md. Morsalin et al.",
  //   title:
  //     "A Comprehensive Performance Analysis of an Eco-Friendly Cs₂AgAuBr₆-Based Double Perovskite Solar Cells: DFT And SCAPS-1D Simulation Approach",
  //   journal: "",
  //   details: "",
  //   doi: null,
  //   doiText: null,
  //   status: "ongoing",
  //   isFirstAuthor: true,
  // },
  // {
  //   id: 10,
  //   authors: "Md. Morsalin et al.",
  //   title:
  //     "An extensive charge transport layer optimization of eco-friendly Sn-based Cs₂AgInBr₆ double perovskite solar cells via SCAPS-1D",
  //   journal: "",
  //   details: "",
  //   doi: null,
  //   doiText: null,
  //   status: "ongoing",
  //   isFirstAuthor: true,
  // },
];

// ─── Conferences ──────────────────────────────────────────────────────────────
export const conferences = [
  {
    id: 1,
    authors: "Md. Morsalin, Md. Sazedur Rahman, Md. Ferdous Wahid",
    title:
      "Performance analysis of WSe₂-based heterojunction solar cell with non-toxic ZnSe buffer layer: A numerical simulation approach",
    event: "Global Students Research (GSR) Conference",
    date: "February 4–6, 2025",
    location: "KFUPM, Dhahran, Saudi Arabia",
    credential:
      "https://drive.google.com/file/d/1OMKsW6HcXyqiVds4aJWq6A6tWaWqo_5f/view?usp=sharing",
    isFirstAuthor: true,
  },
  {
    id: 2,
    authors: "Ragab A. Sayed, Sabry Allam, Md. Morsalin, Mohammad Salah",
    title:
      "Theoretical Analysis of the Performance of a Hybrid Fuel Cell/Battery Powertrain Test Bench for Automotive Applications",
    event:
      "2025 IEEE International Conference on Power, Electrical, Electronics and Industrial Applications (PEEIACON)",
    date: "04–05 December 2025",
    location: "Southeast University (SEU), Dhaka, Bangladesh",
    credential:
      "https://drive.google.com/file/d/18JHvv-Z_DAoZSEQohRiVCSHc6MGszrR4/view?usp=drive_link",
    isFirstAuthor: false,
  },
  {
    id: 3,
    authors: "Md. Morsalin, Ragab A. Sayed",
    title:
      "Optimizing the Energy Management System of a Photovoltaic Fuel Cell Battery Hybrid Electric Vehicle using PID Control System",
    event: "IEEE CS BDC Summer Symposium",
    date: "July 18–19, 2025",
    location: "HSTU, Dinajpur, Bangladesh",
    credential:
      "https://drive.google.com/file/d/1egNkrldsyzvGSbj5Q4OarRjPk0g4CV66/view?usp=sharing",
    isFirstAuthor: true,
  },
  {
    id: 4,
    authors: "Md. Morsalin, Md. Sazedur Rahman, Md. Ferdous Wahid",
    title:
      "Performance Analysis of WSe₂-based Thin-film Solar Cell with Non-toxic ZnSe Buffer Layer Using SCAPS-1D Simulation Approach",
    event:
      "First International Conference on Sustainable Energy Systems (ICoSES-2025)",
    date: "April 24–26, 2025",
    location: "El Jadida, Morocco",
    credential:
      "https://drive.google.com/file/d/1ee-EQ-xUp5mzvyZBrV5fpIqErZrdwUxu/view?usp=drive_link",
    isFirstAuthor: true,
  },
  {
    id: 5,
    authors: "Md. Sojibur Rahman, Md. Sazedur Rahman, Md. Morsalin",
    title:
      "Performance Analysis of Lead-free Cs₂PtI₆-Based Double Perovskite Solar Cell With and Without Hole Transporting Layer Using SCAPS-1D Simulation Software",
    event:
      "First International Conference on Sustainable Energy Systems (ICoSES-2025)",
    date: "April 24–26, 2025",
    location: "El Jadida, Morocco",
    credential: null,
    isFirstAuthor: false,
  },
];

// ─── Honors & Awards ──────────────────────────────────────────────────────────
export const honorsAwards = [
  {
    id: 5,
    title: "Dean's List Award",
    issuer: "Faculty of CSE, HSTU Dinajpur",
    event: "4th Year Academic Excellence — CGPA above 3.75 in both semesters",
    description:
      "Received for 4th year academic excellence, achieved CGPA above 3.75 in both semesters.",
    credential: null,
    year: "2026",
  },
  {
    id: 1,
    title: "Best Working Star Award",
    issuer: "UniV",
    event: "3rd International Poster Competition for Young Researchers 2025",
    description: "",
    credential:
      "https://drive.google.com/file/d/1vcuQvyLmbatyzCSCMqtBWFiNvyYG8_hF/view?usp=sharing",
    year: "2025",
  },
  {
    id: 2,
    title: "Conference and Travel Grant",
    issuer: "KFUPM, Saudi Arabia",
    event: "Global Students Research (GSR) Conference 2025",
    description: "",
    credential:
      "https://drive.google.com/file/d/16dUGTJjFF8XDZXjjOvnMCpQ1zxJmKsEd/view?usp=sharing",
    year: "2025",
  },
  {
    id: 3,
    title: "Dean's List Award",
    issuer: "Faculty of CSE, HSTU Dinajpur",
    event: "2nd Year Academic Excellence — CGPA above 3.75 in both semesters",
    description:
      "Received for 2nd year academic excellence, achieved CGPA above 3.75 in both semesters.",
    credential: null,
    year: "2024",
  },
  {
    id: 4,
    title: "Dean's List Award",
    issuer: "Faculty of CSE, HSTU Dinajpur",
    event: "1st Year Academic Excellence — CGPA above 3.75 in both semesters",
    description:
      "Received for 1st year academic excellence, achieved CGPA above 3.75 in both semesters.",
    credential:
      "https://drive.google.com/file/d/1jLkUrYLQTiT7wrGJ6sOVCUbEucjd1I_v/view?usp=drive_link",
    year: "2023",
  },
];

// ─── Leadership & Volunteering ────────────────────────────────────────────────
export const leadership = [
  {
    id: 5,
    organization: "GSR Conference 2026, KFUPM",
    position: "Global Ambassador",
    details: "",
    duration: "Sep 2026 – Oct 2026",
  },
  {
    id: 1,
    organization: "Venture Craft KFUPM",
    position: "Global Ambassador",
    details: "ID: 45",
    duration: "March 2026 – Present",
  },
  {
    id: 2,
    organization: "IEEE Power and Energy Society (PES) HSTU SBC",
    position: "Chair",
    details: "",
    duration: "Feb 2025 – Jan 2026",
  },
  {
    id: 3,
    organization: "IEEE Photonic Society HSTU SBC",
    position: "Vice Chair",
    details: "",
    duration: "Feb 2025 – Jan 2026",
  },
  {
    id: 4,
    organization: "IEEE PES DAY 2025",
    position: "Ambassador",
    details: "ID: IEEEPESDAY274",
    duration: "Mar 2025 – April 2025",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    title: "GSR Conference 2025",
    description: "Certificate of Appreciation",
    issuer: "KFUPM",
    issuedDate: "Feb 2025",
    link: "https://drive.google.com/file/d/16dUGTJjFF8XDZXjjOvnMCpQ1zxJmKsEd/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Simulink Onramp",
    description: "Core Simulink simulation fundamentals",
    issuer: "MathWorks",
    issuedDate: "Jan 2025",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=79afc0fb-374c-4838-af5d-22090602ce3e&",
  },
  {
    id: 3,
    title: "MATLAB Onramp",
    description: "Core MATLAB programming fundamentals",
    issuer: "MathWorks",
    issuedDate: "Dec 2024",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=b3ceb13e-1b33-41a6-a264-235710de87c7&",
  },
  {
    id: 4,
    title: "Intermediate Python",
    description: "Intermediate-level Python programming",
    issuer: "DataCamp",
    issuedDate: "Nov 2024",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/c61bd2221046f70c615c6725840ef85ab46bf520?raw=1",
  },
];

// ─── Professional Memberships ─────────────────────────────────────────────────
export const memberships = [
  {
    id: 1,
    organization: "IEEE (Institute of Electrical and Electronics Engineers)",
    type: "Student Member",
    duration: "Feb 2025 – Present",
    memberNumber: "101071134",
    link: "https://drive.google.com/file/d/1hXK4L8bXn0-eaWEEwsrvUCN0p2XOWEC3/view?usp=drive_link",
  },
  {
    id: 2,
    organization: "IEEE Power and Energy Society (PES)",
    type: "Member",
    duration: "Feb 2025 – Present",
    memberNumber: null,
    link: "https://drive.google.com/file/d/1lxGkcijR2fjA1Pr2Hd_plYsNqutak-4h/view?usp=drive_link",
  },
  {
    id: 3,
    organization: "IEEE Photonic Society",
    type: "Member",
    duration: "Feb 2025 – Dec 2026",
    memberNumber: null,
    link: "https://drive.google.com/file/d/1jId17bruTzJ242C89kFNOlo66dtgCQ9R/view?usp=drive_link",
  },
];

// ─── Seminars ─────────────────────────────────────────────────────────────────
export const seminars = [
  {
    id: 1,
    role: "Speaker",
    title:
      "GETTING STARTED WITH RESEARCH AT UNDERGRADUATE: Insights from the student-led Global Students Research (GSR) Conference",
    organizer: "IEEE HSTU SB",
    date: "April 24, 2025",
    location: "HSTU, Dinajpur-5200, Bangladesh",
  },
  {
    id: 2,
    role: "Mentor",
    title: "Solar Energy Research Using SCAPS-1D: Towards a Sustainable Future",
    organizer: "IEEE Power and Energy Society HSTU SBC",
    date: "April 9, 2026",
    location: "HSTU, Dinajpur-5200, Bangladesh",
  },
];

// ─── Languages ────────────────────────────────────────────────────────────────
export const languages = [
  {
    language: "English",
    proficiency: "Professional Working Proficiency",
    test: "Duolingo English Test (DET)",
    overall: 120,
    score: "DET 120 / 160",
    level: 75,
    subscores: [
      { label: "Reading", value: 130 },
      { label: "Listening", value: 125 },
      { label: "Writing", value: 120 },
      { label: "Speaking", value: 110 },
    ],
  },
  {
    language: "Bengali",
    proficiency: "Native",
    score: "Mother Tongue",
    level: 100,
  },
];

// ─── References ───────────────────────────────────────────────────────────────
export const references = [
  {
    id: 1,
    name: "Rony Tota",
    role: "B.Sc. Thesis Supervisor",
    title: "Assistant Professor",
    department: "Department of Electrical and Electronic Engineering (EEE)",
    faculty: "Faculty of Computer Science and Engineering (CSE)",
    institution: "Hajee Mohammad Danesh Science and Technology University",
    location: "Dinajpur-5200, Bangladesh",
    emails: ["ronytota@hstu.ac.bd", "ronytota98@gmail.com"],
    phone: "(+880) 1738778498",
  },
  {
    id: 2,
    name: "Md. Mizanur Rahman",
    role: "B.Sc. Thesis Co-Supervisor",
    title: "Associate Professor",
    department: "Department of Electrical and Electronic Engineering (EEE)",
    faculty: "Faculty of Computer Science and Engineering (CSE)",
    institution: "Hajee Mohammad Danesh Science and Technology University",
    location: "Dinajpur-5200, Bangladesh",
    emails: ["mizan.eee@hstu.ac.bd"],
    phone: "(+880) 1728291232",
  },
];

// ─── Navigation Links ─────────────────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Conferences", href: "#conferences" },
  { label: "Awards", href: "#awards" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];
