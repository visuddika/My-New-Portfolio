import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  border: 0.1px solid #306ee0;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + '99'};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + '99'};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Duration = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + '80'};

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + '99'};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary || '#000'};
  background: ${({ theme }) => theme.primary || '#306ee0'}15;
  border: 1px solid ${({ theme }) => theme.primary || '#306ee0'}30;
  border-radius: 8px;
  padding: 4px 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary || '#306ee0'}25;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 6px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Logo src={experience.img} alt={`${experience.company} logo`} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Duration>{experience.date}</Duration>
        </Body>
      </Top>
      <Description>{experience.desc}</Description>
      
      {experience.skills && experience.skills.length > 0 && (
        <Skills>
          {experience.skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </Skills>
      )}
    </Card>
  );
};

export default ExperienceCard;