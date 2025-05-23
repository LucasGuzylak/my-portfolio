import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
        <div id="Home" style={{ paddingTop:'100px', marginTop:'-100px'}}></div>
        <div className="navbar bg-base-100 shadow-sm fixed top-1/30 left-1/2 -translate-x-1/2 w-1/3 z-50 flex justify-between rounded-full">
          <a href="#Home" className="btn btn-soft btn-info rounded-full h-[3rem]">Home</a>
          <a href="#Projects" className="btn btn-soft btn-info rounded-full h-[3rem]">Projects</a>
          <a href="#Skills" className="btn btn-soft btn-info rounded-full h-[3rem]">Skills</a>
          <a href="#Experience" className="btn btn-soft btn-info rounded-full h-[3rem]">Experience</a>
          <a href="#Education" className="btn btn-soft btn-info rounded-full h-[3rem]">Education</a>
        </div>

      <main className="min-h-screen pt-24">
        <div className="newcontainer" style={{position: "relative"}}>
          <div className="hi-font">Hi! I'm</div>
          <div className="name-font">Lucas Guzylak</div>
          <div className="avatar" style={{position: "absolute", right: 20}}>
            <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
        </div>
        

        <a href = "https://github.com/LucasGuzylak">
          <img src="/github-mark-white.png" alt="GitHub profile for LucasGuzylak"
          width={50} height={50} style={{position: "fixed", bottom: 20, left: 20}}/>
        </a>
        <a href = "https://www.linkedin.com/in/lguzylak/">
          <img src="/InBug-White.png" alt="LinkedIn profile for LucasGuzylak"
          width={50} height={50} style={{position: "fixed", bottom: 18, left: 100}}/>
        </a>

        <div id="Projects" style={{height: '10px'}}></div>

        <div className="next-screen">
          <div className="my-projects">
            My Projects
          </div>
        </div>

        <div id="Skills" className="next-screen" style={{marginTop: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
          <div className="my-projects">
            My Skills
          </div>
        </div>

        <div id="Experience" className="next-screen" style={{marginTop: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
          <div className="my-projects">
            My Experience
          </div>
        </div>

        <div id="Education" className="next-screen" style={{marginTop: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, paddingBottom: 50}}>
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
        </main>
    </div>
  )
}

export default App
