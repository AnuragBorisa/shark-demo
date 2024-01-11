import React from 'react'
import './MainPage.css'; // Importing the Tailwind CSS styles
import { Fragment } from 'react';
import logo from "../resources/brand-unreal-engine-svgrepo-com.svg"

const MainPage = () => {
  return (
    <Fragment>
    <section className="main-section">
        <div className='content'>
            <h1 className="main-heading">The Best Way To Learn <span className='gradient'>Cybersecurity Skills Online</span></h1>
            <p className="main-paragraph">
                Shark accessible, affordable training platform provides curated career paths, threat-informed training, and certification preparation for professionals at all levels.
            </p>
           
            <div className='buttons'>
            <button className="learn-button">Start Learning for Free</button>
            <button className="teams-button">Shark for Teams {">"}</button>
            </div>
            <span className="line"></span>
           
            <h2 className="trust-heading">Trusted by Leading Organizations</h2>
            <div className='brands'>
            <img src="" alt='logo' className='logo'></img>
            <img src= ""alt='logo'></img>
            <img src= "" alt='logo'></img>
            </div>
        </div>
        <form className='form'>
            <h1 className="form-heading">Create a free account to start exploring the platform.</h1>
            <div className='input-filed'>
            <input type='email' className="email-input"/>
            <button className="account-button">Create a free Account</button>
            </div>
           
            <div className="down-one">
            <h3 className="signup-heading">or sign up with</h3>
            <div className='signin-buttons'>
            <button className="google-button">google</button>
            <button className="apple-button">apple</button>
            <button className="microsoft-button">microsoft</button>
            </div>
            </div>
            <hr class="solid" />
            <div className='down-buttons'>
            <button className="signin-button">Sign in</button>
            <button className="sso-button">View all SSO options</button>
            </div>
        </form>
    </section>  
  
    </Fragment>    
    
  )
}

export default MainPage;