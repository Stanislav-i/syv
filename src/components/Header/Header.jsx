import { useEffect } from 'react';
import { Container } from 'components/Container';
import { changeTheme, selectTheme } from 'redux/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  HeaderEl,
  Wrapper,
  Title,
  ModeSwitcher,
  TitleCatalog,
  TitleFav,
} from './Header.styled';

export const Header = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleChange = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(nextTheme));
  };

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Home</Title>
          <TitleCatalog>Catalog</TitleCatalog>
          <TitleFav>Favourites</TitleFav>
          <ModeSwitcher onClick={handleChange}>
            <span style={{ marginLeft: '0.75rem' }}>
              {theme === 'light' ? 'dark' : 'light'} Mode
            </span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
