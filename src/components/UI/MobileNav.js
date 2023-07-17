import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import LanguageContext from "../Context/language-context";
import sanityClient from "../../client";
// import { useState } from "react";
import image from "../../images/image07.jpg";

export default function MobileNav(props) {
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
          mobilelogo{
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
             mobilelogo{
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
      <aside className={`side-widget ${props.active}`}>
        <svg viewBox="0 0 600 1080" preserveAspectRatio="none" version="1.1">
          <path d="M540,1080H0V0h540c0,179.85,0,359.7,0,539.54C540,719.7,540,899.85,540,1080z" />
        </svg>
        <figure className="logo">
          <Link to="/">
            <img src={navData.mobilelogo.asset.url} alt="logo" />
          </Link>
        </figure>
        <div className="display-mobile">
          <div className="custom-menu">
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
        </div>
      </aside>
    )
  );
}
