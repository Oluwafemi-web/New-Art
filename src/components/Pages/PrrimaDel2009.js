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

export default function PrimaDel2009() {
  let previousDataScroll = 1.5; // Initial value for the first component
  const [collectionHeader, setCollectionHeader] = useState(null);
  const [collectionData, setCollectionData] = useState(null);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (e, index) => {
    e.preventDefault();
    setCurrentImageIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const gotoPrevious = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(collectionData.length);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const gotoNext = () => {
    if (currentImageIndex === collectionData.length) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  const sanityCtx = useContext(SanityContext);
  const ctx = useContext(LanguageContext);

  const handleSanityLoaded = () => {
    sanityCtx.changeState(true);
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "primadel2009header" && language == $language] {
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
        `*[_type == "primadel2009"]|  order(_createdAt desc){
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
        }`
      )
      .then((data) => setCollectionData(data))
      .catch(console.error);
  });

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
                  {collectionData &&
                    collectionData.map((collectionItem, index) => (
                      <Collection
                        img={collectionItem.image.asset.url}
                        title={collectionItem.title}
                        description={collectionItem.description}
                        key={index * 100}
                        clicked={(e) => openLightbox(e, index)}
                      />
                    ))}
                </div>
              </div>
              {lightboxIsOpen && (
                <div className="image-popup">
                  <button onClick={closeLightbox} className="close-button">
                    <i className=" fa-solid fa-xmark" />
                  </button>
                  <button onClick={gotoPrevious} className="prev-button">
                    <i className=" fa-solid fa-angle-left" />
                  </button>
                  <img
                    src={collectionData[currentImageIndex].image.asset.url}
                    alt="Selected"
                  />

                  <button onClick={gotoNext} className="next-button">
                    <i className=" fa-solid fa-angle-right" />
                  </button>
                </div>
              )}
            </section>
          </>
        ))}
    </>
  );
}
