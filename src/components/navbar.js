import "../css/navbar.css";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="index-2.html">
          <img src="images/logo.png" alt="Image" />
        </a>
      </div>
      {/* end logo */}
      <div className="custom-menu">
        <ul>
          <li>
            <a href="#">Eng</a>
          </li>
          <li>
            <a href="#">Rus</a>
          </li>
        </ul>
      </div>
      {/* end custom-menu */}
      <div className="site-menu">
        <ul>
          <li>
            <a href="visit.html">Visit</a>
          </li>
          <li>
            <a href="exhibitions.html">Exhibitions</a>
          </li>
          <li>
            <a href="collections.html">Collections</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
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
        <a href="membership.html">GET A TICKET</a>
      </div>
      {/* end navbar-button */}
    </nav>
  );
}
