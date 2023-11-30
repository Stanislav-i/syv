import { useEffect } from 'react';
import { Container } from 'components/Container';
import { changeTheme, selectTheme } from 'redux/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  HeaderEl,
  Wrapper,
  TitleText,
  ModeSwitcherText,
  TitleIcon,
  ModeSwitcherIcon,
} from './Header.styled';
import { HiHome, HiViewGrid, HiHeart, HiMoon, HiOutlineSun } from 'react-icons/hi';

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
          <TitleIcon to="/">
            <HiHome size="16px" />
          </TitleIcon>
          <TitleIcon to="/catalog">
            <HiViewGrid size="16px" />
          </TitleIcon>
          <TitleIcon to="/favourites">
            <HiHeart size="16px" />
          </TitleIcon>
          <TitleText to="/">Home</TitleText>
          <TitleText to="/catalog">Catalog</TitleText>
          <TitleText to="/favourites">Favourites</TitleText>
          <ModeSwitcherIcon  onClick={handleChange}>
          {theme === 'light' ? (
              <HiMoon size="16px" />
            ) : (
              <HiOutlineSun size="16px" />
            )}
          </ModeSwitcherIcon>
          <ModeSwitcherText onClick={handleChange}>
            <span>{theme === 'light' ? 'dark' : 'light'} Mode</span>
          </ModeSwitcherText>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
