import Container from 'components/Container/Container';
import { HeaderStyled } from './Header.styled';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  return (
    <HeaderStyled>
      <Container sx={{ width: '100%' }}>
        <Navigation />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
