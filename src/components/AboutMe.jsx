import React from 'react';
import { motion } from 'framer-motion';
import img from "../assets/portrait-photo.jpg";

function AboutMe() {

    return (
        <div id = "aboutMeDiv" className="about-me-div">

            <motion.div 
            variants={{
                hidden: { opacity: 0, x: "100%" },
                visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}  // Duration for animation (adjust as needed)
            className="about-me-highlight">
                <div className="row-about-me">
                    <div><h1 className="title-about-me">Welcome to the Developer's Side. </h1></div>
                    <div className="about-me-text">
                        
                    Innovative software developer with a strong focus on full-stack web development, AI-driven solutions. I thrive on transforming ideas into fully functional, interactive applications that not only perform efficiently but also offer seamless user experiences. With a keen eye for design and functionality, I enjoy building intuitive, responsive, and scalable web platforms.

                    I enjoy the process of designing, coding, and optimizing solutions that enhance engagement, solve problems, and push the boundaries of user interaction. Whether it’s developing interactive interfaces, or streamlining backend operations, I am always looking for ways to improve efficiency and usability.

                    I am a firm believer in continuous learning and innovation, always exploring new methodologies to refine my approach and stay ahead in an ever-evolving digital landscape. Whether working independently or collaborating within a team, I bring adaptability, problem-solving skills, and a passion for excellence to every project I take on.
                    
                    </div>
                </div>

                <div className="photo">
                    <img src={img} alt="Portrait" />
                </div>
            </motion.div>
        </div>
    );
}

export default AboutMe;