import { useState, useEffect, useContext } from "react";
import { PortableText } from "@portabletext/react";
import SanityContext from "../Context/sanity-context";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";
// import "../../css/style2.css";
// import "../../css/cs_layout1.css";
// import "../../css/cs_layout2.css";
// import "../../css/cs_skin-8.css";

// import "../../css/general.css";
// import "../../css/frontend.css";
// import "../../css/post18.css";

import sanityClient from "../../client";

// import UI components
import Header from "../UI/Header";

export default function About() {
  const [aboutHeader, setAboutHeader] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const sanityCtx = useContext(SanityContext);

  const handleSanityLoaded = () => {
    sanityCtx.changeState(true);
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "aboutheader"]{
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
      .then((data) => setAboutHeader(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "about"]{
             mission,
             description,
             image{
              asset->{
                _id,
                url
              }
            },
            vision,
             description2,
             image2{
              asset->{
                _id,
                url
              }
            },
            goals,
             description3,
             image3{
              asset->{
                _id,
                url
              }
            }
          }`
      )
      .then((data) => setAboutData(data[0]))
      .catch(console.error);
  }, []);
  if (!aboutHeader) {
    return sanityCtx.changeState(false);
  } else {
    handleSanityLoaded();
  }
  return (
    <>
      {aboutHeader &&
        aboutHeader.map((item, index) => (
          <Header
            title={item.title}
            description={item.description}
            background={item.image.asset.url}
            key={index}
          />
        ))}
      <>
        <div className="container-fluid pd-top-90">
          <div className="col-12 row g-0">
            <div className="col-lg-3">
              <article className="about-item">
                <div className="about-inner">
                  <div
                    className="about-inner-img"
                    style={{
                      backgroundImage:
                        "url(https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-2.jpg)",
                    }}
                  >
                    <img src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-2.jpg" />

                    <a
                      className="aheto-cpt-article__img-link"
                      href="https://mooseoom.foxthemes.me/portfolio/abstract-art-with-shapes/"
                      title="Abstract Art with Shapes"
                    />
                  </div>
                  <div className="about-inner-content">
                    <a
                      href="https://mooseoom.foxthemes.me/portfolio-category/mission-and-history/"
                      rel="tag"
                    >
                      Mission and History
                      <h5>Abstract Art with Shapes</h5>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-3">
              <article className="about-item">
                <div className="about-inner">
                  <div
                    className="about-inner-img"
                    style={{
                      backgroundImage:
                        "url(https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-3.jpg)",
                    }}
                  >
                    <img src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-3.jpg" />

                    <a
                      className="aheto-cpt-article__img-link"
                      href="https://mooseoom.foxthemes.me/portfolio/abstract-art-with-shapes/"
                      title="Abstract Art with Shapes"
                    />
                  </div>
                  <div className="about-inner-content">
                    <a
                      href="https://mooseoom.foxthemes.me/portfolio-category/mission-and-history/"
                      rel="tag"
                    >
                      Mission and History
                      <h5>Breath of City Jungle</h5>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-3">
              <article className="about-item">
                <div className="about-inner">
                  <div
                    className="about-inner-img"
                    style={{
                      backgroundImage:
                        "url(https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-1.jpg)",
                    }}
                  >
                    <img src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-1.jpg" />

                    <a
                      className="aheto-cpt-article__img-link"
                      href="https://mooseoom.foxthemes.me/portfolio/abstract-art-with-shapes/"
                      title="Abstract Art with Shapes"
                    />
                  </div>
                  <div className="about-inner-content">
                    <a
                      href="https://mooseoom.foxthemes.me/portfolio-category/mission-and-history/"
                      rel="tag"
                    >
                      Mission and History
                      <h5>Gallery Construction</h5>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-3">
              <article className="about-item">
                <div className="about-inner">
                  <div
                    className="about-inner-img"
                    style={{
                      backgroundImage:
                        "url(https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-4.jpg)",
                    }}
                  >
                    <img src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-4.jpg" />

                    <a
                      className="aheto-cpt-article__img-link"
                      href="https://mooseoom.foxthemes.me/portfolio/abstract-art-with-shapes/"
                      title="Abstract Art with Shapes"
                    />
                  </div>
                  <div className="about-inner-content">
                    <a
                      href="https://mooseoom.foxthemes.me/portfolio-category/mission-and-history/"
                      rel="tag"
                    >
                      Mission and History
                      <h5>Gallery Construction</h5>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
          {aboutData && (
            <>
              <div className="container mission pd-90">
                <div className="col-6">
                  <img src={aboutData.image.asset.url} />
                </div>
                <div className="col-6 pd-90">
                  <h2>{aboutData.mission}</h2>
                  <PortableText value={aboutData.description} />
                </div>
              </div>
              <div className="container mission pd-90">
                <div className="col-6 pd-90">
                  <h2>{aboutData.vision}</h2>
                  <PortableText value={aboutData.description2} />
                </div>
                <div className="col-6">
                  <img src={aboutData.image2.asset.url} />
                </div>
              </div>
              <div className="container mission pd-90">
                <div className="col-6">
                  <img src={aboutData.image3.asset.url} />
                </div>
                <div className="col-6 pd-90">
                  <h2>{aboutData.goals}</h2>
                  <PortableText value={aboutData.description3} />
                </div>
              </div>
            </>
          )}
        </div>
      </>
    </>
  );
}
