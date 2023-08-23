import { useState, useEffect } from "react";
import sanityClient from "../../client";
export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "footer"]{
           about,
           connect,
           facebook,
           instagram,
           twitter,
           visit,
           address,
           number,
        }`
      )
      .then((data) => setFooterData(data[0]))
      .catch(console.error);
  }, []);
  if (!footerData) {
    return <div>...Loading</div>;
  }
  return (
    footerData && (
      <footer className="footer">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h6 className="widget-title">{footerData.connect}</h6>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" /> /{footerData.instagram}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" /> /{footerData.facebook}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter" /> /
                    {footerData.twitter}
                  </a>
                </li>
              </ul>
            </div>
            {/* end col-4 */}
            <div className="col-lg-6 col-md-6">
              <h6 className="widget-title">{footerData.visit}</h6>
              <address className="address">
                {footerData.address}
                <br />
                <i className="fas fa-info-circle" /> {footerData.number}
              </address>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <span className="copyright">© 2023 graziazuccolotto</span>
            <span className="creation">
              Website by <a href="#">iGerald</a>
            </span>
          </div>
          {/* end container */}
        </div>

        {/* end footer-bottom */}
      </footer>
    )
  );
}
