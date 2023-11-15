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

export const Title = styled(NavLink)`
  color: var(--color-text);
  font-size: var(--fv-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);

  &.active {
    text-decoration: underline;
    };
`;

export const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fv-sm);
  font-weight: var(--fw-bold);
  cursor: pointer;
  text-transform: capitalize;
`;