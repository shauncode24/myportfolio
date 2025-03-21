import React, { useState } from "react";
import ProjectTemplate from "./ProjectTemplate";

function Projects({ enlargedCubes, onCubeEnlarged }) {
  
    return (
        <div id = "main-project" className="main-project">
            <h1>My Projects</h1>
            <p>These are some of the projects I have worked on.</p>
            <p>Turn to see more! Click to expand!</p>
        <div className="cube-container">
            <ProjectTemplate index={0} isEnlarged={enlargedCubes[0]} onEnlargedChange={onCubeEnlarged} xvalue="-100%" url1 = "https://zencare-eta.vercel.app/" />
            <ProjectTemplate index={1} isEnlarged={enlargedCubes[1]} onEnlargedChange={onCubeEnlarged} xvalue="100%" />
        </div>
        </div>

  );
}

export default Projects;
