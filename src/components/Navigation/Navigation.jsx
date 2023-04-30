import { Link, Nav } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/tweets">Tweets</Link>
    </Nav>
  );
};

export default Navigation;
