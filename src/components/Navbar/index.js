import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";

// Styled Components
const Nav = styled.div`
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(126, 34, 206, 0.2);
  margin-bottom: 40px; /* Added gap below navbar */

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    margin-bottom: 30px; /* Smaller gap on mobile */
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 20px; /* Even smaller gap on small mobile */
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary || "#fff"};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoIcon = styled.div`
  background: linear-gradient(135deg, #7e22ce, #ec4899);
  border-radius: 12px;
  padding: 8px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(126, 34, 206, 0.3);
`;

const LogoText = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  background: linear-gradient(135deg, #7e22ce, #ec4899);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
`;


const MobileIcon = styled.div`
  display: none;
  color: white;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;

    &:hover {
      background: rgba(126, 34, 206, 0.1);
    }
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary || "#fff"};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #7e22ce, #ec4899);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: ${({ theme }) => theme.primary || "#7e22ce"};
    background: rgba(126, 34, 206, 0.1);

    &:before {
      width: 80%;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const GithubButton = styled.button`
  border: 2px solid transparent;
  border-radius: 25px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #7e22ce, #ec4899);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(126, 34, 206, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(126, 34, 206, 0.4);
    background: linear-gradient(135deg, #9333ea, #f472b6);
  }

  &:active {
    transform: translateY(0px);
  }

  @media screen and (max-width: 640px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 24px 40px;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%);
  backdrop-filter: blur(20px);
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(126, 34, 206, 0.2);
  z-index: 999;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Changed this from LinkR to a normal <a> for hash anchor navigation
const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary || "#fff"};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 3px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.primary || "#7e22ce"};
    background: rgba(126, 34, 206, 0.1);
    border-left-color: #7e22ce;
    transform: translateX(5px);
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(126, 34, 206, 0.2);
    transform: rotate(90deg);
  }
`;

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <LogoIcon>
            <FiCode size="24px" color="white" />
          </LogoIcon>
          <LogoText>Portfolio</LogoText>
        </NavLogo>

        <MobileIcon onClick={() => setOpen(!open)}>
          <FiMenu />
        </MobileIcon>

        <NavItems>
          <li><NavLink href="#about">About</NavLink></li>
          <li><NavLink href="#skills">Skills</NavLink></li>
          <li><NavLink href="#experience">Experience</NavLink></li>
          <li><NavLink href="#projects">Projects</NavLink></li>
          <li><NavLink href="#education">Education</NavLink></li>
          <li><NavLink href="#contact">Contact</NavLink></li>
        </NavItems>

        <ButtonContainer>
          <GithubButton onClick={() => window.open("https://github.com/visuddika", "_blank")}>
            <RiGithubLine size="18px" />
            GitHub Profile
          </GithubButton>
        </ButtonContainer>
      </NavContainer>

      {open && (
        <MobileMenu>
          <CloseIcon onClick={() => setOpen(false)}>
            <FiX />
          </CloseIcon>
          <MobileMenuLink href="#about" onClick={() => setOpen(false)}>
            About
          </MobileMenuLink>
          <MobileMenuLink href="#skills" onClick={() => setOpen(false)}>
            Skills
          </MobileMenuLink>
          <MobileMenuLink href="#experience" onClick={() => setOpen(false)}>
            Experience
          </MobileMenuLink>
          <MobileMenuLink href="#projects" onClick={() => setOpen(false)}>
            Projects
          </MobileMenuLink>
          <MobileMenuLink href="#education" onClick={() => setOpen(false)}>
            Education
          </MobileMenuLink>
          <MobileMenuLink href="#contact" onClick={() => setOpen(false)}>
            Contact
          </MobileMenuLink>
          <GithubButton
            style={{
              marginTop: "16px",
              padding: "12px 20px",
              width: "max-content",
              alignSelf: "center"
            }}
            onClick={() => {
              window.open("https://github.com/visuddika/", "_blank");
              setOpen(false);
            }}
          >
            <RiGithubLine size="18px" />
            GitHub Profile
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;