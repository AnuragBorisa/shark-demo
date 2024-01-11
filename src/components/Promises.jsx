import React from 'react'
import rocket from "../resources/rocket-svgrepo-com.svg"
import pen from "../resources/pen-svgrepo-com.svg";
import puzzle from "../resources/game-svgrepo-com.svg";
import "./promises.css";
const Promises = () => {
  return (
    <section className="flex justify-center items-center  bg-black-100">
        <div className=" promises grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div className="  promise-card bg-black p-6 rounded-lg shadow-lg text-center">
            <img src={rocket} alt="rocket icon" className="mx-auto mb-4 w-16 h-16"/>
                <h1 >Launch Your Career</h1>
                <p>Start your cyber journey confidently with curated paths that teach the foundational concepts related to real, on-the-job skills.</p>
            </div>
            <div className="promise-card bg-black p-6 rounded-lg shadow-lg text-center">
                <img src={pen} alt="shield icon" className="mx-auto mb-4 w-16 h-16"/>
                <h1 >Get Certified</h1>
                <p>Ace the exam with certification prep content developed by industry-leading instructors. Test yourself with our practice exams.</p>
            </div>
            <div className="promise-card bg-black p-6 rounded-lg shadow-lg text-center">
                <img src={puzzle} alt="puzzle icon" className="mx-auto mb-4 w-16 h-16"/>
                <h1>Upskill and Practice</h1>
                <p>Master hands-on skills and familiarize yourself with the latest vulnerabilities and threats so you can prepare for real-world attacks.</p>
            </div>
        </div> 
    </section>
  )
}

export default Promises;