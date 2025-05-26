import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          🐾 Big Cats
        </Link>

        <a
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>




      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item"><i className="ml-2 fa-solid fa-house-chimney"></i> Home</Link> 
          <Link to="/about" className="navbar-item"><i className="ml-2 fa-solid fa-info"></i> About</Link> 
          <Link to="/contacts" className="navbar-item"><i className="ml-2 fa-solid fa-phone"></i> Contact</Link> 
          <Link to="/resources" className="navbar-item"><i className="ml-2 fa-solid fa-book"></i> Resources</Link> 
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
