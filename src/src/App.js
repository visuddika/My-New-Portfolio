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

// ==== Floating Particles Animations ====

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
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
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
      </Router>
    </ThemeProvider>
  );
}

export default App;
