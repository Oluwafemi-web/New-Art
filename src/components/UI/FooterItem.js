export default function FooterItem(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <h6 className="widget-title">{props.about}</h6>
          <ul className="footer-menu">
            <li>
              <a href="#">{props.link1}</a>
            </li>
            <li>
              <a href="#">{props.link2}</a>
            </li>
            <li>
              <a href="#">{props.link3}</a>
            </li>
            <li>
              <a href="#">{props.link4}</a>
            </li>
          </ul>
        </div>
        {/* end col-4 */}
        <div className="col-lg-4 col-md-6">
          <h6 className="widget-title">{props.connect}</h6>
          <ul className="social-media">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" /> /{props.facebook}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" /> /{props.twitter}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube" /> /{props.youtube}
              </a>
            </li>
          </ul>
        </div>
        {/* end col-4 */}
        <div className="col-lg-4">
          <h6 className="widget-title">{props.visit}</h6>
          <address className="address">
            {props.address}
            <i className="fas fa-info-circle" /> {props.phonenumber}
          </address>
        </div>
        {/* end col-4 */}
      </div>
      {/* end row */}
    </div>
  );
}
