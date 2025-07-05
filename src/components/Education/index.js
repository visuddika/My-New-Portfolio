import React from 'react';
import styled from 'styled-components';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { motion } from 'framer-motion';
import EducationCard from '../Cards/EducationCard';

import { education } from '../../data/constants';

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

const Desc = styled.p`
  max-width: 600px;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Decoration = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: #854ce6;
  opacity: 0.1;
  filter: blur(120px);
  border-radius: 50%;
  top: -100px;
  left: -100px;
  z-index: 0;
`;

const Education = () => {
  return (
    <Container id="education">
      <Decoration />
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </Desc>

        <TimeLineSection>
          <Timeline position="alternate">
            {education.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>

                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <EducationCard education={item} />
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
