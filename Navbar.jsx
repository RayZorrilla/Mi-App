import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Inicio</Link>
    <Link to="/about">Sobre O&M</Link>
    <Link to="/programs">Programas</Link>
    <Link to="/contact">Contacto</Link>
  </nav>
);

export default Navbar;