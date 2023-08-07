import React from "react";
import { useState, useEffect, useContext } from "react";
import { PortableText } from "@portabletext/react";
import sanityClient from "../../client";
import LanguageContext from "../Context/language-context";

export function AboutHover(props) {
  return (
    <>
      <div className="col-12 row g-0 hover-height">
        {props.aboutImages &&
          props.aboutImages.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6">
              <article className="about-item">
                <div className="about-inner">
                  <div
                    className="about-inner-img"
                    style={{
                      backgroundImage: `url(${item.image.asset.url})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "0",
                      paddingTop: "100%",
                    }}
                  >
                    {/* <img
                      src={item.image.asset.url}
                      style={{ height: "100%" }}
                    /> */}
                  </div>
                  <div className="about-inner-content">
                    <a href="#" rel="tag">
                      {item.title}
                      <PortableText value={item.description} />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </div>
    </>
  );
}

export function AboutMission(props) {
  return (
    <>
      <div
        className="container mission pd-90 flex-reverse"
        style={{ marginTop: "10%" }}
      >
        <div className="col-sm-12">
          <img src={props.image} className="fl-left wd-50" />
          <div className="text">
            <h2>{props.mission}</h2>
            <PortableText value={props.description} />
          </div>
        </div>
        {/* <div className="col-sm-12 col-md-6 pd-90"> */}

        {/* </div> */}
      </div>
      <div className="container mission pd-90 flex-column-min">
        <div className="col-sm-12">
          <img src={props.image2} className="fl-right wd-50" />
          <div className="text">
            <h2>{props.vision}</h2>
            <PortableText value={props.description2} />
          </div>
        </div>
      </div>
      <div className="container mission pd-90 flex-reverse">
        <div className="col-sm-12">
          <img src={props.image3} className="fl-left wd-50" />
          <div className="text">
            <h2>{props.goals}</h2>
            <PortableText value={props.description3} />
          </div>
        </div>
      </div>
    </>
  );
}

export function AboutSlider(props) {
  const [aboutSlider, setAboutSlider] = useState(null);
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "aboutslider" && language == $language]{
           title,
           year,
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
              year,
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
      .then((data) => setAboutSlider(data))
      .catch(console.error);
  }, [ctx.languageData]);
  return (
    <>
      <div className="container">
        <h2 className="text-align-center">Our Museum History</h2>
        <div className="aheto-timeline__timeline">
          <div id="year" className="aheto-timeline__events-wrapper">
            <div className="aheto-timeline__events" style={{ width: 1760 }}>
              <ol>
                {aboutSlider &&
                  aboutSlider.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#0"
                        className=""
                        data-date={item.year}
                        style={{ left: 110 + index * 200 }}
                      >
                        <h5>{item.year}</h5>
                      </a>
                    </li>
                  ))}
                {/* <li>
                  <a
                    href="#0"
                    className="selected"
                    data-date={1991}
                    style={{ left: 110 }}
                  >
                    <h5>1991</h5>
                  </a>
                </li>
                <li>
                  <a href="#0" data-date={1994} style={{ left: 275 }}>
                    <h5>1994</h5>
                  </a>
                </li>
                <li>
                  <a href="#0" data-date={1995} style={{ left: 330 }}>
                    <h5>1995</h5>
                  </a>
                </li>
                <li>
                  <a href="#0" data-date={1999} style={{ left: 550 }}>
                    <h5>1999</h5>
                  </a>
                </li>
                <li>
                  <a href="#0" data-date={2003} style={{ left: 770 }}>
                    <h5>2003</h5>
                  </a>
                </li>
                <li>
                  <a href="#0" data-date={2008} style={{ left: 1045 }}>
                    <h5>2008</h5>
                  </a>
                </li>
                <li>
                  <a href="#0" data-date={2014} style={{ left: 1375 }}>
                    <h5>2014</h5>
                  </a>
                </li>
                <li>
                  <a href="#0" data-date={2019} style={{ left: 1650 }}>
                    <h5>2019</h5>
                  </a>
                </li> */}
              </ol>
              <span
                className="aheto-timeline__filling-line"
                aria-hidden="true"
                style={{ transform: "scaleX(0.0774325)" }}
              />
            </div>{" "}
            {/* .events */}
          </div>
          <ul className="aheto-timeline__navigation">
            <li>
              <a
                href="#0"
                id="scrollLeftButton"
                className="prev ion-ios-arrow-left"
                onClick={props.scrollLeft}
              />
            </li>
            <li>
              <a
                href="#0"
                id="scrollRightButton"
                className="next ion-ios-arrow-right"
                onClick={props.scrollRight}
              />
            </li>
          </ul>

          {/* .events-wrapper */}
          {/* .cd-timeline-navigation */}
        </div>

        <div className="aheto-timeline__events-content">
          <ol>
            <li className="selected" data-date={1991}>
              <div className="aheto-timeline__wrap">
                <div className="aheto-timeline__image-wrap">
                  <img
                    className="aheto-timeline-slider__add-image"
                    alt="image"
                    src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/exhibition-362163_1920-1-444x333.jpg"
                  />{" "}
                </div>
                <div className="aheto-timeline__content">
                  <h5 className="aheto-timeline__title">The Great Beginning</h5>
                  <p className="aheto-timeline__desc">
                    The MooM Art Collections is founded by a group of artists
                    and patrons prompted by the government's inadequate museum
                    funding. By its first meeting it has 308 members and $700 in
                    funds.
                  </p>
                  <div className="aheto-timeline-slider__links">
                    <a
                      href="https://mooseoom.foxthemes.me/about-us/"
                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                      target="_self"
                      aria-label="Learn more"
                    >
                      Learn more
                    </a>{" "}
                  </div>
                </div>
              </div>
            </li>
            {aboutSlider &&
              aboutSlider.map((item, index) => (
                <li data-date={item.year} key={index}>
                  <div className="aheto-timeline__wrap">
                    <div className="aheto-timeline__image-wrap">
                      <img
                        className="aheto-timeline-slider__add-image"
                        alt="image"
                        src={item.image.asset.url}
                      />
                    </div>
                    <div className="aheto-timeline__content">
                      <h5 className="aheto-timeline__title">{item.title}</h5>
                      <PortableText
                        className="aheto-timeline__desc"
                        value={item.description}
                      />
                      {/* <div className="aheto-timeline-slider__links">
                        <a
                          href="https://mooseoom.foxthemes.me/about-us/"
                          className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                          target="_self"
                          aria-label="Learn more"
                        >
                          Learn more
                        </a>{" "}
                      </div> */}
                    </div>
                  </div>
                </li>
              ))}
            {/* <li className="selected" data-date={1991}>
              <div className="aheto-timeline__wrap">
                <div className="aheto-timeline__image-wrap">
                  <img
                    className="aheto-timeline-slider__add-image"
                    alt="image"
                    src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/exhibition-362163_1920-1-444x333.jpg"
                  />{" "}
                </div>
                <div className="aheto-timeline__content">
                  <h5 className="aheto-timeline__title">The Great Beginning</h5>
                  <p className="aheto-timeline__desc">
                    The MooM Art Collections is founded by a group of artists
                    and patrons prompted by the government's inadequate museum
                    funding. By its first meeting it has 308 members and $700 in
                    funds.
                  </p>
                  <div className="aheto-timeline-slider__links">
                    <a
                      href="https://mooseoom.foxthemes.me/about-us/"
                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                      target="_self"
                      aria-label="Learn more"
                    >
                      Learn more
                    </a>{" "}
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
                  />{" "}
                </div>
                <div className="aheto-timeline__content">
                  <h5 className="aheto-timeline__title">
                    Our Office Gallery Opened.
                  </h5>
                  <p className="aheto-timeline__desc">
                    An additional new entrance to the gallery was created at the
                    rear of the building, leading down from the new first floor
                    gallery into a newly-opened up section of the Museum
                    Gardens, which has been developed into a public space.
                  </p>
                  <div className="aheto-timeline-slider__links">
                    <a
                      href="https://mooseoom.foxthemes.me/location/"
                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                      target="_self"
                      aria-label="Learn more"
                    >
                      Learn more
                    </a>{" "}
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
                  />{" "}
                </div>
                <div className="aheto-timeline__content">
                  <h5 className="aheto-timeline__title">
                    Fundraising and investment
                  </h5>
                  <p className="aheto-timeline__desc">
                    The project has brought an investment of £8 million into the
                    MooM. We are very grateful to all our funders who have made
                    this project possible and start new period of art vision.
                  </p>
                  <div className="aheto-timeline-slider__links">
                    <a
                      href="https://mooseoom.foxthemes.me/leadership/"
                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                      target="_self"
                      aria-label="Learn more"
                    >
                      Learn more
                    </a>{" "}
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
                  />{" "}
                </div>
                <div className="aheto-timeline__content">
                  <h5 className="aheto-timeline__title">Our new exhibitions</h5>
                  <p className="aheto-timeline__desc">
                    The gallery now has three exhibition spaces on the ground
                    floor, capable of hosting major national and international
                    exhibitions, and four on the first floor, two of which
                    showcase our internationally significant collections.
                  </p>
                  <div className="aheto-timeline-slider__links">
                    <a
                      href="https://mooseoom.foxthemes.me/exhibitions/"
                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                      target="_self"
                      aria-label="Learn more"
                    >
                      Learn more
                    </a>{" "}
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
                  />{" "}
                </div>
                <div className="aheto-timeline__content">
                  <h5 className="aheto-timeline__title">
                    A successful fundraising appeal
                  </h5>
                  <p className="aheto-timeline__desc">
                    Following a successful fundraising appeal, and a pledge of
                    £500,000 from the Art Fund, the Fitzwilliam Museum,
                    Cambridge, successfully acquires the Macclesfield Psalter
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
                    </a>{" "}
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
                  />{" "}
                </div>
                <div className="aheto-timeline__content">
                  <h5 className="aheto-timeline__title">Our new awards</h5>
                  <p className="aheto-timeline__desc">
                    The Art Fund Prize awarded to the the MooM. The Art Fund
                    gives £600,000 to Tate’s campaign to save Rubens’s
                    Banqueting House sketch. The Art Fund gives an exceptional
                    grant of £1 million towards the acquisition of Artist Rooms.
                  </p>
                  <div className="aheto-timeline-slider__links">
                    <a
                      href="https://mooseoom.foxthemes.me/awards/"
                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                      target="_self"
                      aria-label="Learn more"
                    >
                      Learn more
                    </a>{" "}
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
                  />{" "}
                </div>
                <div className="aheto-timeline__content">
                  <h5 className="aheto-timeline__title">
                    The first major exhibition
                  </h5>
                  <p className="aheto-timeline__desc">
                    The MooM Art Gallery holds the largest collection of work by
                    Etty and held the first major exhibition of his work for 50
                    years, showing many of these paintings and sketches
                    alongside loans from other major galleries.
                  </p>
                  <div className="aheto-timeline-slider__links">
                    <a
                      href="https://mooseoom.foxthemes.me/exhibitions/"
                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                      target="_self"
                      aria-label="Learn more"
                    >
                      Learn more
                    </a>{" "}
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
                  />{" "}
                </div>
                <div className="aheto-timeline__content">
                  <h5 className="aheto-timeline__title">
                    New challenges before the art issues
                  </h5>
                  <p className="aheto-timeline__desc">
                    Under-30s National Art Pass launched. First Headley Fellows
                    announced. Support of curators continues through AAMC
                    conference travel fellowship and Curatorial Network grants.
                  </p>
                  <div className="aheto-timeline-slider__links">
                    <a
                      href="https://mooseoom.foxthemes.me/events/"
                      className="aheto-link aheto-btn--dark aheto-btn--no-underline"
                      target="_self"
                      aria-label="Learn more"
                    >
                      Learn more
                    </a>{" "}
                  </div>
                </div>
              </div>
            </li> */}
          </ol>
        </div>
      </div>
    </>
  );
}
