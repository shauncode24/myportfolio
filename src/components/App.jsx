import { useState, useEffect } from 'react'
import Header from './Header'
import LoadingScreen from './LoadingScreen'
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [enlargedCubes, setEnlargedCubes] = useState([false, false]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5200);

    const handleScroll = () => {
      if (window.scrollY > 1) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  const handleCubeEnlarged = (index, isEnlarged) => {
    const updatedEnlargedCubes = [...enlargedCubes];
    updatedEnlargedCubes[index] = isEnlarged;
    setEnlargedCubes(updatedEnlargedCubes);
  };

  // Check if any cube is enlarged
  const isAnyCubeEnlarged = enlargedCubes.some((enlarged) => enlarged);

  return (
    <>
      {loading ? 
        (<div className="loading-div"><LoadingScreen /></div>) : 
        (<div className="main-container">{hasScrolled && <Header headerClass={isAnyCubeEnlarged ? "header-enlarged" : "header"}/>}<HeroSection /><AboutMe /><Skills /><Projects enlargedCubes={enlargedCubes} onCubeEnlarged={handleCubeEnlarged}/><Footer /></div>)
      }
    </>
  );
  
}

export default App
