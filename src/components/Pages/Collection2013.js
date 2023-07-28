import { useState, useEffect, useContext } from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import SanityContext from "../Context/sanity-context";
import LanguageContext from "../Context/language-context";

import sanityClient from "../../client";

// import UI components
import Header from "../UI/Header";
import Collection from "../UI/Collection";
import { PortableText } from "@portabletext/react";

export default function Collections2013() {
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
        `*[_type == "collection13header" && language == $language] {
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
              heading,
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
  }, []);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "collection13" && language == $language]| order(dateTime(_createdAt) asc){
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
              description,
              _createdAt,
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
                  </div>
                </div>
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
              </div>
            </section>
          </>
        ))}
    </>
  );
}
