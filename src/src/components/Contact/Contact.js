import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px; /* Reduced from 80px */
  
  @media (max-width: 960px) {
    padding: 20px 10px; /* Reduced from 40px */
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 1000px; /* Reduced from 1400px */
  gap: 30px; /* Reduced from 40px */
  
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px; /* Reduced from 30px */
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 30px; /* Reduced from 40px */
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.8rem; /* Reduced from 3.5rem */
  font-weight: 700;
  margin-bottom: 15px; /* Reduced from 20px */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem; /* Reduced from 2.5rem */
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem; /* Reduced from 1.2rem */
  color: #b0b3c7;
  max-width: 500px; /* Reduced from 600px */
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.95rem; /* Reduced from 1rem */
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px; /* Reduced from 40px */
  align-items: start;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 20px; /* Reduced from 30px */
  }
`;

const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Reduced from 30px */
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px; /* Reduced from 24px */
  padding: 24px; /* Reduced from 32px */
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; /* Reduced from 16px */
  margin-bottom: 16px; /* Reduced from 20px */
`;

const InfoIcon = styled.div`
  font-size: 1.6rem; /* Reduced from 2rem */
  color: #667eea;
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem; /* Reduced from 1.8rem */
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const InfoDescription = styled.p`
  font-size: 1rem; /* Reduced from 1.1rem */
  color: #b0b3c7;
  line-height: 1.6;
  margin-bottom: 20px; /* Reduced from 24px */
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; /* Reduced from 16px */
  padding: 12px; /* Reduced from 16px */
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px; /* Reduced from 16px */
  margin-bottom: 12px; /* Reduced from 16px */
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.div`
  width: 40px; /* Reduced from 48px */
  height: 40px; /* Reduced from 48px */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px; /* Reduced from 12px */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem; /* Reduced from 1.5rem */
  transition: transform 0.3s ease;
  
  ${ContactItem}:hover & {
    transform: scale(1.1);
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px; /* Reduced from 4px */
`;

const ContactLabel = styled.div`
  font-size: 1rem; /* Reduced from 1.1rem */
  font-weight: 600;
  color: #ffffff;
`;

const ContactValue = styled.div`
  font-size: 0.9rem; /* Reduced from 0.95rem */
  color: #b0b3c7;
`;

const StatusCard = styled.div`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  backdrop-filter: blur(20px);
  border-radius: 16px; /* Reduced from 20px */
  padding: 20px; /* Reduced from 24px */
  border: 1px solid rgba(102, 126, 234, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const StatusHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Reduced from 12px */
  margin-bottom: 12px; /* Reduced from 16px */
`;

const StatusIndicator = styled.div`
  width: 10px; /* Reduced from 12px */
  height: 10px; /* Reduced from 12px */
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

const StatusTitle = styled.h3`
  font-size: 1.1rem; /* Reduced from 1.2rem */
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const StatusText = styled.p`
  color: #10b981;
  font-weight: 500;
  margin-bottom: 10px; /* Reduced from 12px */
`;

const StatusDescription = styled.p`
  font-size: 0.85rem; /* Reduced from 0.9rem */
  color: #b0b3c7;
  line-height: 1.5;
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px; /* Reduced from 24px */
  padding: 24px; /* Reduced from 32px */
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
`;

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; /* Reduced from 16px */
  margin-bottom: 24px; /* Reduced from 32px */
`;

const FormIcon = styled.div`
  font-size: 1.6rem; /* Reduced from 2rem */
  color: #667eea;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem; /* Reduced from 1.8rem */
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const InputGroup = styled.div`
  margin-bottom: 18px; /* Reduced from 24px */
`;

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px; /* Reduced from 8px */
  font-size: 0.9rem; /* Reduced from 1rem */
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 6px; /* Reduced from 8px */
`;

const LabelIcon = styled.span`
  font-size: 0.9rem; /* Reduced from 1rem */
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px; /* Reduced from 20px */
  margin-bottom: 18px; /* Reduced from 24px */
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  outline: none;
  font-size: 0.95rem; /* Reduced from 1rem */
  color: #ffffff;
  border-radius: 10px; /* Reduced from 12px */
  padding: 12px 16px; /* Reduced from 16px 20px */
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    border: 1px solid #667eea;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: rgba(176, 179, 199, 0.7);
  }
`;

const ContactInputMessage = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  outline: none;
  font-size: 0.95rem; /* Reduced from 1rem */
  color: #ffffff;
  border-radius: 10px; /* Reduced from 12px */
  padding: 12px 16px; /* Reduced from 16px 20px */
  resize: vertical;
  min-height: 100px; /* Reduced from 120px */
  font-family: inherit;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    border: 1px solid #667eea;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: rgba(176, 179, 199, 0.7);
  }
`;

const ContactButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px; /* Reduced from 12px */
  padding: 14px 20px; /* Reduced from 16px 24px */
  font-size: 1rem; /* Reduced from 1.1rem */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const LoadingSpinner = styled.div`
  width: 18px; /* Reduced from 20px */
  height: 18px; /* Reduced from 20px */
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const TipsCard = styled.div`
  margin-top: 18px; /* Reduced from 24px */
  padding: 16px; /* Reduced from 20px */
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px; /* Reduced from 16px */
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const TipsTitle = styled.h4`
  color: #ffffff;
  font-size: 1rem; /* Reduced from 1.1rem */
  font-weight: 600;
  margin-bottom: 10px; /* Reduced from 12px */
`;

const TipsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TipItem = styled.li`
  color: #b0b3c7;
  font-size: 0.85rem; /* Reduced from 0.9rem */
  margin-bottom: 6px; /* Reduced from 8px */
  
  &:before {
    content: "•";
    color: #667eea;
    margin-right: 6px; /* Reduced from 8px */
  }
`;

const ErrorMessage = styled.div`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  padding: 10px 16px; /* Reduced from 12px 20px */
  border-radius: 8px;
  margin-bottom: 16px; /* Reduced from 20px */
  font-size: 0.85rem; /* Reduced from 0.9rem */
  display: flex;
  align-items: center;
  gap: 6px; /* Reduced from 8px */
  border: 1px solid rgba(239, 68, 68, 0.3);
  animation: slideIn 0.3s ease;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CustomSnackbar = styled.div`
  position: fixed;
  bottom: 24px; /* Reduced from 30px */
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 12px 20px; /* Reduced from 16px 24px */
  border-radius: 10px; /* Reduced from 12px */
  font-size: 0.9rem; /* Reduced from 1rem */
  font-weight: 500;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 10px; /* Reduced from 12px */
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: all 0.3s ease;
  animation: ${({ $open }) => ($open ? 'slideUp 0.3s ease' : 'none')};
  
  @keyframes slideUp {
    from {
      transform: translateX(-50%) translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }
`;

const CheckIcon = styled.div`
  width: 20px; /* Reduced from 24px */
  height: 20px; /* Reduced from 24px */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px; /* Reduced from 14px */
`;

// Component
const Contact = () => {

  const form = useRef();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    from_email: '',
    from_name: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate form data
    if (!formData.from_name.trim()) {
      setError('Please enter your name.');
      setLoading(false);
      return;
    }

    if (!formData.from_email.trim()) {
      setError('Please enter your email.');
      setLoading(false);
      return;
    }

    if (!formData.subject.trim()) {
      setError('Please enter a subject.');
      setLoading(false);
      return;
    }

    if (!formData.message.trim()) {
      setError('Please enter a message.');
      setLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      // For demo purposes, we'll simulate the email sending
      console.log('Sending email with data:', formData);
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success
      setOpen(true);
      setFormData({
        from_email: '',
        from_name: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 6 seconds
      setTimeout(() => setOpen(false), 6000);
      
    } catch (error) {
      console.error('Email sending error:', error);
      setError('Failed to send email. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    
   <Container id="contact">
      <Wrapper>
        <HeaderSection>
          <Title>Let's Create Something Amazing</Title>
          <Subtitle>
            Ready to transform your ideas into reality? I'm here to help you build exceptional digital experiences that make an impact.
          </Subtitle>
        </HeaderSection>

        <ContactContainer>
          {/* Info Section */}
          <ContactInfoSection>
            <InfoCard>
              <InfoHeader>
                <InfoIcon>💬</InfoIcon>
                <InfoTitle>Let's Talk About Your Project</InfoTitle>
              </InfoHeader>
              
              <InfoDescription>
                I'm actively seeking freelance work, especially ambitious or large-scale projects where I can bring your ideas to life. 
                Whether you need a complete web application, mobile app, or custom solution, I'm here to help.
              </InfoDescription>

              <ContactItem>
                <ContactIcon>📧</ContactIcon>
                <ContactDetails>
                  <ContactLabel>Email</ContactLabel>
                  <ContactValue>Visuddhikachathurani@gmail.com</ContactValue>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <ContactIcon>📍</ContactIcon>
                <ContactDetails>
                  <ContactLabel>Location</ContactLabel>
                  <ContactValue>Elpitiya, Galle, Sri Lanka</ContactValue>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <ContactIcon>📞</ContactIcon>
                <ContactDetails>
                  <ContactLabel>Phone</ContactLabel>
                  <ContactValue>+94 74 175 0301</ContactValue>
                </ContactDetails>
              </ContactItem>
            </InfoCard>

            <StatusCard>
              <StatusHeader>
                <StatusIndicator />
                <StatusTitle>Availability Status</StatusTitle>
              </StatusHeader>
              <StatusText>Available for new projects</StatusText>
            
            </StatusCard>

            
          </ContactInfoSection>

          {/* Contact Form */}
          <ContactForm onSubmit={handleSubmit} ref={form}>
            <FormHeader>
              <FormIcon>🚀</FormIcon>
              <FormTitle>Send Me a Message</FormTitle>
            </FormHeader>

            {error && (
              <ErrorMessage>
                <span>⚠️</span>
                {error}
              </ErrorMessage>
            )}

            <InputGrid>
              <InputGroup>
                <InputLabel>
                  <LabelIcon>👤</LabelIcon>
                  Your Name
                </InputLabel>
                <ContactInput
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </InputGroup>

              <InputGroup>
                <InputLabel>
                  <LabelIcon>📧</LabelIcon>
                  Your Email
                </InputLabel>
                <ContactInput
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </InputGroup>
            </InputGrid>

            <InputGroup>
              <InputLabel>
                <LabelIcon>💬</LabelIcon>
                Subject
              </InputLabel>
              <ContactInput
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Project Inquiry"
                required
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>Your Message</InputLabel>
              <ContactInputMessage
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                placeholder="Tell me about your project, timeline, and budget..."
                required
              />
            </InputGroup>

            <ContactButton type="submit" disabled={loading}>
              {loading ? (
                <>
                  <LoadingSpinner />
                  Sending...
                </>
              ) : (
                <>
                  🚀 Send Message
                </>
              )}
            </ContactButton>
          </ContactForm>
        </ContactContainer>

        <CustomSnackbar $open={open}>
          <CheckIcon>✓</CheckIcon>
          <span>Your message was sent successfully! I'll get back to you soon.</span>
        </CustomSnackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;