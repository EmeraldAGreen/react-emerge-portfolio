import React from 'react';
import Headshot from '../assets/EG-headshot.jpg'
export default function About() {
  return (
    <div className="container-fluid">
       <section id="about-me" className="about-me">
        <h1>About Me</h1>
          <article className="clearfix">
            <img className="col-md-6 float-md-end mb-3 ms-md-3 circle box-shadow-lg" src={Headshot} alt="Professional headshot of Emerald Green" height="auto"/>
                <p>
                  Hi, my name is Emerald Green, and I am a full-stack Web Application Developer, currently living in Denver, CO. I have a Bachelor of Arts in Organismal Biology & Ecology and Classics from Colorado College. I committed my post-undergraduate career to advancing equity with mission-based organizations in my community. I serve as the Consumer Assistance Program Coordinator for Colorado Consumer Health Initiative and the Program Coordinator for the F2F project at Family Voices Colorado. I am excited to apply my skills in problem-solving and project management to web development, and I am currently  honing my technical skills with the University of Denver’s coding bootcamp.
                </p>
            <p id="resume" className="resume">
              <h2>Resume</h2>
                  <button><a href="../assets/Resume-2022.pdf" download="Resume 2022">Download PDF</a></button>
            </p>
          </article>
       </section>
    </div>
  );
};