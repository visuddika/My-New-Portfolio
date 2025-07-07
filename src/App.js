// App.js
import "./App.css";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { darkTheme } from "./utils/Thems";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

// ==== All Keyframes (organized in correct order) ====

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const backgroundPulse = keyframes`
  0% {
    background-position: 0% 50%;
    filter: brightness(1);
  }
  50% {
    background-position: 100% 50%;
    filter: brightness(1.1);
  }
  100% {
    background-position: 0% 50%;
    filter: brightness(1);
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const letterGlow = keyframes`
  0%, 100% {
    text-shadow: 
      0 0 5px rgba(76, 175, 80, 0.5),
      0 0 10px rgba(76, 175, 80, 0.5),
      0 0 15px rgba(76, 175, 80, 0.5),
      0 0 20px rgba(76, 175, 80, 0.5);
  }
  50% {
    text-shadow: 
      0 0 10px rgba(76, 175, 80, 0.8),
      0 0 20px rgba(76, 175, 80, 0.8),
      0 0 30px rgba(76, 175, 80, 0.8),
      0 0 40px rgba(76, 175, 80, 0.8);
  }
`;

const introSlideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
`;

const mainContentSlideIn = keyframes`
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// ==== Intro Screen Styled Components ====

const IntroScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #0a0a0a, #1a1a2e, #16213e, #0f3460);
  background-size: 400% 400%;
  animation: ${backgroundPulse} 20s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${props => props.isExiting ? introSlideUp : 'none'} 0.8s ease-in-out forwards;
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
      radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      radial-gradient(circle at 60% 40%, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
      radial-gradient(circle at 30% 80%, rgba(76, 175, 80, 0.03) 1px, transparent 1px),
      radial-gradient(circle at 70% 30%, rgba(33, 150, 243, 0.03) 1px, transparent 1px);
    background-size: 200px 200px, 300px 300px, 250px 250px, 180px 180px, 220px 220px, 280px 280px;
    background-position: 0 0, 100px 100px, 50px 150px, 150px 50px, 200px 200px, 250px 100px;
    z-index: 0;
  }
`;

const IntroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

const IntroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  letter-spacing: 0.1em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  animation: ${fadeInUp} 1s ease-out, ${letterGlow} 2s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const IntroSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 1rem;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LoadingDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  animation: ${fadeInUp} 1s ease-out 0.6s both;
  
  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(76, 175, 80, 0.8);
    margin: 0 4px;
    animation: ${twinkle} 1.5s ease-in-out infinite;
    
    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
`;

// ==== Main App Styled Components ====

const MainContent = styled.div`
  animation: ${props => props.isVisible ? mainContentSlideIn : 'none'} 0.8s ease-out forwards;
  opacity: ${props => props.isVisible ? 1 : 0};
`;

// ==== Styled Components ====

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  background: linear-gradient(-45deg, #0a0a0a, #1a1a2e, #16213e, #0f3460);
  background-size: 400% 400%;
  animation: ${backgroundPulse} 20s ease infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
      radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      radial-gradient(circle at 60% 40%, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
      radial-gradient(circle at 30% 80%, rgba(76, 175, 80, 0.03) 1px, transparent 1px),
      radial-gradient(circle at 70% 30%, rgba(33, 150, 243, 0.03) 1px, transparent 1px);
    background-size: 200px 200px, 300px 300px, 250px 250px, 180px 180px, 220px 220px, 280px 280px;
    background-position: 0 0, 100px 100px, 50px 150px, 150px 50px, 200px 200px, 250px 100px;
    z-index: 0;
  }
`;

const ParticleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
`;

const Particle = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  animation: ${float} ${props => props.duration}s ease-in-out infinite,
             ${twinkle} ${props => props.twinkleDuration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.6;
`;

// Generate more and brighter particles with bigger size & glow
const generateParticles = () => {
  const particles = [];
  const colors = [
    'rgba(255, 255, 255, 0.9)',   // brighter white
    'rgba(76, 175, 80, 0.7)',     // stronger green
    'rgba(33, 150, 243, 0.7)',    // stronger blue
    'rgba(255, 193, 7, 0.5)',     // stronger amber
    'rgba(156, 39, 176, 0.5)'     // stronger purple
  ];
  
  for (let i = 0; i < 45; i++) {   // more particles
    particles.push(
      <Particle
        key={i}
        size={Math.random() * 6 + 2} // 2px to 8px size
        color={colors[Math.floor(Math.random() * colors.length)]}
        duration={Math.random() * 8 + 4}  // 4s to 12s (a bit faster)
        twinkleDuration={Math.random() * 3 + 1.5}
        delay={Math.random() * 5}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    );
  }
  return particles;
};

// Section with gradient overlay
const SectionWrapper = styled.div`
  background: linear-gradient(
    38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient(
    141.27deg, rgba(0, 70, 209, 0) 50%, rgba(232, 234, 238, 0.15) 100%
  );
  width: 100%;
  padding: 60px 0;
  position: relative;
  z-index: 2;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Show intro for 3 seconds
    const introTimer = setTimeout(() => {
      setIsExiting(true);
      
      // Start main content animation after intro starts exiting
      setTimeout(() => {
        setShowMainContent(true);
        setShowIntro(false);
      }, 400);
    }, 3000);

    return () => clearTimeout(introTimer);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        {/* Intro Screen */}
        {showIntro && (
          <IntroScreen isExiting={isExiting}>
            <ParticleContainer>{generateParticles()}</ParticleContainer>
            <IntroContent>
              <IntroTitle>Wisuddika</IntroTitle>
              <IntroSubtitle>Welcome to My Portfolio</IntroSubtitle>
              <LoadingDots>
                <span></span>
                <span></span>
                <span></span>
              </LoadingDots>
            </IntroContent>
          </IntroScreen>
        )}

        {/* Main Content */}
        <MainContent isVisible={showMainContent}>
          <Navbar />
          <Container>
            <ParticleContainer>{generateParticles()}</ParticleContainer>

            <main style={{ position: "relative", zIndex: 2 }}>
              <Hero />

              <SectionWrapper as="section">
                <Skills />
              </SectionWrapper>

              <SectionWrapper as="section">
                <Experience />
              </SectionWrapper>

              <SectionWrapper as="section" style={{ padding: "60px 0" }}>
                <Projects />
              </SectionWrapper>

              <SectionWrapper as="section">
                <Education />
              </SectionWrapper>

              <SectionWrapper as="section">
                <Contact />
              </SectionWrapper>

              <SectionWrapper as="section">
                <Footer/>
              </SectionWrapper>
            </main>
          </Container>
        </MainContent>
      </Router>
    </ThemeProvider>
  );
}

export default App;