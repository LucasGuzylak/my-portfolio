import { useRef, useState } from 'react'
import './App.css'
import ContactForm from './ContactForm'

const GITHUB_PATH = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z";

function GitHubIcon({ size = 40 }) {
  return (
    <svg aria-label="GitHub logo" width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d={GITHUB_PATH}></path></svg>
  );
}

const experience = [
  {
    title: 'Research Assistant',
    org: 'AI4Business Lab, SDSU Research Foundation',
    meta: 'San Diego, CA • September 2026 to Present',
    bullets: [
      'Showed how near-invisible pixel changes (FGSM and PGD attacks) fool image classifiers, cutting CNN accuracy on MNIST and Fashion-MNIST from 85% to about 10%, with PGD stronger at every attack size.',
      'Studied prompt injection, where hidden instructions in a document take over an AI agent: in a controlled test, tampered documents hijacked the agent 100% of the time vs 0% for clean ones.',
      'Build Python and LangGraph AI agents that resist prompt injection and memory poisoning by checking tool calls before they run, sanitizing outputs, and requiring human approval for critical actions.',
    ],
    skills: [['py', 'Python'], ['pytorch', 'PyTorch']],
  },
  {
    title: 'Founder and President',
    logo: '/Devs4Impact_logo.jpg',
    org: 'Devs For Impact, World Computing Organization Chapter at SDSU',
    meta: 'San Diego, CA • August 2026 to Present',
    bullets: [
      'Founded a chapter building free software for nonprofits, leading a five-person executive board and recruiting 10 student developers, 3 of whom also serve as directors, for two client projects.',
      'Run Agile development across both teams with sprint planning, code reviews, and a local, staging, and production release process, scoped to a December 2026 client handoff.',
      'Lead builds of a PHP WordPress plugin matching older adults with affordable housing for ElderHelp of San Diego and a relational database for Community Cat Foundation tracking cat intake, medical, and adoption records.',
    ],
    skills: [['php', 'PHP'], ['wordpress', 'WordPress'], ['mysql', 'SQL'], ['git', 'Git']],
  },
];

const projects = [
  {
    title: 'Second Look',
    summary: 'AI tool that flags possible fraud in advisor call transcripts, built in 24 hours at the LPL Financial hackathon.',
    meta: 'LPL Financial University Hackathon • October 2026',
    bullets: [
      'Co-built an AI fraud-detection tool for financial advisors in 24 hours on a team of three, selected from about 350 applicants (160 students, 55 universities), and pitched to LPL Financial and AWS judges.',
      'Designed an LLM pipeline where Claude scores 5 warning signs per call transcript, code verifies every cited quote, and Python rules set risk, with advisor approval required before any action.',
      'Secured the system with least-privilege IAM, Bedrock Guardrails masking SSNs and account numbers, and rate limiting with retries, failing safe to “review manually” instead of a false all-clear.',
    ],
    skills: [['py', 'Python'], ['aws', 'AWS']],
    github: 'https://github.com/Sqrl34/LPL-Hackathon-2026',
  },
  {
    title: 'CrewTrace',
    summary: 'Wildfire response dashboard combining live fire, weather, and AI camera data, built in 48 hours at a UCSD hackathon.',
    meta: 'Reboot the Earth Hackathon (UCSD) • May 2026',
    bullets: [
      'Shipped a full-stack wildfire response dashboard in 48 hours on a team of four, combining AI image analysis with real-time wildfire and weather data.',
      'Built a Node.js and Express service that batches and parallelizes external API calls, cutting cost and tail latency.',
      'Engineered a fault-tolerant fallback layer that kept the dashboard available when upstream services failed.',
    ],
    skills: [['react', 'React'], ['nodejs', 'Node.js'], ['express', 'Express']],
    github: 'https://github.com/Sqrl34/RTE-UCSD-Project',
  },
  {
    title: 'RAPID: iOS Fitness Tracker',
    summary: 'iOS app for logging workouts and tracking progress, published on the App Store.',
    logo: '/Rapid-logo.png',
    meta: 'App Store • September 2025',
    bullets: [
      'Built and published an iOS fitness tracker to the App Store, reaching 30+ active users and 300+ impressions.',
      'Designed the interface with SwiftUI components and animations to make logging workouts fast and simple.',
      'Implemented centralized state management that reliably persists workout history across sessions.',
    ],
    skills: [['swift', 'Swift']],
    appStore: 'https://apps.apple.com/us/app/rapid-fitness-tracker/id6752265158',
    github: 'https://github.com/LucasGuzylak/RapidFitnessTracker',
  },
  {
    title: 'Deep Learning Project',
    summary: 'PyTorch model that detects breast cancer in pathology slides, reaching 86.7% accuracy on CAMELYON16.',
    bullets: [
      'Self-directed deep learning project that detects breast cancer in real pathology slides using an attention-based Multiple Instance Learning model built in PyTorch.',
      "Reached 86.7% accuracy on held-out CAMELYON16 slides using only slide-level labels, and showed the model's attention focusing on tumor regions without patch-level annotations.",
      'Learned the full pipeline step by step, from CNNs and transfer learning with ResNet18 to MIL, validating each technique on smaller datasets before applying it to real medical imaging data.',
    ],
    skills: [['py', 'Python'], ['pytorch', 'PyTorch']],
    github: 'https://github.com/LucasGuzylak/ml-cancer-proj',
  },
  {
    title: 'Campus Craves',
    meta: 'Innovate 4 SDSU Hackathon • November 2025',
    summary: 'React Native app for finding and sharing the best food on campus.',
    bullets: [
      'Mobile app built with React Native and TypeScript that helps students discover and share the best food options on campus.',
      'Features real-time location-based recommendations to help students find nearby dining options.',
      'Includes user reviews and a social feed to connect students with great dining experiences.',
    ],
    skills: [['react', 'React Native'], ['ts', 'TypeScript']],
    github: 'https://github.com/CampusCraves/CampusCraves',
  },
  {
    title: 'Portfolio Website',
    summary: 'This website, built with React, Vite, and Tailwind CSS.',
    bullets: [
      'Personal portfolio website showcasing my projects, skills, and experience built with React, Vite, and Tailwind CSS.',
      'Features smooth scrolling navigation and interactive skill displays for an engaging user experience.',
      'Clean and modern responsive design that effectively presents my work and background.',
    ],
    skills: [['react', 'React'], ['vite', 'Vite'], ['javascript', 'JavaScript'], ['html', 'HTML'], ['css', 'CSS'], ['tailwind', 'Tailwind CSS']],
    github: 'https://github.com/LucasGuzylak/my-portfolio',
  },
];

const skillTabs = {
  frontend: [
    ['react', 'React'],
    ['nextjs', 'Next.js'],
    ['html', 'HTML'],
    ['css', 'CSS'],
    ['javascript', 'JavaScript'],
    ['ts', 'TypeScript'],
    ['tailwind', 'Tailwind CSS'],
    ['vite', 'Vite'],
  ],
  backend: [
    ['java', 'Java'],
    ['py', 'Python'],
    ['c', 'C'],
    ['cpp', 'C++'],
    ['php', 'PHP'],
    ['nodejs', 'Node.js'],
    ['express', 'Express'],
    ['mysql', 'SQL'],
    ['supabase', 'Supabase'],
  ],
  mobile: [
    ['swift', 'Swift'],
    ['react', 'React Native'],
  ],
  tools: [
    ['pytorch', 'PyTorch'],
    ['aws', 'AWS'],
    ['wordpress', 'WordPress'],
    ['docker', 'Docker'],
    ['git', 'Git'],
    ['github', 'GitHub'],
  ],
};

const coursework = [
  'Machine Learning', 'Artificial Intelligence', 'Data Structures', 'Computer Architecture',
  'Computer Organization', 'Advanced Programming Languages', 'Discrete Mathematics', 'Linear Algebra',
];

function SkillIcons({ label, skills }) {
  return (
    <div className="card-skills">
      <span>{label}</span>
      {skills.map(([id, name]) => (
        <img key={name} src={`https://skillicons.dev/icons?i=${id}`} className="mini-hoverable-img card-skill-icon" alt={name} title={name} />
      ))}
    </div>
  );
}

function EntryCard({ title, logo, org, meta, bullets, children }) {
  return (
    <div className="entry-card">
      <div className="entry-header">
        <div className="entry-title-row">
          <h3 className="entry-title">{title}</h3>
          {logo && <img src={logo} className="entry-logo" alt={`${title} logo`} />}
        </div>
        {org && <p className="entry-org">{org}</p>}
        {meta && <p className="entry-meta">{meta}</p>}
      </div>
      <ul className="entry-bullets">
        {bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
      {children}
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [openProject, setOpenProject] = useState(null);
  const projectDialog = useRef(null);

  const openProjectModal = (project) => {
    setOpenProject(project);
    projectDialog.current.showModal();
  };

  return (
    <div>
        <div id="Home"></div>
        <div className="navbar bg-base-100 shadow-sm fixed top-4 left-1/2 -translate-x-1/2 z-50 flex rounded-full" style={{width: "auto", maxWidth: "95%", gap: "var(--nav-gap)", paddingLeft: "var(--nav-btn-pad-x)", paddingRight: "var(--nav-btn-pad-x)"}}>
          {[
            ['#Home', 'Home'],
            ['#Experience', 'Experience'],
            ['#Projects', 'Projects'],
            ['#Skills', 'Skills'],
            ['#Education', 'Education'],
            ['#Contact', 'Contact'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="btn btn-soft btn-info rounded-full"
              style={{height: "var(--nav-btn-height)", fontSize: "var(--nav-font-size)", paddingLeft: "var(--nav-btn-pad-x)", paddingRight: "var(--nav-btn-pad-x)"}}
            >
              {label}
            </a>
          ))}
        </div>

      <main className="min-h-screen pt-24">
        <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", paddingTop: "var(--hero-top-pad)", paddingBottom: "50px"}}>
          <div style={{display: "flex", flexDirection: "var(--hero-flex-dir)", justifyContent: "center", alignItems: "center", gap: "15px", width: "100%"}}>
          <div className="hi-font">Hi! I'm</div>
          <div className="name-font">Lucas Guzylak</div>
          <div className="avatar" style={{height: "var(--avatar-size)"}}>
            <div className="w-24 rounded-full">
              <img src="/NewPortrait.jpeg" alt="Lucas Guzylak" draggable={false} style={{userSelect: "none"}}/>
              </div>
            </div>
          </div>

          <div style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "10px auto 20px",
            fontSize: "var(--fs-hero-intro)",
            lineHeight: "1.8",
            color: "#e2e8f0",
            padding: "0 30px",
            fontFamily: "'Tourney', sans-serif",
            fontWeight: "700"
          }}>
            I am a Computer Science student at San Diego State University with a strong foundation in software development, web, mobile applications, and machine learning. I am Passionate about creating intuitive and efficient digital experiences.
        </div>

          <div style={{display: "flex", gap: 20, justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
          <a href = "https://github.com/LucasGuzylak">
            <button className="btn btn-xl bg-black text-white border-black">
              <GitHubIcon />
                GitHub
            </button>
          </a>

          <a href = "https://www.linkedin.com/in/lguzylak/">
            <button className="btn btn-xl bg-[#0967C2] text-white border-[#0059b3]">
              <svg aria-label="LinkedIn logo" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
                LinkedIn
            </button>
          </a>
        </div>
        </div>

        <div className="next-screen">
          <section id="Experience" className="page-section">
            <div className="my-projects">My Experience</div>
            <div className="card-stack">
              {experience.map((job) => (
                <EntryCard key={job.title} {...job}>
                  <div className="card-footer">
                    <SkillIcons label="Skills:" skills={job.skills} />
                  </div>
                </EntryCard>
              ))}
            </div>
          </section>

          <section id="Projects" className="page-section">
            <div className="my-projects">My Projects</div>
            <div className="card-stack project-grid">
              {projects.map((project) => (
                <div
                  key={project.title}
                  role="button"
                  tabIndex={0}
                  className="entry-card project-card"
                  onClick={() => openProjectModal(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openProjectModal(project);
                    }
                  }}
                >
                  <div className="entry-header">
                    <div className="entry-title-row">
                      <h3 className="entry-title">{project.title}</h3>
                      {project.logo && <img src={project.logo} className="entry-logo" alt="" />}
                    </div>
                    {project.meta && <p className="entry-meta">{project.meta}</p>}
                  </div>
                  <p className="project-preview">{project.summary}</p>
                  <div className="card-footer">
                    <SkillIcons label="Made with:" skills={project.skills} />
                  </div>
                  <div className="project-actions">
                    <span className="project-more">View details</span>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <button className="btn bg-black text-white border-black project-gh-btn" tabIndex={-1}>
                          <GitHubIcon size={26} />
                          GitHub
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <dialog ref={projectDialog} className="modal" onClose={() => setOpenProject(null)}>
              {openProject && (
                <div className="modal-box project-modal">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost project-modal-close" aria-label="Close">✕</button>
                  </form>
                  <EntryCard {...openProject}>
                    <div className="card-footer">
                      <SkillIcons label="Made with:" skills={openProject.skills} />
                      <div className="card-links">
                        {openProject.appStore && (
                          <a href={openProject.appStore} target="_blank" rel="noopener noreferrer">
                            <img src="/appstore_logo.svg" className="hoverable-img" style={{ width: "150px", height: "50px", borderRadius: "8px", display: "block" }} alt="Download on the App Store" />
                          </a>
                        )}
                        {openProject.github && (
                          <a href={openProject.github} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-lg bg-black text-white border-black">
                              <GitHubIcon size={28} />
                              GitHub
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </EntryCard>
                </div>
              )}
              <form method="dialog" className="modal-backdrop">
                <button aria-label="Close">close</button>
              </form>
            </dialog>
          </section>

          <section id="Skills" className="page-section">
            <div className="my-projects">My Skills</div>
            <div className="skills-grid" style={{"--skill-count": skillTabs[activeTab].length}}>
              {skillTabs[activeTab].map(([id, label]) => (
                <div key={label} className="skill-icon">
                  <img
                    src={`https://skillicons.dev/icons?i=${id}`}
                    alt={label}
                    title={label}
                    className="hoverable-img"
                  />
                  <div className="skill-label">{label}</div>
                </div>
              ))}
            </div>

            <div role="tablist" className="tabs tabs-box" style={{justifyContent: "center", marginTop: "40px", width: "fit-content", marginLeft: "auto", marginRight: "auto"}}>
              {[
                ['frontend', 'Frontend'],
                ['backend', 'Backend'],
                ['mobile', 'Mobile'],
                ['tools', 'Tools'],
              ].map(([key, label]) => (
                <a
                  key={key}
                  role="tab"
                  className={`tab ${activeTab === key ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  {label}
                </a>
              ))}
            </div>
          </section>

          <section id="Education" className="page-section">
            <div className="my-projects">My Education</div>
            <div className="card-stack">
              <div className="entry-card edu-card">
                <img src="/college-of-sciences-vert-1color-black-rgb.png" className="edu-logo" alt="College of Sciences Logo"/>
                <div className="edu-details">
                  <h3 className="entry-title">San Diego State University</h3>
                  <p className="entry-org">Bachelor of Science in Computer Science, Minor in Mathematics</p>
                  <p className="entry-meta">Expected Dec 2027 • GPA: 3.8</p>
                  <p className="edu-label">Relevant Coursework</p>
                  <div className="chip-row">
                    {coursework.map((c) => <span key={c} className="chip">{c}</span>)}
                  </div>
                  <p className="edu-label">Awards</p>
                  <ul className="entry-bullets">
                    <li>Dean's List (all semesters)</li>
                    <li>Certificate of Excellence in Computer Organization</li>
                  </ul>
                </div>
              </div>
              <div className="entry-card">
                <div className="entry-header">
                  <h3 className="entry-title">Certificate of Excellence Award</h3>
                  <p className="entry-meta">Awarded for earning the highest grade in Computer Organization</p>
                </div>
                <img src="/Certificate_of_Excellence_Award_Lucas_Guzylak.png" alt="Certificate of Excellence Award" style={{width: "100%", height: "auto", borderRadius: "8px"}} />
              </div>
            </div>
          </section>

          <div id="Contact" style={{marginTop: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, paddingBottom: 50, paddingTop: 50}}>
            <div className="my-projects">
              Contact Me
            </div>
            <h4 style={{color: "black", padding: "0 16px"}}>Please contact me at&nbsp;
              <a href="mailto:lucasguzylak@gmail.com" style={{color: "#004BA8"}}>
              lucasguzylak@gmail.com
              </a>
            &nbsp;or through this form.</h4>
            <ContactForm></ContactForm>
          </div>
        </div>

        </main>
    </div>
  )
}

export default App
