import { Link } from 'react-router-dom'
import "../../css/navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="images/logo.png" alt="Image" />
        </Link>
      </div>
      {/* end logo */}
      <div className="custom-menu">
        <ul>
          <li>
            <Link to="#">Eng</Link>
          </li>
          <li>
            <Link to="#">Rus</Link>
          </li>
        </ul>
      </div>
      {/* end custom-menu */}
      <div className="site-menu">
        <ul>
          <li>
            <Link to="/visit">Visit</Link>
          </li>
          <li>
            <Link to="/exhibition">Exhibitions</Link>
          </li>
          <li>
            <Link to="/collection">Collections</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {/* end site-menu */}
      <div className="search-button">
        <i className="far fa-search" />
      </div>
      {/* end search-button */}
      <div className="hamburger-menu">
        <svg className="hamburger" width={30} height={30} viewBox="0 0 30 30">
          <path className="line line-top" d="M0,9h30" />
          <path className="line line-center" d="M0,15h30" />
          <path className="line line-bottom" d="M0,21h30" />
        </svg>
      </div>
      {/* end hamburger-menu */}
      <div className="navbar-button">
        <Link to="/membership">GET A TICKET</Link>
      </div>
      {/* end navbar-button */}
    </nav>
  );
}
