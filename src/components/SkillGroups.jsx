import React from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';

function SkillGroups(props) {
    var uniqueIdentifier = parseInt(props.unique);
    return(
        <motion.div 
        variants = {{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        }}
        initial="hidden"
        whileInView = "visible"
        viewport={{ once: false }}
        transition={{ duration: props.dur, delay: props.del }}
        className = {`skill-groups skill-groups-${props.classmain}`} >
            {props.skillsarr.map((skill, index) => (
                <div className = "skill-icon-div">
                    <img key = {index} src = {skill} className={`skills-icon skills-icon-${uniqueIdentifier++}`}/>
                </div>
            ))}
        </motion.div>
    );
}

export default SkillGroups;