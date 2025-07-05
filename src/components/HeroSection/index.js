import React from 'react';
import styled from 'styled-components';
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import Wisu1 from "../../images/Wisu1.jpg";
import HeroBgAnimation from "../HeroBgAnimation";

// Container for whole hero section
const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  width: 82%;
  height: 80%;
  padding: 0 30px;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0 9px;
  }
`;





// Main inner layout - increased z-index
const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  position: relative;
  z-index: 10;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

// Left side: text
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 11;

  @media screen and (max-width: 960px) {
    order: 2;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    margin: 32px 0;
  }
`;

// Right side: image
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 11;

  @media screen and (max-width: 960px) {
    order: 1;
    margin-bottom: 40px;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 48px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  margin-left: 8px;
`;

const SubTitle = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary + "95"};
  line-height: 32px;
  margin-bottom: 32px;

  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
`;

const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  padding: 16px 32px;
  max-width: 300px;
  text-align: center;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  @media screen and (max-width: 640px) {
    padding: 12px 24px;
    font-size: 18px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media screen and (max-width: 640px) {
    max-width: 280px;
  }
`;
;


const ImageWrapper = styled.div`
  position: relative;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }

  @media screen and (max-width: 640px) {
    width: 260px;
    height: 260px;
  }
`;
const ImageAnimationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none; /* so it doesn’t block clicks on image */
`;




const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <ImageWrapper>
              <ImageAnimationContainer>
                <HeroBgAnimation />
              </ImageAnimationContainer>
              <Image src={Wisu1} alt="Wisu" />
            </ImageWrapper>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;