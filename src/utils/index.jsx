import React from 'react';

import Typewriter from "typewriter-effect";

function App() {
    return (
        <p className="hero-text">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hello, I am Shaunak Karve")
                        .start();
                }}
            />
        </p>
    );
}

function enlargeDiv(element){
    element.style.width = "100vw";
    element.style.height = "100vh";
    element.style.transition = "all 0.5s ease"; // Smooth transition
    element.style.position = "fixed"; // Fix it to the viewport
    element.style.top = "0"; // Align to the top of the viewport
    element.style.left = "0"; // Align to the left of the viewport
    element.style.zIndex = "999"; // Ensure it's on top    
}

export default App;
export {enlargeDiv};