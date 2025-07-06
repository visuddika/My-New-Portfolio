import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  /* 4 equal columns */
  gap: 20px;  /* space between cards */
  padding: 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 330px;
  min-height: 350px;
  position: relative;
  z-index: 1;
  padding: 24px;
  border-radius: 14px;
  background: #1e1e1e;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.4s ease-in-out;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    background: linear-gradient(135deg, #3498db, #9b59b6);
    border-radius: inherit;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 55px 12px rgba(0, 0, 0, 0.45);
    filter: brightness(1.12);
  }
`;


const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  border-radius: 10px;
`;

const ModalImage = styled(Image)`
  height: 220px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.25);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
  align-items: center;
  gap: 6px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + "15"};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
  letter-spacing: 0.04em;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-left: 2px;
  color: ${({ theme }) => theme.text_secondary + "cc"};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "bb"};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* max 3 lines */
  -webkit-box-orient: vertical;
  margin-top: 8px;
  max-width: 100%;
  letter-spacing: 0.03em;
  line-height: 1.5;
`;

const Button = styled.button`
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  max-width: 130px;
  transition: background-color 0.3s ease;
  letter-spacing: 0.05em;
  align-self: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.primary + "dd"};
  }
`;

const Members = styled.div`
  margin-top: auto; /* push members text to bottom */
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.04em;
  font-weight: 500;
`;

// Modal styles
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 90%;
  max-width: 420px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 28px 28px 32px 28px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 26px;
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary + "cc"};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ModalDescription = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "cc"};
  margin-top: 8px;
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
  display: block;
  letter-spacing: 0.04em;
  line-height: 1.6;
`;

// Main Component
const Projectcard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card>
        <Image src={project.image} alt={project.title || "Project Image"} />
        <Tags>
          {project.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description> {/* Short description on card */}
        <Button onClick={() => setShowModal(true)}>Project</Button>
        <Members>{project.members}</Members>
      </Card>

      {showModal && (
        <ModalBackground onClick={() => setShowModal(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>

            <ModalImage
              src={project.image}
              alt={project.title || "Project Image"}
            />

            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
            <ModalDescription>{project.description}</ModalDescription> {/* Full description in modal */}
            <Members>Members: {project.members}</Members>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default Projectcard;
