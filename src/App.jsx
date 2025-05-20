import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <main>
        
        
        <div className="newcontainer">
          <div className="hi-font">Hi! I'm</div>
          <div className="name-font">Lucas Guzylak</div>
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
