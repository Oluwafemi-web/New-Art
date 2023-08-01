import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "../../css/style.css";
import sanityClient from "../../client";
import LanguageContext from "../Context/language-context";
export default function NavBar(props) {
  const [navData, setNavData] = useState();
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "navbar" && language == $language]{
           link1,
           link2,
           link3,
           link4,
           link5,
           language,
           logo{
            asset->{
              _id,
              url
            }
          },
          _translations[] {
            value->{
              link1,
              link2,
              link3,
              link4,
              link5,
              language,
              logo{
               asset->{
                 _id,
                 url
               }
             }
            }
         }
        }`,
        {
          language: ctx.languageData,
        }
      )
      .then((data) => setNavData(data[0]))
      .catch(console.error);
  }, [ctx.languageData]);
  return (
    navData && (
      <nav className="navbar col-12">
        <div className="logo col-5">
          <Link to="/">
            <img src={navData.logo.asset.url} alt="Image" />
          </Link>
        </div>
        <div className="custom-menu col-2">
          <ul>
            <li>
              <Link to="#" onClick={props.enClicked}>
                EN
              </Link>
            </li>
            <li>
              <Link to="#" onClick={props.itClicked}>
                IT
              </Link>
            </li>
          </ul>
        </div>
        <div className="site-menu col-5">
          <ul>
            <li>
              <Link to="/visit">{navData.link1}</Link>
            </li>
            <li>
              <Link to="/exhibition">{navData.link2}</Link>
            </li>
            <li
              className="collection-parent"
              onMouseEnter={props.showDropDown}
              onMouseLeave={props.hideDropDown}
            >
              <Link to="#" className="collection-drop">
                {navData.link3}
              </Link>
              <ul className={`collection-sub ${props.hovered}`}>
                <li>
                  <Link to="/collection2023">2023 - 2014</Link>
                </li>
                <li>
                  <Link to="/collection2013">2013 - 2009</Link>
                </li>
                <li>
                  <Link to="/primadel2009">Prima del 2009</Link>
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
        <div className="hamburger-menu" onClick={props.clickeventHandler}>
          <svg className="hamburger" width={30} height={30} viewBox="0 0 30 30">
            <path className="line line-top" d="M0,9h30" />
            <path className="line line-center" d="M0,15h30" />
            <path className="line line-bottom" d="M0,21h30" />
          </svg>
        </div>
      </nav>
    )
  );
}
