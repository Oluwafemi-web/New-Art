import { useState, useEffect, useContext } from "react";
import SanityContext from "../Context/sanity-context";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";
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
    </>
  );
}
