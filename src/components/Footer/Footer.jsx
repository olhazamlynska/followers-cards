import Container from 'components/Container/Container';
import logo from '../../images/logo@1x.png';
import { StyledFotter, StyledText } from './Footer.styled';

const Footer = () => {
  return (
    <Container>
      <StyledFotter>
        <StyledText>Join us on our site </StyledText>
        <a href="https://m.goit.global/ua/">
          <img src={logo} alt="Logo" width="76" height="22" />
        </a>
      </StyledFotter>
    </Container>
  );
};

export default Footer;
