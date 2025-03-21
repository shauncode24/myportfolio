import React, { useState } from "react";
import { motion } from 'framer-motion';

function ProjectTemplate({ index, isEnlarged, onEnlargedChange, xvalue, url1 }) {

    const [rotation1, setRotation1] = useState(0);
    // const [isEnlarged, setIsEnlarged] = useState(false);

    const handleRotate1 = () => {
        setRotation1((prev) => prev + 90); 
      };

    function handleClick() {
        const newIsEnlarged = !isEnlarged;
        onEnlargedChange(index, newIsEnlarged);
    };
    return(

        <motion.div
        variants={{
            hidden: { opacity: 0, x: xvalue },
            visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.1, delay: 0 }}         
        className = {`cube-1 ${isEnlarged ? "enlarged" : ""}`}> 
            <div className = "cube-header">
                {/* <div class = "invisible-div"></div>
                <div class = "invisible-div"></div> */}
                    <button className="rotate-button" onClick={handleRotate1}>
                        <img className = {`turn ${isEnlarged ? "turn-enlarged" : ""}`} src = {!isEnlarged ? "https://cdn-icons-png.flaticon.com/512/2026/2026613.png" : "https://cdn-icons-png.flaticon.com/512/2026/2026599.png"}></img>
                        {/* <img className="turn" src = ></img> */}
                    </button>   
                    {/* <div class = "invisible-div"></div> */}
                    <button className = {`enlarge-button ${isEnlarged ? "enlarge-enlarged" : ""}`} onClick={handleClick}>
                    
                    {!isEnlarged ?
                        <svg className = "enlarge-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
                      </svg>:
                        <svg className = "responsive-enlarge" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
                      </svg>
                    }
                    
                    </button>

                    
                </div>
            <div
            className={`cube ${isEnlarged ? "cube-enlarged" : ""}`}
            style={{
                transform: `rotateY(${rotation1}deg)`,
            }}
            >
            <div className={`cube-face front ${isEnlarged ? "cube-enlarged" : ""} ${isEnlarged ? "frontupd" : ""}`}>
            <iframe 
                src={url1}
                width="100%" 
                height="100%" 
                style={{ border: "none" }}
            ></iframe>

            </div>
            <div className={`cube-face back ${isEnlarged ? "cube-enlarged" : ""} ${isEnlarged ? "backupd" : ""}`} >2</div>
            <div className={`cube-face left ${isEnlarged ? "cube-enlarged" : ""} ${isEnlarged ? "leftupd" : ""}`}>3</div>
            <div className={`cube-face right ${isEnlarged ? "cube-enlarged" : ""} ${isEnlarged ? "rightupd" : ""}`}>4</div>
            <div className={`cube-face top ${isEnlarged ? "cube-enlarged" : ""} ${isEnlarged ? "topupd" : ""}`}>5</div>
            <div className={`cube-face bottom ${isEnlarged ? "cube-enlarged" : ""} ${isEnlarged ? "bottomupd" : ""}`}>6</div>
            </div>
        </motion.div>

    );
}

export default ProjectTemplate;