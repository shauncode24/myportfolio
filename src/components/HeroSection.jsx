import imgage from "../assets/Page1.png";
import { Link, Element } from "react-scroll";
import App from "../utils";
import React, { useState, useEffect } from 'react'

function HeroSection() {
    return(
        <div id = "hero"className = "custom-css-hero">
            {/* <img className ="d-block mx-auto mb-4" src={imgage} alt="" width="72" height="57" /> */}
            {/* <svg className = "hero-button-up" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFFFF0" class="bi bi-display" viewBox="0 0 16 16"><path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145"/></svg> */}
            <div className = "hero-location-div" style = {{display: "flex", flexDirection: "row"}}><svg className = "hero-button-up" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFFFF0" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg> <h1 className = "hero-location"style = {{fontSize: "30px"}}>Mumbai</h1></div>
            {/* <div className = "hero-text" id = "heroText"> */}
            {App()}
            {/* </div> */}
            <div className = "hero-buttons-div">
                <a href = "/Resume_Shaunak.pdf" download="Resume_Shaunak.pdf">
                    <button className = "hero-buttons">
                        <div className = "download-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/></svg>
                        </div>
                    
                        Resume
                    
                    </button>
                </a>
                <button className = "hero-buttons">Certifications</button>
            </div>
            <a href="#aboutMeDiv">
                <div className = "hero-button-down"><svg className = "go-down-button" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFFFF0" class="bi bi-chevron-bar-down" viewBox="0 0 16 16"><path fillRule="evenodd" d="M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708M1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/></svg></div>
            </a>
            <a href="#aboutMeDiv">
            </a>
        </div>


    );
}

export default HeroSection;