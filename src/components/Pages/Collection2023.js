import { useState, useEffect, useContext } from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import { PortableText } from "@portabletext/react";
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

export default function Collections2023() {
  let previousDataScroll = 1.5; // Initial value for the first component
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
        `*[_type == "collection23header" && language == $language]{
           title,
           description,
           heading,
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
           heading,
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
  }, []);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "collection23"] | order(_createdAt desc){
           title,
           _createdAt,
           description,
           image{
            asset->{
              _id,
              url
            }
          }
          }`
      )
      .then((data) => setCollectionData(data))
      .catch(console.error);
  }, []);
  useEffect(() => {
    if (!collectionHeader || !collectionData) {
      return sanityCtx.changeState(false);
    } else {
      handleSanityLoaded();
    }
  }, []);
  if (!collectionData) return;

  return (
    <>
      {collectionHeader &&
        collectionHeader.map((item, index) => (
          <>
            <Header
              title={item.title}
              description={item.description}
              background={item.image.asset.url}
              key={index}
            />
            <section className="content-section" data-background="#fffbf7">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title text-center">
                      <PortableText value={item.heading} />
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
          </>
        ))}
    </>
  );
}
