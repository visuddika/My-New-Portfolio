import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import GitHubIcon from '@mui/icons-material/GitHub'; // import GitHub icon

const FooterContainer = styled.div`
  width: 100%;
  padding: 1rem 0; // Reduced from 2rem
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 8px; // Reduced from 14px
  align-items: center;
  padding: 0.5rem; // Reduced from 1rem
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 18px; // Reduced from 20px
  color: ${({ theme }) => theme.primary};
  margin: 0; // Remove default margin
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.25rem; // Reduced from 0.5rem
  display: flex;
  flex-direction: row;
  gap: 1.5rem; // Reduced from 2rem
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.75rem; // Reduced from 1rem
    justify-content: center;
    text-align: center;
    font-size: 11px; // Reduced from 12px
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem; // Reduced from 1.2rem
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 0.9rem; // Reduced from 1rem
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 0.5rem; // Reduced from 1rem
  margin-bottom: 0.5rem; // Reduced from 2rem
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 0.5rem; // Reduced from 1rem
  font-size: 1.25rem; // Reduced from 1.5rem
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 0.5rem; // Reduced from 1.5rem
  margin-bottom: 0; // Remove bottom margin
  font-size: 0.8rem; // Reduced from 0.9rem
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Wisuddhik Chathurani</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
           <NavLink href="#contact">Content</NavLink>
        </Nav>
        <SocialMediaIcons>
  <SocialMediaIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer">
    <FacebookIcon />
  </SocialMediaIcon>
  <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer">
    <GitHubIcon />
  </SocialMediaIcon>
  <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
    <LinkedInIcon />
  </SocialMediaIcon>
  <SocialMediaIcon href={Bio.insta} target="_blank" rel="noopener noreferrer">
    <InstagramIcon />
  </SocialMediaIcon>
</SocialMediaIcons>

        <Copyright>
          &copy; 2025 Wisuddhika Chathurani. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;