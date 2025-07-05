import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Projectcard from '../Cards/Projectcard'; // if Projectcard.js is in the same folder
import { projects } from '../../data/constants';


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

const ProjectCards = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToolButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;
  user-select: none;

  ${({ active, theme }) =>
    active &&
    `
    background-color: ${theme.primary}20;
    color: ${theme.text_primary};
  `}

  &:hover {
    background-color: ${({ theme }) => theme.primary}33;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
  }
`;

const VerticalDivider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Projects = () => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of my skills on which I have been working for the past 2
          years.
        </Desc>

        <ToggleGroup>
          <ToolButton
            active={toggle === 'all'}
            onClick={() => setToggle('all')}
          >
            All
          </ToolButton>

          <ToolButton
            active={toggle === 'web app'}
            onClick={() => setToggle('web app')}
          >
            WEB APP'S
          </ToolButton>

          <ToolButton
            active={toggle === 'android app'}
            onClick={() => setToggle('android app')}
          >
            ANDROID APP'S
          </ToolButton>

          <ToolButton
            active={toggle === 'machine learning'}
            onClick={() => setToggle('machine learning')}
          >
            MACHINE LEARNING
          </ToolButton>
        </ToggleGroup>

       <CardContainer>
  {toggle === "all" &&
    projects.map((project) => <Projectcard project={project} />)}
  {projects
    .filter((item) => item.category === toggle)
    .map((project) => (
      <Projectcard project={project} />
    ))}
</CardContainer>
 
      </Wrapper>
    </Container>
  );
};

export default Projects;
