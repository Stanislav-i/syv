import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const TitleText = styled(NavLink)`
  display: none;
  color: var(--color-text);
  font-size: var(--fv-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);

  &.active {
    text-decoration: underline;
    };
    
    @media (min-width: 768px) {
    display: block;
  }
`;

export const TitleIcon = styled(NavLink)`
cursor: pointer;
  &.active {
    border-bottom: 2px solid var(--primaryBtnColor);
    };
@media (min-width: 768px) {
    display: none;
  }
`

export const ModeSwitcherText = styled.div`
display: none;
  color: var(--color-text);
  font-size: var(--fv-sm);
  font-weight: var(--fw-bold);
  cursor: pointer;
  text-transform: capitalize;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const ModeSwitcherIcon = styled.div`
cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`