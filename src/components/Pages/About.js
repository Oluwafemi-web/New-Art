import { useState, useEffect, useContext } from "react";
import SanityContext from "../Context/sanity-context";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";
import "../../css/style2.css";
import "../../css/cs_layout1.css";
import "../../css/cs_layout2.css";
import "../../css/cs_skin-8.css";


import "../../css/general.css";
import "../../css/frontend.css";
import "../../css/post18.css";



import sanityClient from "../../client";

// import UI components
import Header from "../UI/Header";

export default function About() {
  const [aboutHeader, setAboutHeader] = useState(null);
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
            {/* <div className="aheto-preloader with_image">
              <img
                src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/10/logo-2.png"
                alt="Mooseoom"
              />
            </div> */}
            <div className="container">
              <div
                data-elementor-type="wp-page"
                data-elementor-id={18}
                className="elementor elementor-18"
                data-elementor-settings="[]"
              >
                <div className="elementor-inner">
                  <div className="elementor-section-wrap">
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-d998975 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="d998975"
                      data-element_type="section"
                      data-settings='{"stretch_section":"section-stretched"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9aa5fdc"
                            data-id="9aa5fdc"
                            data-element_type="column"
                            data-settings='{"background_background":"classic"}'
                          ></div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-90ac3d8 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="90ac3d8"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-01df609"
                            data-id="01df609"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-eea0132 elementor-widget elementor-widget-aheto_heading"
                                  data-id="eea0132"
                                  data-element_type="widget"
                                  data-widget_type="aheto_heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="aheto-heading aheto-heading--mooseoom__simple t-left aheto_heading_64a0a111be495 ">
                                      <h2 className="aheto-heading__title">
                                        Our Museum History.
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-28ff9a3 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="28ff9a3"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-28fb47f"
                            data-id="28fb47f"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-2047584 elementor-widget elementor-widget-aheto_features-timeline"
                                  data-id={2047584}
                                  data-element_type="widget"
                                  data-widget_type="aheto_features-timeline.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="aheto-timeline--mooseoom-modern dark-version aheto_features-timeline_64a0a111c0097 ">
                                      <section className="aheto-timeline--mooseoom-modern">
                                        <div className="aheto-timeline__timeline">
                                          <div className="aheto-timeline__events-wrapper">
                                            <div className="aheto-timeline__events" style={{width: "1760px"}}>
                                              <ol>
                                                <li>
                                                  <a
                                                    href="#0"
                                                    className="selected older-event"
                                                    data-date={1991}
                                                    style={{left: `${110}px`}}
                                                  >
                                                    <h5>1991</h5>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#0" data-date={1994} class="older-event" style={{left: `${275}px`}}>
                                                    <h5>1994</h5>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#0" data-date={1995} class="older-event" style={{left: `${330}px`}}>
                                                    <h5>1995</h5>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#0" data-date={1999} class="older-event" style={{left: `${550}px`}}>
                                                    <h5>1999</h5>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#0" data-date={2003} class="older-event" style={{left: `${770}px`}}>
                                                    <h5>2003</h5>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#0" data-date={2008} class="older-event" style={{left: `${1045}px`}}>
                                                    <h5>2008</h5>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#0" data-date={2014} class="older-event" style={{left: `${1375}px`}}>
                                                    <h5>2014</h5>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#0" data-date={2019} class="older-event" style={{left: `${1650}px`}}>
                                                    <h5>2019</h5>
                                                  </a>
                                                </li>
                                              </ol>
                                              <span
                                                className="aheto-timeline__filling-line"
                                                aria-hidden="true"
                                              />
                                            </div>{" "}
                                            {/* .events */}
                                          </div>{" "}
                                          {/* .events-wrapper */}
                                          <ul className="aheto-timeline__navigation">
                                            <li>
                                              <a
                                                href="#0"
                                                className="prev inactive ion-ios-arrow-left"
                                              />
                                            </li>
                                            <li>
                                              <a
                                                href="#0"
                                                className="next ion-ios-arrow-right"
                                              />
                                            </li>
                                          </ul>{" "}
                                          {/* .cd-timeline-navigation */}
                                        </div>{" "}
                                        {/* .timeline */}
                                        <div className="aheto-timeline__events-content">
                                          <ol>
                                            <li className="selected" data-date={1991}>
                                              <div className="aheto-timeline__wrap">
                                                <div className="aheto-timeline__image-wrap">
                                                  <img
                                                    className="aheto-timeline-slider__add-image"
                                                    alt="image"
                                                    src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/exhibition-362163_1920-1-444x333.jpg"
                                                  />
                                                </div>
                                                <div className="aheto-timeline__content">
                                                  <h5 className="aheto-timeline__title">
                                                    The Great Beginning
                                                  </h5>
                                                  <p className="aheto-timeline__desc">
                                                    The MooM Art Collections is founded
                                                    by a group of artists and patrons
                                                    prompted by the government's
                                                    inadequate museum funding. By its
                                                    first meeting it has 308 members and
                                                    $700 in funds.
                                                  </p>
                                                  <div className="aheto-timeline-slider__links">
                                                    <a
                                                      href="https://mooseoom.foxthemes.me/about-us/"
                                                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                                                      target="_self"
                                                      aria-label="Learn more"
                                                    >
                                                      Learn more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li data-date={1994}>
                                              <div className="aheto-timeline__wrap">
                                                <div className="aheto-timeline__image-wrap">
                                                  <img
                                                    className="aheto-timeline-slider__add-image"
                                                    alt="our-second-galery"
                                                    src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-second-galery-444x333.jpg"
                                                  />
                                                </div>
                                                <div className="aheto-timeline__content">
                                                  <h5 className="aheto-timeline__title">
                                                    Our Office Gallery Opened.
                                                  </h5>
                                                  <p className="aheto-timeline__desc">
                                                    An additional new entrance to the
                                                    gallery was created at the rear of
                                                    the building, leading down from the
                                                    new first floor gallery into a
                                                    newly-opened up section of the
                                                    Museum Gardens, which has been
                                                    developed into a public space.
                                                  </p>
                                                  <div className="aheto-timeline-slider__links">
                                                    <a
                                                      href="https://mooseoom.foxthemes.me/location/"
                                                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                                                      target="_self"
                                                      aria-label="Learn more"
                                                    >
                                                      Learn more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li data-date={1995}>
                                              <div className="aheto-timeline__wrap">
                                                <div className="aheto-timeline__image-wrap">
                                                  <img
                                                    className="aheto-timeline-slider__add-image"
                                                    alt=""
                                                    src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-goals-1-444x333.jpg"
                                                  />
                                                </div>
                                                <div className="aheto-timeline__content">
                                                  <h5 className="aheto-timeline__title">
                                                    Fundraising and investment
                                                  </h5>
                                                  <p className="aheto-timeline__desc">
                                                    The project has brought an
                                                    investment of £8 million into the
                                                    MooM. We are very grateful to all
                                                    our funders who have made this
                                                    project possible and start new
                                                    period of art vision.
                                                  </p>
                                                  <div className="aheto-timeline-slider__links">
                                                    <a
                                                      href="https://mooseoom.foxthemes.me/leadership/"
                                                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                                                      target="_self"
                                                      aria-label="Learn more"
                                                    >
                                                      Learn more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li data-date={1999}>
                                              <div className="aheto-timeline__wrap">
                                                <div className="aheto-timeline__image-wrap">
                                                  <img
                                                    className="aheto-timeline-slider__add-image"
                                                    alt=""
                                                    src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/banner-collection-1-444x333.jpg"
                                                  />
                                                </div>
                                                <div className="aheto-timeline__content">
                                                  <h5 className="aheto-timeline__title">
                                                    Our new exhibitions
                                                  </h5>
                                                  <p className="aheto-timeline__desc">
                                                    The gallery now has three exhibition
                                                    spaces on the ground floor, capable
                                                    of hosting major national and
                                                    international exhibitions, and four
                                                    on the first floor, two of which
                                                    showcase our internationally
                                                    significant collections.
                                                  </p>
                                                  <div className="aheto-timeline-slider__links">
                                                    <a
                                                      href="https://mooseoom.foxthemes.me/exhibitions/"
                                                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                                                      target="_self"
                                                      aria-label="Learn more"
                                                    >
                                                      Learn more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li data-date={2003}>
                                              <div className="aheto-timeline__wrap">
                                                <div className="aheto-timeline__image-wrap">
                                                  <img
                                                    className="aheto-timeline-slider__add-image"
                                                    alt=""
                                                    src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/img-7-1-444x333.jpg"
                                                  />
                                                </div>
                                                <div className="aheto-timeline__content">
                                                  <h5 className="aheto-timeline__title">
                                                    A successful fundraising appeal
                                                  </h5>
                                                  <p className="aheto-timeline__desc">
                                                    Following a successful fundraising
                                                    appeal, and a pledge of £500,000
                                                    from the Art Fund, the Fitzwilliam
                                                    Museum, Cambridge, successfully
                                                    acquires the Macclesfield Psalter
                                                    and £180,000 in donations.
                                                  </p>
                                                  <div className="aheto-timeline-slider__links">
                                                    <a
                                                      href="https://mooseoom.foxthemes.me/our-gallery/"
                                                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                                                      target="_self"
                                                      aria-label="Learn more"
                                                    >
                                                      Learn more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li data-date={2008}>
                                              <div className="aheto-timeline__wrap">
                                                <div className="aheto-timeline__image-wrap">
                                                  <img
                                                    className="aheto-timeline-slider__add-image"
                                                    alt="image"
                                                    src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-vision-768x568-1-444x333.jpg"
                                                  />
                                                </div>
                                                <div className="aheto-timeline__content">
                                                  <h5 className="aheto-timeline__title">
                                                    Our new awards
                                                  </h5>
                                                  <p className="aheto-timeline__desc">
                                                    The Art Fund Prize awarded to the
                                                    the MooM. The Art Fund gives
                                                    £600,000 to Tate’s campaign to save
                                                    Rubens’s Banqueting House sketch.
                                                    The Art Fund gives an exceptional
                                                    grant of £1 million towards the
                                                    acquisition of Artist Rooms.
                                                  </p>
                                                  <div className="aheto-timeline-slider__links">
                                                    <a
                                                      href="https://mooseoom.foxthemes.me/awards/"
                                                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                                                      target="_self"
                                                      aria-label="Learn more"
                                                    >
                                                      Learn more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li data-date={2014}>
                                              <div className="aheto-timeline__wrap">
                                                <div className="aheto-timeline__image-wrap">
                                                  <img
                                                    className="aheto-timeline-slider__add-image"
                                                    alt="image"
                                                    src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/exhibition-1659447_1920-1-444x333.jpg"
                                                  />
                                                </div>
                                                <div className="aheto-timeline__content">
                                                  <h5 className="aheto-timeline__title">
                                                    The first major exhibition
                                                  </h5>
                                                  <p className="aheto-timeline__desc">
                                                    The MooM Art Gallery holds the
                                                    largest collection of work by Etty
                                                    and held the first major exhibition
                                                    of his work for 50 years, showing
                                                    many of these paintings and sketches
                                                    alongside loans from other major
                                                    galleries.
                                                  </p>
                                                  <div className="aheto-timeline-slider__links">
                                                    <a
                                                      href="https://mooseoom.foxthemes.me/exhibitions/"
                                                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                                                      target="_self"
                                                      aria-label="Learn more"
                                                    >
                                                      Learn more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li data-date={2019}>
                                              <div className="aheto-timeline__wrap">
                                                <div className="aheto-timeline__image-wrap">
                                                  <img
                                                    className="aheto-timeline-slider__add-image"
                                                    alt="image"
                                                    src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/exhibitions-751576_1920-1-444x333.jpg"
                                                  />
                                                </div>
                                                <div className="aheto-timeline__content">
                                                  <h5 className="aheto-timeline__title">
                                                    New challenges before the art issues
                                                  </h5>
                                                  <p className="aheto-timeline__desc">
                                                    Under-30s National Art Pass
                                                    launched. First Headley Fellows
                                                    announced. Support of curators
                                                    continues through AAMC conference
                                                    travel fellowship and Curatorial
                                                    Network grants.
                                                  </p>
                                                  <div className="aheto-timeline-slider__links">
                                                    <a
                                                      href="https://mooseoom.foxthemes.me/events/"
                                                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                                                      target="_self"
                                                      aria-label="Learn more"
                                                    >
                                                      Learn more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          </ol>
                                        </div>{" "}
                                        {/* .events-content */}
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-c0e5a5d elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="c0e5a5d"
                      data-element_type="section"
                      data-settings='{"stretch_section":"section-stretched"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-84b54ad"
                            data-id="84b54ad"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-eec9d93 elementor-widget elementor-widget-aheto_custom-post-types"
                                  data-id="eec9d93"
                                  data-element_type="widget"
                                  data-widget_type="aheto_custom-post-types.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="aheto-cpt aheto-cpt--masonry-mooseoom js-popup-gallery aheto_custom-post-types_64a0a111c4590 ">
                                      <div
                                        className="aheto-cpt__list js-isotope"
                                        data-cpt-id="aheto_cpt_316"
                                      >
                                        <div className="aheto-cpt-article aheto-cpt-article--size" style={{position: "absolute", left: "0%", top: "0px"}}></div>
                                        <article className="aheto-cpt-article aheto-cpt-article--masonry  aheto-cpt-article--cs_skin-8 filter-mission-and-history">
                                          <div className="aheto-cpt-article__inner">
                                            <div
                                              className="aheto-cpt-article__img s-back-switch"
                                              style={{
                                                backgroundImage:
                                                  "url(https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-1.jpg)"
                                              }}
                                            >
                                              <a
                                                className="aheto-cpt-article__img-link"
                                                href="https://mooseoom.foxthemes.me/portfolio/human-isolation/"
                                                title="Human Isolation"
                                              />
                                            </div>
                                            <div className="aheto-cpt-article__content">
                                              <div className="aheto-cpt-article__terms ">
                                                <a
                                                  href="https://mooseoom.foxthemes.me/portfolio-category/mission-and-history/"
                                                  rel="tag"
                                                >
                                                  Mission and History
                                                </a>
                                              </div>
                                              <h5 className="aheto-cpt-article__title">
                                                {" "}
                                                <a href="https://mooseoom.foxthemes.me/portfolio/human-isolation/">
                                                  Human Isolation{" "}
                                                </a>
                                              </h5>
                                            </div>
                                          </div>
                                        </article>
                                        <article className="aheto-cpt-article aheto-cpt-article--masonry  aheto-cpt-article--cs_skin-8 filter-mission-and-history">
                                          <div className="aheto-cpt-article__inner">
                                            <div
                                              className="aheto-cpt-article__img s-back-switch"
                                              style={{
                                                backgroundImage:
                                                  "url(https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-2.jpg)"
                                              }}
                                            >
                                              <a
                                                className="aheto-cpt-article__img-link"
                                                href="https://mooseoom.foxthemes.me/portfolio/abstract-art-with-shapes/"
                                                title="Abstract Art with Shapes"
                                              />
                                            </div>
                                            <div className="aheto-cpt-article__content">
                                              <div className="aheto-cpt-article__terms ">
                                                <a
                                                  href="https://mooseoom.foxthemes.me/portfolio-category/mission-and-history/"
                                                  rel="tag"
                                                >
                                                  Mission and History
                                                </a>
                                              </div>
                                              <h5 className="aheto-cpt-article__title">
                                                {" "}
                                                <a href="https://mooseoom.foxthemes.me/portfolio/abstract-art-with-shapes/">
                                                  Abstract Art with Shapes{" "}
                                                </a>
                                              </h5>
                                            </div>
                                          </div>
                                        </article>
                                        <article className="aheto-cpt-article aheto-cpt-article--masonry  aheto-cpt-article--cs_skin-8 filter-mission-and-history">
                                          <div className="aheto-cpt-article__inner">
                                            <div
                                              className="aheto-cpt-article__img s-back-switch"
                                              style={{
                                                backgroundImage:
                                                  "url(https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-3.jpg)"
                                              }}
                                            >
                                              <a
                                                className="aheto-cpt-article__img-link"
                                                href="https://mooseoom.foxthemes.me/portfolio/breath-of-city-jungle/"
                                                title="Breath of City Jungle"
                                              />
                                            </div>
                                            <div className="aheto-cpt-article__content">
                                              <div className="aheto-cpt-article__terms ">
                                                <a
                                                  href="https://mooseoom.foxthemes.me/portfolio-category/mission-and-history/"
                                                  rel="tag"
                                                >
                                                  Mission and History
                                                </a>
                                              </div>
                                              <h5 className="aheto-cpt-article__title">
                                                {" "}
                                                <a href="https://mooseoom.foxthemes.me/portfolio/breath-of-city-jungle/">
                                                  Breath of City Jungle{" "}
                                                </a>
                                              </h5>
                                            </div>
                                          </div>
                                        </article>
                                        <article className="aheto-cpt-article aheto-cpt-article--masonry  aheto-cpt-article--cs_skin-8 filter-mission-and-history">
                                          <div className="aheto-cpt-article__inner">
                                            <div
                                              className="aheto-cpt-article__img s-back-switch"
                                              style={{
                                                backgroundImage:
                                                  "url(https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/ms-post-4.jpg)"
                                              }}
                                            >
                                              <a
                                                className="aheto-cpt-article__img-link"
                                                href="https://mooseoom.foxthemes.me/portfolio/gallery-constraction/"
                                                title="Gallery Construction"
                                              />
                                            </div>
                                            <div className="aheto-cpt-article__content">
                                              <div className="aheto-cpt-article__terms ">
                                                <a
                                                  href="https://mooseoom.foxthemes.me/portfolio-category/mission-and-history/"
                                                  rel="tag"
                                                >
                                                  Mission and History
                                                </a>
                                              </div>
                                              <h5 className="aheto-cpt-article__title">
                                                {" "}
                                                <a href="https://mooseoom.foxthemes.me/portfolio/gallery-constraction/">
                                                  Gallery Construction{" "}
                                                </a>
                                              </h5>
                                            </div>
                                          </div>
                                        </article>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-c00ca88 elementor-section-full_width elementor-reverse-mobile elementor-section-height-default elementor-section-height-default"
                      data-id="c00ca88"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c83af36"
                            data-id="c83af36"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-dd3e02d elementor-widget elementor-widget-image"
                                  data-id="dd3e02d"
                                  data-element_type="widget"
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-image">
                                      <img
                                        width={567}
                                        height={419}
                                        src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-mission.jpg"
                                        className="attachment-medium_large size-medium_large"
                                        alt="our-mission"
                                        loading="lazy"
                                        srcSet="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-mission.jpg 567w, https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-mission-300x222.jpg 300w"
                                        sizes="(max-width: 567px) 100vw, 567px"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2b0f7c0"
                            data-id="2b0f7c0"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-dee3923 elementor-widget elementor-widget-aheto_heading"
                                  data-id="dee3923"
                                  data-element_type="widget"
                                  data-widget_type="aheto_heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="aheto-heading aheto-heading--mooseoom__simple  aheto_heading_64a0a111c8a1b ">
                                      <h2 className="aheto-heading__subtitle">
                                        Our Mission
                                      </h2>
                                      <p className="aheto-heading__title">
                                        The MooM exists to exhibit, interpret, preserve
                                        and promote the visual, artistic and cultural
                                        heritage of Indigenous Peoples; to educate and
                                        engage the public on local, regional and global
                                        social issues through the visual arts.present,
                                        collect and interpret historic and contemporary
                                        art in innovative and challenging ways that
                                        encourage the engagement and enjoyment of
                                        existing and future audiences.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-7ea3d31 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="7ea3d31"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0c1dbb7"
                            data-id="0c1dbb7"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-e17d66c elementor-widget elementor-widget-aheto_heading"
                                  data-id="e17d66c"
                                  data-element_type="widget"
                                  data-widget_type="aheto_heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="aheto-heading aheto-heading--mooseoom__simple  aheto_heading_64a0a111c9d5f ">
                                      <h2 className="aheto-heading__subtitle">
                                        Our Vision
                                      </h2>
                                      <p className="aheto-heading__title">
                                        We envision a gallery accessible to everyone as
                                        a vibrant public space in service of our
                                        community, to foster greater social engagement,
                                        critical thinking and creativity. Inspiring and
                                        challenging our community through art.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-8e30770 elementor-widget elementor-widget-aheto_button"
                                  data-id="8e30770"
                                  data-element_type="widget"
                                  data-widget_type="aheto_button.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="aheto_button_64a0a111ca327   overflow-on ">
                                      <div className="aheto-btn-container t-left tablet- mobile-">
                                        <a
                                          href="https://mooseoom.foxthemes.me/awards/"
                                          className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                                          target="_self"
                                          aria-label="See Why We’re the Best"
                                        >
                                          See Why We’re the Best
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-fe79867"
                            data-id="fe79867"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-24ff595 elementor-widget elementor-widget-image"
                                  data-id="24ff595"
                                  data-element_type="widget"
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-image">
                                      <img
                                        width={768}
                                        height={568}
                                        src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-vision-768x568.jpg"
                                        className="attachment-medium_large size-medium_large"
                                        alt="our-vision"
                                        loading="lazy"
                                        srcSet="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-vision-768x568.jpg 768w, https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-vision-600x443.jpg 600w, https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-vision-300x222.jpg 300w, https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-vision-1024x757.jpg 1024w, https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-vision.jpg 1134w"
                                        sizes="(max-width: 768px) 100vw, 768px"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-d1be0a5 elementor-section-full_width elementor-reverse-mobile elementor-section-height-default elementor-section-height-default"
                      data-id="d1be0a5"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-57a71a8"
                            data-id="57a71a8"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-551069a elementor-widget elementor-widget-image"
                                  data-id="551069a"
                                  data-element_type="widget"
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-image">
                                      <img
                                        src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/our-goals.jpg"
                                        title=""
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9cd3e93"
                            data-id="9cd3e93"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-6d3a2f4 elementor-widget elementor-widget-aheto_heading"
                                  data-id="6d3a2f4"
                                  data-element_type="widget"
                                  data-widget_type="aheto_heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="aheto-heading aheto-heading--mooseoom__simple  aheto_heading_64a0a111cc63c ">
                                      <h2 className="aheto-heading__subtitle">
                                        Our Goals
                                      </h2>
                                      <p className="aheto-heading__title">
                                        We are at the forefront of creativity with
                                        quality programs and exhibitions. We provide a
                                        cultural and educational service of the very
                                        highest quality and to act as a focus for civic
                                        pride and community identity for the people. The
                                        gallery interacts with the community by
                                        designing programs that inspire, challenge,
                                        educate and entertain.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-d9f3c8f elementor-widget elementor-widget-image"
                                  data-id="d9f3c8f"
                                  data-element_type="widget"
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-image">
                                      <img
                                        width={200}
                                        height={100}
                                        src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/signature.jpg"
                                        className="attachment-medium size-medium"
                                        alt="signature"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-search" id="search-box">
              <button className="close-btn js-close-search">
                <i className="fa fa-times" aria-hidden="true" />
              </button>
              <div className="form-container">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <form
                        role="search"
                        method="get"
                        className="search-form"
                        action="https://mooseoom.foxthemes.me/"
                        autoComplete="off"
                      >
                        <div className="input-group">
                          <input
                            type="search"
                            defaultValue=""
                            name="s"
                            className="search-field"
                            placeholder="Enter Keyword"
                            required=""
                          />
                        </div>
                      </form>
                      <p className="search-description">
                        Input your search keywords and press Enter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
    </>
  );
}
