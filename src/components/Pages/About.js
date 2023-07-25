import { useState, useEffect, useContext } from "react";
import { PortableText } from "@portabletext/react";
import SanityContext from "../Context/sanity-context";
import LanguageContext from "../Context/language-context";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import sanityClient from "../../client";

// import UI components
import Header from "../UI/Header";
import { AboutMission, AboutSlider, AboutHover } from "../UI/AboutDetails.js";

export default function About() {
  const [aboutHeader, setAboutHeader] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [aboutImages, setAboutImages] = useState(null);
  const ctx = useContext(LanguageContext);

  const sanityCtx = useContext(SanityContext);

  const handleSanityLoaded = () => {
    sanityCtx.changeState(true);
  };

  async function filterGalleryOnLoad() {
    // Wait for DOM to load completely
    await new Promise((resolve) => {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });

    // Get all the filter buttons
    const galleryFilter = document.querySelector(".aheto-timeline__events");
    const filterButtons = galleryFilter.querySelectorAll("a");

    // Get all the gallery items
    const galleryItems = document.querySelectorAll(
      ".aheto-timeline__events-content li"
    );

    // Add click event listener to each filter button
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Remove "selected" class from all buttons
        filterButtons.forEach(function (btn) {
          btn.classList.remove("selected");
        });

        // Add "selected" class to clicked button
        this.classList.add("selected");

        // Get the filter value from the button
        const filterValue = this.getAttribute("data-date");

        // Loop through all gallery items
        galleryItems.forEach((item) => {
          // Check if the item has the same attribute value as the filter value or if the filter value is "*"
          if (
            item.getAttribute("data-date") === filterValue ||
            filterValue === "*"
          ) {
            // Show the item
            item.classList.add("selected");
          } else {
            // Hide the item
            item.classList.remove("selected");
          }
        });
      });
    });
  }
  var div = document.getElementById("year");
  var scrollLeftButton = document.getElementById("scrollLeftButton");
  var scrollRightButton = document.getElementById("scrollRightButton");

  function scrollLeft() {
    div.scrollTo({
      left: div.scrollLeft - 200,
      behavior: "smooth",
    });
    updateButtonState();
  }

  function scrollRight() {
    div.scrollTo({
      left: div.scrollLeft + 200,
      behavior: "smooth",
    });
    updateButtonState();
  }
  function updateButtonState() {
    if (div.scrollLeft === 0) {
      scrollLeftButton.classList.add("inactive");
    } else {
      scrollLeftButton.classList.remove("inactive");
    }

    if (div.scrollLeft + div.clientWidth >= div.scrollWidth) {
      scrollRightButton.classList.add("inactive");
    } else {
      scrollRightButton.classList.remove("inactive");
    }
  }
  setTimeout(filterGalleryOnLoad, 5000);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "aboutheader" && language == $language]{
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
      .then((data) => setAboutHeader(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "about" && language == $language]{
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
            },
            _translations[] {
              value->{
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
              }
           }
          }`,
        { language: ctx.languageData }
      )
      .then((data) => setAboutData(data[0]))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "aboutimages"]{
             title,
             description,
             image{
              asset->{
                _id,
                url
              }
            }
          }`,
        { language: ctx.languageData }
      )
      .then((data) => setAboutImages(data))
      .catch(console.error);
  }, [ctx.languageData]);
  useEffect(() => {
    if (!aboutHeader) {
      return sanityCtx.changeState(false);
    } else {
      handleSanityLoaded();
    }
  });
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
          <AboutSlider scrollLeft={scrollLeft} scrollRight={scrollRight} />
          <AboutHover aboutImages={aboutImages} />
          {aboutData && (
            <AboutMission
              image={aboutData.image.asset.url}
              image2={aboutData.image2.asset.url}
              image3={aboutData.image3.asset.url}
              mission={aboutData.mission}
              vision={aboutData.vision}
              goals={aboutData.goals}
              description={aboutData.description}
              description2={aboutData.description2}
              description3={aboutData.description3}
            />
          )}
        </div>
      </>
    </>
  );
}
