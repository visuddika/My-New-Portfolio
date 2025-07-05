import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { skills } from '../../data/constants'; // Assuming you have the same `skills` data

// --- Floating Icon Animations ---
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-30px) rotate(90deg); }
  50% { transform: translateY(-15px) rotate(180deg); }
  75% { transform: translateY(-25px) rotate(270deg); }
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  z-index: 0;
  animation: ${float} 8s ease-in-out infinite;
`;

const EmojiIcon = styled.div`
  font-size: ${props => props.size}px;
  filter: drop-shadow(0 0 8px ${props => props.color}40);
`;

const TextIcon = styled.div`
  background: linear-gradient(
    145deg,
    ${props => props.color},
    ${props => props.color}cc
  );
  color: ${props => props.textColor || '#000'};
  font-size: ${props => Math.max(12, props.size * 0.45)}px;
  font-weight: 700;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${props => props.textColor || '#fff'};
  box-shadow:
    0 4px 12px ${props => props.color + '66'},
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
`;


const HTMLIcon = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(227, 79, 38, 0.5);
`;

const MouseFollower = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(97, 218, 251, 0.6), transparent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 5;
  transition: all 0.1s ease;
`;

// --- Main Container Styles (from your second code) ---
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.cardTransparent || 'rgba(133, 76, 230, 0.1)'};
  border: 0.1px solid #854CE6;
  border-radius: 16px;
  padding: 18px 36px;
  backdrop-filter: blur(4px); /* Optional: adds a frosted-glass effect */

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;


const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary + '80'};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary + '80'};
  padding: 12px 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;
const techIcons = [
  { name: 'React', symbol: '⚛️', color: '#61DAFB', size: 40 },
  { name: 'JavaScript', symbol: 'JS', color: '#F7DF1E', size: 35, textColor: '#000' },
  { name: 'TypeScript', symbol: 'TS', color: '#3178C6', size: 35, textColor: '#fff' },
  { name: 'HTML', symbol: '<>', color: '#E34F26', size: 38 },
  { name: 'CSS', symbol: '🎨', color: '#1572B6', size: 36 },
  { name: 'Node.js', symbol: '🟢', color: '#339933', size: 42 },
  { name: 'Python', symbol: '🐍', color: '#3776AB', size: 45 },
  { name: 'Java', symbol: 'JAVA', color: '#ED8B00', size: 40, textColor: '#fff' },
  { name: 'C++', symbol: 'C++', color: '#00599C', size: 38, textColor: '#fff' },
  { name: 'PHP', symbol: 'PHP', color: '#777BB4', size: 36, textColor: '#fff' },
  { name: 'Docker', symbol: '🐳', color: '#2496ED', size: 40 },
  { name: 'Git', symbol: '🔧', color: '#F1502F', size: 34 },
  { name: 'AWS', symbol: '☁️', color: '#FF9900', size: 36 },

  // Additional icons
  { name: 'Next.js', symbol: 'NX', color: '#000000', size: 35, textColor: '#fff' },
  { name: 'Tailwind CSS', symbol: '🌊', color: '#38BDF8', size: 36 },
  { name: 'MongoDB', symbol: '🍃', color: '#47A248', size: 38 },
  { name: 'Firebase', symbol: '🔥', color: '#FFCA28', size: 36 },
  { name: 'GraphQL', symbol: '🔺', color: '#E10098', size: 36 },
  { name: 'Figma', symbol: '🎨', color: '#F24E1E', size: 34 },
  { name: 'Linux', symbol: '🐧', color: '#FCC624', size: 36 },
  { name: 'VS Code', symbol: '📝', color: '#007ACC', size: 34 },
  { name: 'Redux', symbol: '🔁', color: '#764ABC', size: 34 },
  { name: 'MySQL', symbol: 'DB', color: '#00758F', size: 34, textColor: '#fff' },
  { name: 'PostgreSQL', symbol: '🐘', color: '#336791', size: 36 },
  { name: 'Framer Motion', symbol: '🎞️', color: '#E100FF', size: 34 },
  { name: 'Sass', symbol: '💅', color: '#CC6699', size: 34 },
  { name: 'Jest', symbol: '🃏', color: '#C21325', size: 36 },
];

// --- Random Floating Positions ---
const getIconPositions = () =>
  techIcons.map(() => ({
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    duration: 6 + Math.random() * 4,
  }));

// --- Final Skills Component ---
const Skills = () => {
  const [iconPositions] = useState(getIconPositions);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Container id="skills">
      {/* Floating Icons */}
      {techIcons.map((icon, index) => (
        <FloatingIcon
          key={index}
          style={{
            top: `${iconPositions[index].y}%`,
            left: `${iconPositions[index].x}%`,
            animationDuration: `${iconPositions[index].duration}s`,
          }}
        >
          {icon.symbol === 'JS' || icon.symbol === 'TS' || icon.symbol === 'JAVA' || icon.symbol === 'PHP' || icon.symbol === 'C++' ? (
            <TextIcon color={icon.color} size={icon.size} textColor={icon.textColor}>
              {icon.symbol}
            </TextIcon>
          ) : icon.symbol === '<>' ? (
            <HTMLIcon color={icon.color} size={icon.size}>
              {icon.symbol}
            </HTMLIcon>
          ) : (
            <EmojiIcon color={icon.color} size={icon.size}>
              {icon.symbol}
            </EmojiIcon>
          )}
        </FloatingIcon>
      ))}

      {/* Mouse Follower */}
      <MouseFollower style={{ left: mousePos.x, top: mousePos.y }} />

      {/* Main Skills Section */}
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills .
        </Desc>
        <SkillsContainer>
          {skills.map((item) => (
            <Skill key={item.title}>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <SkillImage src={skill.image} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
