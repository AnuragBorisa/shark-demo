import React from "react";
import rocket from "../resources/rocket-svgrepo-com.svg";
import pen from "../resources/pen-svgrepo-com.svg";
import puzzle from "../resources/game-svgrepo-com.svg";
import "./promises.css";
const Promises = () => {
  return (
    <section className=" promises-container promises-bg flex justify-center items-center ">
      <div className=" promises grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
        <div className="  promise-card  p-6 rounded-lg shadow-lg text-center">
          <img
            src={rocket}
            alt="rocket icon"
            className="mx-auto mb-4 w-20 h-20"
          />
          <h1>Elevate Your Cyber Career</h1>
          <p>
            Embark on your cybersecurity journey confidently with Shark
            Cybertech, a trusted choice for leading organizations. Our platform
            offers curated paths that seamlessly blend foundational concepts
            with real, on-the-job skills.
          </p>
        </div>
        <div className="promise-card  p-6 rounded-lg shadow-lg text-center">
          <img src={pen} alt="shield icon" className="mx-auto mb-4 w-20 h-20" />
          <h1>Achieve Certification Excellence</h1>
          <p>
            Ace your certification exams with content meticulously crafted by
            our industry-leading instructors. Test your knowledge with our
            comprehensive practice exams, ensuring you're well-prepared to excel
            in the certification arena.
          </p>
        </div>
        <div className="promise-card  p-6 rounded-lg shadow-lg text-center">
          <img
            src={puzzle}
            alt="puzzle icon"
            className="mx-auto mb-4 w-20 h-20"
          />
          <h1>Upskill and Sharpen Your Edge</h1>
          <p>
            Master hands-on skills crucial for success in the cybersecurity
            landscape. Familiarize yourself with the latest vulnerabilities and
            threats, equipping you to handle real-world attacks with confidence.
          </p>
        </div>
        <div className="promise-card  p-6 rounded-lg shadow-lg text-center">
          <img src={pen} alt="shield icon" className="mx-auto mb-4 w-20 h-20" />
          <h1>Join the Ranks of Cybersecurity Experts</h1>
          <p>
            Shark Cybertech, a name trusted by industry giants, is your gateway
            to mastering the art of cybersecurity. Create your free account
            today and launch your career with a platform designed for
            excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promises;
