import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import { HeaderStyled } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Navigation />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
