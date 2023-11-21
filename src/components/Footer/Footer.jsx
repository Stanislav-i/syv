import React from 'react';
import { FooterEl, FooterText } from './Footer.styled';
import { Container } from 'components/Container';

const Footer = () => {
  return (
    <FooterEl>
      <Container>
        <a href="https://www.linkedin.com/in/stanislav-izotov-dev/">
          <FooterText>Developed by Stanislav Izotov 2023 &copy;</FooterText>
        </a>
      </Container>
    </FooterEl>
  );
};

export default Footer;
