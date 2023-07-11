import { Link } from "react-router-dom";
import "../../css/style.css";
import logo from "../../images/logo.png";
export default function NavBar(props) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Image" />
        </Link>
      </div>
      {/* end logo */}
      <div className="custom-menu">
        <ul>
          <li>
            <Link to="#">EN</Link>
          </li>
          <li>
            <Link to="#">IT</Link>
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
    </nav>
  );
}
