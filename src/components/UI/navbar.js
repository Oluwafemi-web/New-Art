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
          <li className="collection-parent">
            <Link to="#" className="collection-drop">
              Collections
            </Link>
            <ul className="collection-sub">
              <li>
                <Link to="/collection2023">2023 - 2019</Link>
              </li>
              <li>
                <Link to="/collection2018">2018 - 2014</Link>
              </li>
              <li>
                <Link to="/collection2013">2013 - 2009</Link>
              </li>
            </ul>
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
