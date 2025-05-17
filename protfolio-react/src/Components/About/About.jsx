import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/profile_img.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={about_profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> Hey, I’m Praveen — an aspiring Full Stack Java Developer with a passion for building clean, efficient, and user-focused web applications.

Right now, I’m sharpening my skills in technologies like Java, Spring Boot, HTML, CSS, JavaScript, and databases — working toward becoming a well-rounded developer who can handle both front-end and back-end challenges. I enjoy turning ideas into real, functional solutions and learning something new with every line of code.</p>
                        <p>This site is my space to showcase what I’m working on and how I’m growing in the tech world. Feel free to explore my projects — and if you’re into clean code, creative problem-solving, or just want to connect, let’s talk.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"> <p>Forent-end</p><hr style={{ width: "50%" }} /> </div>
                        <div className="about-skill"> <p>Database</p><hr style={{ width: "70%" }} /> </div>
                        <div className="about-skill"> <p>Java</p><hr style={{ width: "90%" }} /> </div>
                        <div className="about-skill"> <p>Spring-boot</p><hr style={{ width: "20%" }} /> </div>
                    </div>
                </div>
            </div>
            <div className="about-achiments">
                <div className="about-achiment">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achiment">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achiment">
                    <h1>3</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}
export default About
