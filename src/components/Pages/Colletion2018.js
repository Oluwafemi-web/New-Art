import { useState, useEffect, useContext } from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import SanityContext from "../Context/sanity-context";
import LanguageContext from "../Context/language-context";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import sanityClient from "../../client";

// import UI components
import Header from "../UI/Header";

export default function Collections2018() {
  const [collectionHeader, setCollectionHeader] = useState(null);
  const [collectionData, setCollectionData] = useState(null);
  const sanityCtx = useContext(SanityContext);
  const ctx = useContext(LanguageContext);

  const handleSanityLoaded = () => {
    sanityCtx.changeState(true);
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "collectionheader" && language == $language]{
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
      .then((data) => setCollectionHeader(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "collection18" && language == $language] | order(dateTime(_createdAt)){
           title,
           description,
           _createdAt,
           image{
            asset->{
              _id,
              url
            }
          },
          _translations[] {
            value->{
              title,
              _createdAt,
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
      .then((data) => setCollectionData(data))
      .catch(console.error);
  }, [ctx.languageData]);

  useEffect(() => {
    if (!collectionHeader || !collectionData) {
      return sanityCtx.changeState(false);
    } else {
      handleSanityLoaded();
    }
  }, []);

  return (
    <>
      {collectionHeader &&
        collectionHeader.map((item, index) => (
          <Header
            title={item.title}
            description={item.description}
            background={item.image.asset.url}
            key={index}
          />
        ))}
      <section className="content-section" data-background="#fffbf7">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>
                  Our collections are <br />
                  most important
                </h2>
              </div>
              {/* end section-title */}
            </div>
            {/* end col-12 */}
          </div>
          {/* end row */}
          <div className="row justify-content-center">
            <SlideshowLightbox className="grid-fr">
              {collectionData &&
                collectionData.map((collectionItem, index) => (
                  <img
                    key={index}
                    src={collectionItem.image.asset.url}
                    alt=""
                    data-scroll
                  />
                ))}
            </SlideshowLightbox>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end content-section */}
    </>
  );
}
