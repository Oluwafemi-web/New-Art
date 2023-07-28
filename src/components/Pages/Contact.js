import { useState, useEffect, useContext } from "react";
import SanityContext from "../Context/sanity-context";
import LanguageContext from "../Context/language-context";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import icon from "../../images/icon-info.png";
import sanityClient from "../../client";
// import UI components
import Header from "../UI/Header";
import { PortableText } from "@portabletext/react";

export default function Contact() {
  const [contactHeader, setContactHeader] = useState(null);
  const [contactData, setContactData] = useState(null);

  const sanityCtx = useContext(SanityContext);
  const ctx = useContext(LanguageContext);

  const handleSanityLoaded = () => {
    sanityCtx.changeState(true);
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contactheader" && language == $language]{
           title,
           description,
           image{
            asset->{
              _id,
              url
            }
          },
          _translations[] {
            value->{
              title,
              description,
              image{
               asset->{
                 _id,
                 url
               }
             }
            }
         }
        }`,
        { language: ctx.languageData }
      )
      .then((data) => setContactHeader(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "contacts" && language == $language]{
           heading,
           number,
           enquiry,
           enquiry2,
          _translations[] {
            value->{
              heading,
              number,
              enquiry,
              enquiry2,
            }
         }
        }`,
        { language: ctx.languageData }
      )
      .then((data) => setContactData(data[0]))
      .catch(console.error);
  }, [ctx.languageData]);

  if (!contactHeader || !contactData) {
    return sanityCtx.changeState(false);
  } else {
    handleSanityLoaded();
  }
  return (
    <>
      {contactHeader &&
        contactHeader.map((item, index) => (
          <>
            <Header
              title={item.title}
              description={item.description}
              background={item.image.asset.url}
              key={index}
            />
            <section className="content-section" data-background="#fffbf7">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="section-title text-center">
                      {/* <figure>
                  <img src={icon} alt="Image" />
                </figure> */}
                      <PortableText value={contactData.heading} />
                    </div>
                    {/* end section-title */}
                  </div>
                  {/* end col-12 */}
                  <div className="col-lg-5">
                    <div className="contact-box">
                      <PortableText value={contactData.number} />
                    </div>
                    {/* end contact-box */}
                    <div className="contact-box">
                      <PortableText value={contactData.enquiry} />
                    </div>
                    {/* end contact-box */}
                    <div className="contact-box">
                      <PortableText value={contactData.enquiry2} />
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
                        <textarea
                          placeholder="Your Message"
                          defaultValue={""}
                        />
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
          </>
        ))}
      <div className="google-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10202.81803653302!2d30.552083977692742!3d50.4247130103151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf73cbd2db91%3A0x8141e376ee29dd50!2sZvirynetske%20Cemetery!5e0!3m2!1str!2str!4v1614660000205!5m2!1str!2str" />
      </div>
    </>
  );
}
