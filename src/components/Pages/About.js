import { useState, useEffect } from "react";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import data from "../../data";
import sanityClient from "../../client";

// import UI components
import Header from "../UI/Header";

export default function About() {
  const [aboutHeader, setAboutHeader] = useState(null);
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
    return <div>Loading...</div>;
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
    </>
  );
}
