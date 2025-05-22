import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm fixed top-1/30 left-1/2 -translate-x-1/2 w-1/3 z-50 flex justify-between rounded-full">
          <a className="btn btn-soft btn-info rounded-full">Home</a>
          <a className="btn btn-soft btn-info rounded-full">Projects</a>
          <a className="btn btn-soft btn-info rounded-full">Languages</a>
          <a className="btn btn-soft btn-info rounded-full">Experience</a>
          <a className="btn btn-soft btn-info rounded-full">Academics</a>
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
        <div className="next-screen">
          <div className="my-projects">
            My Projects
          </div>
        </div>

        </main>
      <footer>
      </footer>
    </div>
  )
}

export default App
