import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo-light.png";
import image from "../../images/image07.jpg";

export default function MobileNav(props) {
  return (
    <aside className={`side-widget ${props.active}`}>
      <svg viewBox="0 0 600 1080" preserveAspectRatio="none" version="1.1">
        <path d="M540,1080H0V0h540c0,179.85,0,359.7,0,539.54C540,719.7,540,899.85,540,1080z" />
      </svg>
      <figure className="logo">
        <img src={logo} alt="Image" />
      </figure>
      {/* end logo */}
      <div className="inner">
        <div className="widget">
          <figure>
            <img src={image} alt="Image" />
          </figure>
          <p>
            It speedily me addition <strong>weddings vicinity</strong> in
            pleasure. Happiness commanded an conveying breakfast in. Regard her
            say warmly elinor. Him these are visit front end for
            <u>seven walls</u>. Money eat scale now ask law learn.
          </p>
        </div>
        {/* end widget */}
        <div className="widget">
          <h6 className="widget-title">Opening Hours</h6>
          <p>
            Tuesday ‒ Friday: 09:00 ‒ 17:00
            <br />
            Friday ‒ Monday: 10:00 ‒ 20:00
          </p>
        </div>
        {/* end widget */}
      </div>
      {/* end inner */}
      <div className="display-mobile">
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
      </div>
      {/* end display-mobile */}
    </aside>
  );
}
