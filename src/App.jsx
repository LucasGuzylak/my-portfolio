import { useState } from 'react'
import './App.css'
import ContactForm from './ContactForm'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('frontend');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skillPosition, setSkillPosition] = useState(null);

  const skillDescriptions = {
    'react': ['Portfolio Website', 'CrewTrace'],
    'nextjs': ['AI Interviewer'],
    'html': ['Portfolio Website'],
    'css': ['Portfolio Website'],
    'javascript': ['Portfolio Website', 'Campus Craves', 'AI Interviewer'],
    'ts': ['Campus Craves', 'AI Interviewer'],
    'tailwind': ['Portfolio Website'],
    'vite': ['Portfolio Website'],
    'java': [],
    'py': ['Deep Learning Project'],
    'c': [],
    'cpp': [],
    'nodejs': ['CrewTrace'],
    'express': ['CrewTrace'],
    'mysql': ['Campus Craves'],
    'supabase': [],
    'swift': ['RAPID'],
    'react-native': ['Campus Craves'],
    'pytorch': ['Deep Learning Project'],
    'docker': [],
    'git': [],
    'github': [],
  };


  return (
    <div>
        <div id="Home"></div>
        <div className="navbar bg-base-100 shadow-sm fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-between rounded-full px-6" style={{width: "auto", maxWidth: "95%", gap: "12px"}}>
          <a href="#Home" className="btn btn-soft btn-info rounded-full h-[3rem]">Home</a>
          <a href="#Experience" className="btn btn-soft btn-info rounded-full h-[3rem]">Experience</a>
          <a href="#Projects" className="btn btn-soft btn-info rounded-full h-[3rem]">Projects</a>
          <a href="#Skills" className="btn btn-soft btn-info rounded-full h-[3rem]">Skills</a>
          <a href="#Education" className="btn btn-soft btn-info rounded-full h-[3rem]">Education</a>
          <a href="#Contact" className="btn btn-soft btn-info rounded-full h-[3rem]">Contact</a>
        </div>

      <main className="min-h-screen pt-24">
        <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", paddingTop: "180px", paddingBottom: "50px"}}>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "15px", width: "100%"}}>
          <div className="hi-font">Hi! I'm</div>
          <div className="name-font">Lucas Guzylak</div>
          <div className="avatar" style={{height: 200}}>
            <div className="w-24 rounded-full">
              <img src="/NewPortrait.jpeg"/>
              </div>
            </div>
          </div>

          <div style={{
            textAlign: "center", 
            maxWidth: "700px", 
            margin: "10px auto 20px", 
            fontSize: "18px", 
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
              <svg aria-label="GitHub logo" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
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
          <div id="Experience">
            <div className="my-projects">
              My Experience
            </div>
            <div style={{marginTop: "50px"}}/>
            {/* Front End Developer */}
            <div className="flex flex-col justify-center items-center mx-auto" style={{backgroundColor: "#3f90e0", maxWidth: "900px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", borderBottomLeftRadius: "0", borderBottomRightRadius: "0", padding: "40px"}}>   
              {/* Title and Logo - Centered at Top */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px", marginBottom: "25px" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                  <h3 style={{textAlign: "center", margin: 0, color: "black", fontSize: "42px", fontWeight: "900", fontFamily: "'Tourney', sans-serif"}}>Front End Developer</h3>
                  <img src="/WCO_logo.webp" style={{ width: "80px", height: "80px" }} alt="WCO logo"></img>
                </div>
                <p style={{margin: 0, color: "black", fontSize: "26px", fontWeight: "500", fontFamily: "Arial, Helvetica, sans-serif"}}>World Computing Organization</p>
                <p style={{margin: 0, color: "black", fontSize: "20px", fontWeight: "400", fontFamily: "Arial, Helvetica, sans-serif"}}>San Diego, CA • October 2025 to Present</p>
              </div>
              
              {/* Bullet Points - Middle */}
              <div style={{color: "black", fontSize: "22px", fontWeight: "500", textAlign: "left", width: "100%", maxWidth: "750px", marginBottom: "30px", fontFamily: "Arial, Helvetica, sans-serif"}}>
                <ul style={{ listStyle: "disc", paddingLeft: "25px", margin: 0, lineHeight: "1.8" }}>
                  <li style={{marginBottom: "12px"}}>Developing front-end features for an AI-powered interview platform that simulates internship and job screening processes, improving user experience and platform functionality.</li>
                  <li style={{marginBottom: "12px"}}>Working with a 6-person development team to build automated structured interviews featuring technical and behavioral question modules, ensuring smooth integration with backend AI systems.</li>
                  <li>Creating user interfaces that deliver actionable feedback to candidates, helping them prepare effectively for real-world interviews.</li>
                </ul>
              </div>
              
              {/* Skills - Bottom */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                <p style={{ margin: 0, color: "black", fontSize: "22px", fontWeight: "500", fontFamily: "Arial, Helvetica, sans-serif" }}>Skills:</p>
                <img src="https://skillicons.dev/icons?i=nextjs" className="mini-hoverable-img" style={{ height: "50px" }} alt="Next.js" />
                <img src="https://skillicons.dev/icons?i=ts" className="mini-hoverable-img" style={{ height: "50px" }} />
                <img src="https://skillicons.dev/icons?i=javascript" className="mini-hoverable-img" style={{ height: "50px" }} />
              </div>
            </div>

            {/* Mobile Application Developer - Susty */}
            <div className="flex flex-col justify-center items-center mx-auto" style={{backgroundColor: "#3f90e0", maxWidth: "900px", borderTopLeftRadius: "0", borderTopRightRadius: "0", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", padding: "40px"}}>   
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px", marginBottom: "25px" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                  <h3 style={{textAlign: "center", margin: 0, color: "black", fontSize: "42px", fontWeight: "900", fontFamily: "'Tourney', sans-serif"}}>Mobile Application Developer</h3>
                </div>
                <p style={{margin: 0, color: "black", fontSize: "26px", fontWeight: "500", fontFamily: "Arial, Helvetica, sans-serif"}}>Susty, Inc.</p>
                <p style={{margin: 0, color: "black", fontSize: "20px", fontWeight: "400", fontFamily: "Arial, Helvetica, sans-serif"}}>Remote • February 2026 to May 2026</p>
              </div>
              
              <div style={{color: "black", fontSize: "22px", fontWeight: "500", textAlign: "left", width: "100%", maxWidth: "750px", marginBottom: "30px", fontFamily: "Arial, Helvetica, sans-serif"}}>
                <ul style={{ listStyle: "disc", paddingLeft: "25px", margin: 0, lineHeight: "1.8" }}>
                  <li style={{marginBottom: "12px"}}>Increased feed responsiveness by 25% with infinite scrolling, optimized list rendering, and efficient state management for high-volume, real-time content.</li>
                  <li style={{marginBottom: "12px"}}>Built secure authentication workflows and a scalable social-graph system across 5+ core features, using optimized SQL queries to manage relational user data at scale.</li>
                  <li>Shipped features end to end with a startup engineering team, integrating frontend with backend APIs and maintaining containerized environments with Docker, Git, and GitHub workflows.</li>
                </ul>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                <p style={{ margin: 0, color: "black", fontSize: "22px", fontWeight: "500", fontFamily: "Arial, Helvetica, sans-serif" }}>Skills:</p>
                <img src="https://skillicons.dev/icons?i=react" className="mini-hoverable-img" style={{ height: "50px" }} alt="React" />
                <img src="https://skillicons.dev/icons?i=ts" className="mini-hoverable-img" style={{ height: "50px" }} alt="TypeScript" />
                <img src="https://skillicons.dev/icons?i=mysql" className="mini-hoverable-img" style={{ height: "50px" }} alt="SQL" />
                <img src="https://skillicons.dev/icons?i=docker" className="mini-hoverable-img" style={{ height: "50px" }} alt="Docker" />
              </div>
            </div>
        </div>
        
          <div id="Projects" style={{marginTop: "50px"}}>
            <div className="my-projects">
              My Projects
            </div>
            <div style={{marginTop: "50px"}}/>
            {/* Deep Learning Project */}
            <div className="flex flex-col justify-center items-center mx-auto" style={{backgroundColor: "#3f90e0", maxWidth: "900px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", borderBottomLeftRadius: "0", borderBottomRightRadius: "0", padding: "40px"}}>   
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{textAlign: "center", margin: 0, fontFamily: "'Tourney', sans-serif", fontWeight: "900", fontSize: "42px", color: "black"}}>Deep Learning Project</h3>
              </div>
              <div style={{color: "black", fontSize: "22px", fontWeight: "500", textAlign: "left", width: "100%", maxWidth: "750px", marginBottom: "30px", fontFamily: "Arial, Helvetica, sans-serif"}}>
                <ul style={{ listStyle: "disc", paddingLeft: "25px", margin: 0, lineHeight: "1.8" }}>
                  <li style={{marginBottom: "12px"}}>Self-directed deep learning project that detects breast cancer in real pathology slides using an attention-based Multiple Instance Learning model built in PyTorch.</li>
                  <li style={{marginBottom: "12px"}}>Reached 86.7% accuracy on held-out CAMELYON16 slides using only slide-level labels, and showed the model's attention focusing on tumor regions without patch-level annotations.</li>
                  <li>Learned the full pipeline step by step, from CNNs and transfer learning with ResNet18 to MIL, validating each technique on smaller datasets before applying it to real medical imaging data.</li>
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", marginBottom: "0px", width: "100%", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <p style={{ margin: 0, color: "black", fontSize: "22px", fontWeight: "500", fontFamily: "Arial, Helvetica, sans-serif" }}>Made with:</p>
                   <img src="https://skillicons.dev/icons?i=py" className="mini-hoverable-img" style={{ height: "50px" }} alt="Python" />
                   <img src="https://skillicons.dev/icons?i=pytorch" className="mini-hoverable-img" style={{ height: "50px" }} alt="PyTorch" />
                </div>
                <a href="https://github.com/LucasGuzylak/ml-cancer-proj" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                  <button className="btn btn-xl bg-black text-white border-black" style={{ margin: 0, verticalAlign: "top" }}>
                    <svg aria-label="GitHub logo" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                    GitHub
                  </button>
                </a>
              </div>
            </div>

            {/* CrewTrace Project */}
            <div className="flex flex-col justify-center items-center mx-auto" style={{backgroundColor: "#3f90e0", maxWidth: "900px", borderTopLeftRadius: "0", borderTopRightRadius: "0", borderBottomLeftRadius: "0", borderBottomRightRadius: "0", padding: "40px"}}>   
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{textAlign: "center", margin: 0, fontFamily: "'Tourney', sans-serif", fontWeight: "900", fontSize: "42px", color: "black"}}>CrewTrace</h3>
              </div>
              <div style={{color: "black", fontSize: "22px", fontWeight: "500", textAlign: "left", width: "100%", maxWidth: "750px", marginBottom: "30px", fontFamily: "Arial, Helvetica, sans-serif"}}>
                <ul style={{ listStyle: "disc", paddingLeft: "25px", margin: 0, lineHeight: "1.8" }}>
                  <li style={{marginBottom: "12px"}}>Built a live mapping dashboard at the Reboot the Earth Hackathon (UCSD) that unified wildfire data, weather forecasts, and AI-powered camera analysis for emergency decision-making.</li>
                  <li style={{marginBottom: "12px"}}>Cut external API costs and improved speed with a Node.js/Express backend that batches nearby crew data before calling weather and AI vision services.</li>
                  <li>Kept the dashboard operational through live service outages with automated fallbacks, while masking private API keys in logs.</li>
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", marginBottom: "0px", width: "100%", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <p style={{ margin: 0, color: "black", fontSize: "22px", fontWeight: "500", fontFamily: "Arial, Helvetica, sans-serif" }}>Made with:</p>
                   <img src="https://skillicons.dev/icons?i=react" className="mini-hoverable-img" style={{ height: "50px" }} alt="React" />
                   <img src="https://skillicons.dev/icons?i=nodejs" className="mini-hoverable-img" style={{ height: "50px" }} alt="Node.js" />
                </div>
                <a href="https://github.com/Sqrl34/RTE-UCSD-Project" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                  <button className="btn btn-xl bg-black text-white border-black" style={{ margin: 0, verticalAlign: "top" }}>
                    <svg aria-label="GitHub logo" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                    GitHub
                  </button>
                </a>
              </div>
            </div>

            {/* Campus Craves Project */}
            <div className="flex flex-col justify-center items-center mx-auto" style={{backgroundColor: "#3f90e0", maxWidth: "900px", borderTopLeftRadius: "0", borderTopRightRadius: "0", borderBottomLeftRadius: "0", borderBottomRightRadius: "0", padding: "40px"}}>   
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{textAlign: "center", margin: 0, fontFamily: "'Tourney', sans-serif", fontWeight: "900", fontSize: "42px", color: "black"}}>Campus Craves</h3>
              </div>
              <div style={{color: "black", fontSize: "22px", fontWeight: "500", textAlign: "left", width: "100%", maxWidth: "750px", marginBottom: "30px", fontFamily: "Arial, Helvetica, sans-serif"}}>
                <ul style={{ listStyle: "disc", paddingLeft: "25px", margin: 0, lineHeight: "1.8" }}>
                  <li style={{marginBottom: "12px"}}>Mobile app built with React Native and TypeScript that helps students discover and share the best food options on campus.</li>
                  <li style={{marginBottom: "12px"}}>Features real-time location-based recommendations to help students find nearby dining options.</li>
                  <li>Includes user reviews and a social feed to connect students with great dining experiences.</li>
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", marginBottom: "0px", width: "100%", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <p style={{ margin: 0, color: "black", fontSize: "22px", fontWeight: "500", fontFamily: "Arial, Helvetica, sans-serif" }}>Made with:</p>
                   <img src="https://skillicons.dev/icons?i=react" className="mini-hoverable-img" style={{ height: "50px" }} alt="React" />
                   <img src="https://skillicons.dev/icons?i=ts" className="mini-hoverable-img" style={{ height: "50px" }} />
                </div>
                <a href="https://github.com/CampusCraves/CampusCraves" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                  <button className="btn btn-xl bg-black text-white border-black" style={{ margin: 0, verticalAlign: "top" }}>
                    <svg aria-label="GitHub logo" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                    GitHub
                  </button>
                </a>
              </div>
            </div>

            {/* RAPID Project */}
            <div className="flex flex-col justify-center items-center mx-auto" style={{backgroundColor: "#3f90e0", maxWidth: "900px", borderTopLeftRadius: "0", borderTopRightRadius: "0", borderBottomLeftRadius: "0", borderBottomRightRadius: "0", padding: "40px"}}>   
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                <h3 style={{textAlign: "center", margin: 0, fontFamily: "'Tourney', sans-serif", fontWeight: "900", fontSize: "42px", color: "black"}}>RAPID: Fitness Tracker</h3>
                <img src="/Rapid-logo.png" className="hoverable-img" style={{ width: "80px", height: "80px", borderRadius: "18px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }} alt="Rapid logo"></img>
              </div>
              <div style={{color: "black", fontSize: "22px", fontWeight: "500", textAlign: "left", width: "100%", maxWidth: "750px", marginBottom: "30px", fontFamily: "Arial, Helvetica, sans-serif"}}>
                <ul style={{ listStyle: "disc", paddingLeft: "25px", margin: 0, lineHeight: "1.8" }}>
                  <li style={{marginBottom: "12px"}}>iOS fitness app built with Swift and SwiftUI that allows users to log workouts, track sets and reps, and monitor progress.</li>
                  <li style={{marginBottom: "12px"}}>Uses Core Data for local storage to maintain detailed fitness records.</li>
                  <li>Follows Apple's design guidelines for a clean and intuitive user experience.</li>
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", marginBottom: "0px", width: "100%", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <p style={{ margin: 0, color: "black", fontSize: "22px", fontWeight: "500", fontFamily: "Arial, Helvetica, sans-serif" }}>Made with:</p>
                   <img src="https://skillicons.dev/icons?i=swift" className="mini-hoverable-img" style={{ height: "50px" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <a href="https://apps.apple.com/us/app/rapid-fitness-tracker/id6752265158" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                    <img src="/appstore_logo.svg" className="hoverable-img" style={{ width: "180px", height: "60px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", display: "block" }} alt="Download on the App Store"></img>
                  </a>
                  <a href="https://github.com/LucasGuzylak/RapidFitnessTracker" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                    <button className="btn btn-xl bg-black text-white border-black" style={{ margin: 0, verticalAlign: "top" }}>
                      <svg aria-label="GitHub logo" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Portfolio Website Project */}
            <div className="flex flex-col justify-center items-center mx-auto" style={{backgroundColor: "#3f90e0", maxWidth: "900px", borderTopLeftRadius: "0", borderTopRightRadius: "0", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", marginBottom: "50px", padding: "40px"}}>   
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{textAlign: "center", margin: 0, fontFamily: "'Tourney', sans-serif", fontWeight: "900", fontSize: "42px", color: "black"}}>Portfolio Website</h3>
              </div>
              <div style={{color: "black", fontSize: "22px", fontWeight: "500", textAlign: "left", width: "100%", maxWidth: "750px", marginBottom: "30px", fontFamily: "Arial, Helvetica, sans-serif"}}>
                <ul style={{ listStyle: "disc", paddingLeft: "25px", margin: 0, lineHeight: "1.8" }}>
                  <li style={{marginBottom: "12px"}}>Personal portfolio website showcasing my projects, skills, and experience built with React, Vite, and Tailwind CSS.</li>
                  <li style={{marginBottom: "12px"}}>Features smooth scrolling navigation and interactive skill displays for an engaging user experience.</li>
                  <li>Clean and modern responsive design that effectively presents my work and background.</li>
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", marginBottom: "0px", width: "100%", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <p style={{ margin: 0, color: "black", fontSize: "22px", fontWeight: "500", fontFamily: "Arial, Helvetica, sans-serif" }}>Made with:</p>
                   <img src="https://skillicons.dev/icons?i=react" className="mini-hoverable-img" style={{ height: "50px" }} alt="React" />
                   <img src="https://skillicons.dev/icons?i=vite" className="mini-hoverable-img" style={{ height: "50px" }} alt="Vite" />
                   <img src="https://skillicons.dev/icons?i=javascript" className="mini-hoverable-img" style={{ height: "50px" }} />
                   <img src="https://skillicons.dev/icons?i=html" className="mini-hoverable-img" style={{ height: "50px" }} />
                   <img src="https://skillicons.dev/icons?i=css" className="mini-hoverable-img" style={{ height: "50px" }} />
                   <img src="https://skillicons.dev/icons?i=tailwind" className="mini-hoverable-img" style={{ height: "50px" }} />
                </div>
                <a href="https://github.com/LucasGuzylak/my-portfolio" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                  <button className="btn btn-xl bg-black text-white border-black" style={{ margin: 0, verticalAlign: "top" }}>
                    <svg aria-label="GitHub logo" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div id="Skills" style={{marginTop: 50, borderTopLeftRadius: 0, borderTopRightRadius: 0, paddingBottom: 50 }}>
            <div className="my-projects">
              My Skills
              <div style={{marginTop: "50px"}}/>

              <div style={{marginTop: "20px"}}>
                {/* Frontend */}
                {activeTab === 'frontend' && (
                  <div>
                    <div className="skills-grid">
                      {[
                        ['react', 'React'],
                        ['nextjs', 'Next.js'],
                        ['html', 'HTML'],
                        ['css', 'CSS'],
                        ['javascript', 'JavaScript'],
                        ['ts', 'TypeScript'],
                        ['tailwind', 'Tailwind CSS'],
                        ['vite', 'Vite'],
                      ].map(([id, label]) => (
                      <div 
                        key={id} 
                        className="skill-icon" 
                        onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const gridRect = e.currentTarget.closest('.skills-grid').getBoundingClientRect();
                          setSelectedSkill({id, label});
                          setSkillPosition({
                            left: rect.left - gridRect.left + rect.width / 2
                          });
                        }} 
                        style={{cursor: "pointer"}}
                      >
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
                  </div>
                )}

                {/* Backend */}
                {activeTab === 'backend' && (
                  <div>
              <div className="skills-grid">
                {[
                  ['java', 'Java'],
                  ['py', 'Python'],
                  ['c', 'C'],
                  ['cpp', 'C++'],
                  ['nodejs', 'Node.js'],
                  ['express', 'Express'],
                  ['mysql', 'SQL'],
                  ['supabase', 'Supabase'],
                      ].map(([id, label]) => (
                      <div 
                        key={id} 
                        className="skill-icon" 
                        onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const gridRect = e.currentTarget.closest('.skills-grid').getBoundingClientRect();
                          setSelectedSkill({id, label});
                          setSkillPosition({
                            left: rect.left - gridRect.left + rect.width / 2
                          });
                        }} 
                        style={{cursor: "pointer"}}
                      >
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
                  </div>
                )}

                {/* Mobile */}
                {activeTab === 'mobile' && (
                  <div>
                    <div className="skills-grid">
                      {[
                  ['swift', 'Swift'],
                        ['react', 'React Native'],
                ].map(([id, label]) => (
                      <div 
                        key={id} 
                        className="skill-icon" 
                        onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const gridRect = e.currentTarget.closest('.skills-grid').getBoundingClientRect();
                          setSelectedSkill({id: id === 'react' && label === 'React Native' ? 'react-native' : id, label});
                          setSkillPosition({
                            left: rect.left - gridRect.left + rect.width / 2
                          });
                        }} 
                        style={{cursor: "pointer"}}
                      >
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
                  </div>
                )}

                {/* Tools */}
                {activeTab === 'tools' && (
                  <div>
                    <div className="skills-grid">
                      {[
                        ['pytorch', 'PyTorch'],
                        ['docker', 'Docker'],
                        ['git', 'Git'],
                        ['github', 'GitHub'],
                      ].map(([id, label]) => (
                      <div 
                        key={id} 
                        className="skill-icon" 
                        onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const gridRect = e.currentTarget.closest('.skills-grid').getBoundingClientRect();
                          setSelectedSkill({id, label});
                          setSkillPosition({
                            left: rect.left - gridRect.left + rect.width / 2
                          });
                        }} 
                        style={{cursor: "pointer"}}
                      >
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
                  </div>
                )}
              </div>

              <div role="tablist" className="tabs tabs-box" style={{justifyContent: "center", marginTop: "50px"}}>
                <a 
                  role="tab" 
                  className={`tab ${activeTab === 'frontend' ? 'tab-active' : ''}`}
                  onClick={() => {
                    setActiveTab('frontend');
                    setSelectedSkill(null);
                    setSkillPosition(null);
                  }}
                >
                  Frontend
                </a>
                <a 
                  role="tab" 
                  className={`tab ${activeTab === 'backend' ? 'tab-active' : ''}`}
                  onClick={() => {
                    setActiveTab('backend');
                    setSelectedSkill(null);
                    setSkillPosition(null);
                  }}
                >
                  Backend
                </a>
                <a 
                  role="tab" 
                  className={`tab ${activeTab === 'mobile' ? 'tab-active' : ''}`}
                  onClick={() => {
                    setActiveTab('mobile');
                    setSelectedSkill(null);
                    setSkillPosition(null);
                  }}
                >
                  Mobile
                </a>
                <a 
                  role="tab" 
                  className={`tab ${activeTab === 'tools' ? 'tab-active' : ''}`}
                  onClick={() => {
                    setActiveTab('tools');
                    setSelectedSkill(null);
                    setSkillPosition(null);
                  }}
                >
                  Tools
                </a>
              </div>

            </div>
          </div>


          <div id="Education" style={{marginTop: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, paddingBottom: 50}}>
            <div className="my-projects">
              My Education
            </div>
            <div style={{marginTop: "50px"}}/>
            <div className="flex justify-center items-center gap-10 mx-auto" style={{backgroundColor: "#3f90e0", maxWidth: "900px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", padding: "40px", marginBottom: "30px"}}>
              <img src="/college-of-sciences-vert-1color-black-rgb.png"
                style={{width: "300px", height: "auto", position: "absolute", left: "18%"}} 
                alt="College of Sciences Logo"/>
              <div className="text-left" style={{color: "black", fontSize: "30px", marginLeft: "400px"}}>
                <h4>Pursuing a Bachelor of Science</h4>
                <h5>San Diego State University</h5>
                <h5>Graduating in 2028</h5>
                <h5>GPA: 3.8</h5>
                <h5>Major in Computer Science</h5>
                <h5>Minor in Mathematics</h5>
                <h5>Dean's List - All Semesters</h5>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto" style={{backgroundColor: "#3f90e0", maxWidth: "900px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", padding: "40px", marginBottom: "30px"}}>
              <div className="text-center" style={{color: "black", fontSize: "24px", width: "100%"}}>
                <h3 style={{margin: "0 0 15px 0", fontSize: "32px", fontWeight: "700"}}>Certificate of Excellence Award</h3>
                <p style={{margin: "0 0 20px 0", fontSize: "20px", fontWeight: "500"}}>Awarded for earning the highest grade in Computer Organization</p>
              </div>
              <img src="/Certificate_of_Excellence_Award_Lucas_Guzylak.png" alt="Certificate of Excellence Award" style={{maxWidth: "100%", width: "100%", height: "auto"}} />
            </div>
          </div>

          <div id="Contact" style={{marginTop: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, paddingBottom: 50}}>
            <div className="my-projects">
              Contact Me
            </div>
            <h4 style={{color: "black"}}>Please contact me at&nbsp;
              <a href="lucasguzy11@gmail.com" style={{color: "#004BA8"}}>
              lucasguzy11@gmail.com
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
