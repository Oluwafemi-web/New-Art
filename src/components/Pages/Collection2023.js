import { useState, useEffect, useContext } from "react";
import SanityContext from "../Context/sanity-context";
import LanguageContext from "../Context/language-context";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import icon from "../../images/title-shape.png";
import sanityClient from "../../client";

// import UI components
import Header from "../UI/Header";
import Collection from "../UI/Collection";

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
  }, []);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "collection23" && language == $language]{
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
                <figure>
                  <img src={icon} alt="" />
                </figure>
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
            {collectionData &&
              collectionData.map((collectionItem, index) => {
                // Calculate the current data-scroll value
                let currentDataScroll = previousDataScroll;
                if (previousDataScroll === 0.5) {
                  currentDataScroll = 1.5;
                } else {
                  currentDataScroll -= 0.5;
                }

                // Update the previousDataScroll for the next iteration
                previousDataScroll = currentDataScroll;

                return (
                  <Collection
                    key={index}
                    img={collectionItem.image.asset.url}
                    tile={collectionItem.title}
                    description={collectionItem.description}
                    dataScroll={currentDataScroll}
                  />
                );
              })}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end content-section */}
    </>
  );
}
