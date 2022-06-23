import React from 'react';
import headshotImage from '../../assets/cover/headshot.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="container-center-horizontal my-5">
        <img className="profile-img" src={headshotImage} alt="Professional headshot of Emerald Green"/>
        {/* <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i> */}
        </div>
        <p>
        I'm Emerald Green, a full stack web developer currently living in Austin, TX. I have a Bachelor of Arts in both Organismal Biology & Ecology and Classics (i.e. ancient art, culture, and architecture) from Colorado College (CC). For my post-undergraduate career, I committed myself to advancing equity with mission-based organizations in Denver, CO. I served as the Consumer Assistance Program Coordinator for Colorado Consumer Health Initiative and the Program Coordinator for the F2F (family to family) project at Family Voices Colorado for two years. Through my experience in these roles, I gained valuable skills in problem-solving and project management that I am excited to apply to my web development career. 
        </p>
        <p>
        Before taking the University of Denver's full-stack bootcamp, I explored coding at the Tennessee Governor's School for the Sciences & Engineering summer program, where I used Python to program Roombas. This experience sparked my interest in technology and fueled me to pursue more technical roles in college. During my time at CC, I worked in the ITS Solutions Center and Tech Sandbox as a Student Lab Technician. There, I was exposed to a new technologies like the Oculus Quest, Microsoft HoloLens, VIVE headset, and 3D printing. I improved my diversity of knowledge through the COMPTIA A+ training and exam. As part of this training, I immersed myself in internal hardware components by destroying and rebuilding a PC. Through these experiences, I have gained exposure to different tools in various fields of software and hardware development, giving me the skills to connect users to the data they need. 
        </p>
      </div>
    </section>
  );
}

export default About;
