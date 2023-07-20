import { useState, useEffect, useContext } from "react";
import { PortableText } from "@portabletext/react";

import { Link } from "react-router-dom";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import SanityContext from "../Context/sanity-context";
import LanguageContext from "../Context/language-context";
import "../../css/odometer.min.css";

import "../../css/style.css";

// import UI components
import Header from "../UI/Header";

//import images
import icon from "../../images/title-shape.png";
import sanityClient from "../../client";

export default function Visit() {
  const [visitHeader, setVisitHeader] = useState(null);
  const [visitData, setVisitData] = useState(null);
  const [frequentData, setFrequentData] = useState(null);
  const sanityCtx = useContext(SanityContext);
  const ctx = useContext(LanguageContext);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "visitheader" && language == $language]{
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
      .then((data) => setVisitHeader(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "frequentlyasked" && language == $language]{
          heading,
          text,
          _translations[] {
            value->{
              heading,
              text
            }
         }
        }`,
        { language: ctx.languageData }
      )
      .then((data) => setFrequentData(data[0]))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "visit" && language == $language]{
           text,
           icon{
            asset->{
              _id,
              url
            }
          },
          opening,
          date,
          image{
            asset->{
              _id,
              url
            }
          },
          address,
          list1,
          list2,
          list3,
          list4,
          image2{
            asset->{
              _id,
              url
            }
          },
          safe,
          safetext,
          safeimg{
            asset->{
              _id,
              url
            }
          },
          image3{
            asset->{
              _id,
              url
            }
          },
          _translations[] {
            value->{
              text,
           icon{
            asset->{
              _id,
              url
            }
          },
          opening,
          date,
          image{
            asset->{
              _id,
              url
            }
          },
          address,
          list1,
          list2,
          list3,
          list4,
          image2{
            asset->{
              _id,
              url
            }
          },
          safe,
          safetext,
          safeimg{
            asset->{
              _id,
              url
            }
          },
          image3{
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
      .then((data) => setVisitData(data[0]))
      .catch(console.error);
  }, [ctx.languageData]);
  const handleSanityLoaded = () => {
    sanityCtx.changeState(true);
  };
  useEffect(() => {
    if (visitHeader && visitData && frequentData) {
      handleSanityLoaded();
      // Run onSanityLoaded if all three states have data
    }
  }, [visitData, frequentData, visitHeader, handleSanityLoaded]);

  return (
    <>
      {visitHeader &&
        visitHeader.map((item, index) => (
          <Header
            title={item.title}
            description={item.description}
            background={item.image.asset.url}
            key={index}
          />
        ))}
      <section
        className="content-section"
        data-background="#fffbf7"
        style={{ background: `rgb(255, 251, 247) ` }}
        data-scroll-section
      >
        <div className="container">
          {visitData && (
            <div className="row align-items-center">
              <div className="col-lg-12">
                <img
                  src={visitData.image.asset.url}
                  alt="Image"
                  className="side-image is-reveal fl-right wd-50"
                />
                <div>
                  <PortableText value={visitData.text} />
                </div>
              </div>
              {/* end col-6 */}
            </div>
          )}
        </div>
      </section>
      <section className="content-section">
        {visitData && (
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="contact-box">
                  <PortableText value={visitData.address} />
                </div>
                <Link to="/contact" className="custom-button">
                  CONTACT US
                </Link>
                <div className="clearfix spacing-50" />
              </div>
              <div className="col-lg-7">
                <div className="side-list">
                  <ul>
                    <li>{visitData.list1}</li>
                    <li>{visitData.list2}</li>
                    <li>{visitData.list3}</li>
                    <li>{visitData.list4}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="content-section no-spacing">
        {visitData && (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <figure
                  className="image-box is-reveal"
                  data-scroll
                  data-scroll-speed={1}
                >
                  <img src={visitData.image2.asset.url} alt="Image" />{" "}
                </figure>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="content-section">
        {visitData && (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-box">
                  <h2>{visitData.safe}</h2>
                </div>
              </div>
              {/* end col-2 */}
              <div className="col-lg-12 col-md-12">
                <div className="text-box">
                  <PortableText value={visitData.safetext} />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      {visitData && (
        <section
          className="content-section"
          style={{ background: `url(${visitData.image3.asset.url})` }}
          data-scroll
          data-scroll-speed={1}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="clearfix spacing-400" />
              </div>
              {/* end col-12 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
      )}

      {/* end content-section */}

      {/* end content-section */}
      <section className="content-section">
        <div className="container">
          {frequentData && (
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center">
                  <PortableText value={frequentData.heading} />
                </div>
              </div>
              <div className="col-lg-8">
                <PortableText value={frequentData.text} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
