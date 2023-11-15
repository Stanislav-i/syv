import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bgi from '../../pictures/hero-bg-3.jpg'

export const HeroTitle = styled.h2`
text-align: center;
`;

export const HeroText = styled.p`
    text-align: center;
    padding-bottom: 50px;
`;

export const TransparentLogo = styled.h1`
background-image: url('${bgi}');
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: 100px;
  text-align: center;
  font-weight: bold;
  background-size: cover;

  @media (min-width: 768px) {
      font-size: 200px;
  }
`;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    gap: 15px;

    @media (min-width: 768px) {
      flex-direction: row;
  }
`;

export const HomeImageWrapper = styled.div`
`
export const HomeImg = styled.img`
  display: block;
  width: auto;
  height: 200px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
  border-radius: var(--radii);
`;

export const SectionText = styled.div`
    text-align: left;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
`;

export const TitleCatalog = styled(Link).attrs({
    to: '/catalog',
  })`
    color: var(--color-text);
    font-size: var(--fv-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
    text-align: center;
    padding-top: 25px;
`;

export const FaqText = styled.p`
  padding: 10px 0;
`
