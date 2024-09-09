import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/activities">Activities</Link></li>
        </ul>
      </nav>
    </header>
  );
}