export default function Footer() {
  // const [footerData, setFooterData] = useState(null);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type == "footer"]{
  //          about,
  //          link1,
  //          link2,
  //          link3,
  //          link4,
  //          connect,
  //          facebook,
  //          twitter,
  //          youtube,
  //          visit,
  //          address,
  //          number,
  //       }`
  //     )
  //     .then((data) => setFooterData(data))
  //     .catch(console.error);
  // }, []);
  // if (!footerData) {
  //   return <div>...Loading</div>;
  // }
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h6 className="widget-title">About Museum</h6>
            <ul className="footer-menu">
              <li>
                <a href="#">About us </a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">National work</a>
              </li>
              <li>
                <a href="#">International work</a>
              </li>
            </ul>
          </div>
          {/* end col-4 */}
          <div className="col-lg-4 col-md-6">
            <h6 className="widget-title">Connect Us</h6>
            <ul className="social-media">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" /> /wandau-uk
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" /> /wandau-museum
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube" /> /wandau-tv
                </a>
              </li>
            </ul>
          </div>
          {/* end col-4 */}
          <div className="col-lg-4">
            <h6 className="widget-title">Visit Us Now</h6>
            <address className="address">
              Cromwell Road New Town SW7 <strong>London - England</strong>
              <i className="fas fa-info-circle" /> +44 (0)20 7942 2000
            </address>
          </div>
          {/* end col-4 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
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
  );
}
