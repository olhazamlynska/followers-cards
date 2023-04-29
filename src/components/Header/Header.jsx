import Container from 'components/Container/Container';
import { HeaderStyled } from './Header.styled';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
