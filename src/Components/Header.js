import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="header">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Calculator">Calculator</Link></li>
      <li><Link to="/Quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Header;
