import { useState } from 'react'
import './App.css'
import ContactForm from './ContactForm'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
        <div id="Home"></div>
        <div className="navbar bg-base-100 shadow-sm fixed top-1/30 left-1/2 -translate-x-1/2 w-1/3 z-50 flex justify-between rounded-full">
          <a href="#Home" className="btn btn-soft btn-info rounded-full h-[3rem]">Home</a>
          <a href="#Projects" className="btn btn-soft btn-info rounded-full h-[3rem]">Projects</a>
          <a href="#Skills" className="btn btn-soft btn-info rounded-full h-[3rem]">Skills</a>
          <a href="#Education" className="btn btn-soft btn-info rounded-full h-[3rem]">Education</a>
          <a href="#Contact" className="btn btn-soft btn-info rounded-full h-[3rem]">Contact</a>
        </div>

      <main className="min-h-screen pt-24">
        <div className="newcontainer" style={{position: "relative"}}>
          <div className="hi-font">Hi! I'm</div>
          <div className="name-font">Lucas Guzylak</div>
          <div className="avatar" style={{height: 200}}>
            <div className="w-24 rounded-full">
            <img src="/Portrait.jpeg"/>
            </div>
          </div>
        </div>

        <div style={{display: "flex", gap: 20, justifyContent: "center", alignItems: "center"}}>
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
        
        <div className= "next-screen">
          <div id="Projects">
            <div className="my-projects">
              My Projects
            </div>
            <div style={{marginTop: "50px"}}/>
            <div className="flex justify-center items-center gap-10 mx-auto" style={{backgroundColor: "#3f90e0", maxWidth: "900px"}}>   
              <div style={{paddingLeft: "20px", paddingTop: "20px", paddingBottom: "15px"}}>         
                <video width="300" style={{ marginRight: "100px", borderRadius: "20px" }} controls>
                  <source src="/Rapid_Demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div style={{color: "black", fontSize: "24px", fontWeight: "600", maxWidth: "500px", textAlign: "left", paddingRight: "20px"}}>
                <h3 style={{textAlign: "center"}}>Rapid Workout Tracker</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                  <p style={{ margin: 0 }}>Made with:</p>
                   <img src="https://skillicons.dev/icons?i=swift" className="mini-hoverable-img" style={{ height: "50px" }} />
                  </div>
                <p>🚧 This project is under construction!🚧</p>
                <p>Rapid is a workout and exercise tracker that can be used for any fitness routine.</p>
                <p>It lets users track the amount of reps, sets, or intervals for any workout of their choice.</p>
                <p>Users can look at their past workouts and progression charts.</p>
              </div>
            </div>
          </div>

          <div id="Skills" style={{marginTop: 50, borderTopLeftRadius: 0, borderTopRightRadius: 0, paddingBottom: 50 }}>
            <div className="my-projects">
              My Skills
              <div style={{marginTop: "50px"}}/>
              <div className="skills-grid">
                {[
                  ['java', 'Java'],
                  ['py', 'Python'],
                  ['cpp', 'C++'],
                  ['react', 'React'],
                  ['html', 'HTML'],
                  ['css', 'CSS'],
                  ['javascript', 'JavaScript'],
                  ['swift', 'Swift'],
                ].map(([id, label]) => (
                <div key={id} className="skill-icon">
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
          </div>


          <div id="Education" style={{marginTop: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, paddingBottom: 50}}>
            <div className="my-projects">
              My Education
            </div>
            <div style={{marginTop: "50px"}}/>
            <div className="flex justify-center items-center gap-10 mx-auto" style={{backgroundColor: "#3f90e0", maxWidth: "900px"}}>
              <img src="/college-of-sciences-vert-1color-black-rgb.png"
                style={{width: "300px", height: "auto", position: "absolute", left: "18%"}} 
                alt="College of Sciences Logo"/>
              <div className="text-left" style={{color: "black", fontSize: "30px", marginLeft: "400px"}}>
                <h4>Pursuing a Bachelor of Science</h4>
                <h5>San Diego State University</h5>
                <h5>Graduating in 2028</h5>
                <h5>GPA 3.8</h5>
                <h5>Major in Computer Science</h5>
                <h5>Dean's List - Fall 2024 & Spring 2025</h5>
              </div>
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
