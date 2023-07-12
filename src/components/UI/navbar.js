import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../css/style.css";
import sanityClient from "../../client";
export default function NavBar(props) {
  const [navData, setNavData] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "navbar"]{
           link1,
           link2,
           link3,
           link4,
           link5,
           logo{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setNavData(data[0]))
      .catch(console.error);
  }, []);
  return (
    navData && (
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={navData.logo.asset.url} alt="Image" />
          </Link>
        </div>
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
        <div className="site-menu">
          <ul>
            <li>
              <Link to="/visit">{navData.link1}</Link>
            </li>
            <li>
              <Link to="/exhibition">{navData.link2}</Link>
            </li>
            <li className="collection-parent">
              <Link to="#" className="collection-drop">
                {navData.link3}
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
              <Link to="/about">{navData.link4}</Link>
            </li>
            <li>
              <Link to="/contact">{navData.link5}</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  );
}
