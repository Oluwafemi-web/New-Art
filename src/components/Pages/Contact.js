import { useState, useEffect, useContext } from "react";
import SanityContext from "../Context/sanity-context";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import icon from "../../images/icon-info.png";
import sanityClient from "../../client";
// import UI components
import Header from "../UI/Header";

export default function Contact() {
  const [contactHeader, setContactHeader] = useState(null);
  const sanityCtx = useContext(SanityContext);

  const handleSanityLoaded = () => {
    sanityCtx.changeState(true);
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contactheader"]{
             title,
             description,
             image{
              asset->{
                _id,
                url
              }
            }
          }`
      )
      .then((data) => setContactHeader(data))
      .catch(console.error);
  }, []);
  if (!contactHeader) {
    return sanityCtx.changeState(false);
  } else {
    handleSanityLoaded();
  }
  return (
    <>
      {contactHeader &&
        contactHeader.map((item, index) => (
          <Header
            title={item.title}
            description={item.description}
            background={item.image.asset.url}
            key={index}
          />
        ))}
      <section className="content-section" data-background="#fffbf7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <figure>
                  <img src={icon} alt="Image" />
                </figure>
                <h2>
                  Help us to respond to <br />
                  you more quickly
                </h2>
              </div>
              {/* end section-title */}
            </div>
            {/* end col-12 */}
            <div className="col-lg-5">
              <div className="contact-box">
                <h6>Main Contact Number</h6>
                <p>020 3461 4444 (Monday to Friday, 9am to 5pm)</p>
                <p>
                  Please use this number if you know the name of the person or
                  department you would like to contact. Or you can fax 020 3461
                  4771.
                </p>
              </div>
              {/* end contact-box */}
              <div className="contact-box">
                <h6>General enquiries</h6>
                <p>
                  <a href="#">enquiries@wandau.co.uk</a>
                  020 3461 4878 (Monday to Friday: 10:00 - 17:00).
                </p>
              </div>
              {/* end contact-box */}
              <div className="contact-box">
                <h6>Media enquiries</h6>
                <p>
                  <a href="#">sponsor@wandau.co.uk</a>
                  The person or department you would like to contact
                </p>
              </div>
              {/* end contact-box */}
            </div>
            {/* end col-5 */}
            <div className="col-lg-5">
              <div className="contact-form">
                <div className="mb-3">
                  <input type="text" placeholder="Complete Name" />
                </div>
                {/* end mb-3 */}
                <div className="mb-3">
                  <input type="text" placeholder="E-mail Address" />
                </div>
                {/* end mb-3 */}
                <div className="mb-3">
                  <input type="text" placeholder="Phone Number" />
                </div>
                {/* end mb-3 */}
                <div className="mb-3">
                  <textarea placeholder="Your Message" defaultValue={""} />
                </div>
                {/* end mb-3 */}
                <div className="mb-3">
                  <input type="submit" defaultValue="Send Us" />
                </div>
                {/* end mb-3 */}
              </div>
              {/* end contact-form */}
            </div>
            {/* end col-5 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end content-section */}
      <div className="google-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10202.81803653302!2d30.552083977692742!3d50.4247130103151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf73cbd2db91%3A0x8141e376ee29dd50!2sZvirynetske%20Cemetery!5e0!3m2!1str!2str!4v1614660000205!5m2!1str!2str" />
      </div>
      {/* end google-maps */}
    </>
  );
}
