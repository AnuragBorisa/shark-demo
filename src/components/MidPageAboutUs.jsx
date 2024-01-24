import React from 'react'
import "./MidPageAboutUs.css"
import aboutusimg from "../resources/aboutus.png"

const MidPageAboutUs = () => {
  return (
   <section className='abt-us-pge'>
    <div className='abt-us-img'>
        <img src={aboutusimg} alt="img" className='abt-us-image'></img>
    </div>
    <div className='abt-us-cnt'>
        <h2>About us</h2>
        <h1>Unleashing Accessibility<br></br> in CyberSecurity<br></br> Education</h1>
        <p>Immerse yourself in the cutting-edge realm of cybersecurity with Shark Cybertech,a trailbilazer in the industry.Redefining learning through our Extreme Cybertech Live Training,we've garnered acclaim as pioneers.Our platform boasts immersive,real-time training experinces,surpassing traditional boundaries</p>
    </div>
   </section>
  )
}

export default MidPageAboutUs