import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";
import "../../css/style.css";
import sanityClient from "../../client";
import { useState, useEffect, useContext } from "react";
import Carousel from "../carousel";
import WorldArt from "../Index/WorldArt";
import IndexUpcoming from "../Index/IndexUpcoming";
import LanguageContext from "../Context/language-context";
import Inspiration from "../Index/Inspiration";
import Steps from "../Index/Steps";
import News from "../Index/News";
import History from "../Index/History";

export default function Home() {
  const [headingData, setHeadingData] = useState();
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "indexheading" && language == $language]{
           logo{
            asset->{
              _id,
              url,
            }
           },
           arttitle,
           uptitle,
           updescription,
           artinspiration,
           stepstitle,
           stepsdescription,
           historytitle,
           historydescription,
           newstitle,
           newsdescription,
           _translations[] {
            value->{
              logo{
                asset->{
                  _id,
                  url,
                }
               },
               arttitle,
               uptitle,
               updescription,
               artinspiration,
               stepstitle,
               stepsdescription,
               historytitle,
               historydescription,
               newstitle,
               newsdescription,
            }
         }
        }`,
        { language: ctx.languageData }
      )
      .then((data) => setHeadingData(data[0]))
      .catch(console.error);
  }, [ctx.languageData]);
  return (
    headingData && (
      <>
        <Carousel />
        <WorldArt
          logo={headingData.logo.asset.url}
          heading={headingData.arttitle}
        />
        <IndexUpcoming
          logo={headingData.logo.asset.url}
          heading={headingData.uptitle}
          subheading={headingData.updescription}
        />
        {/* <Inspiration
          logo={headingData.logo.asset.url}
          heading={headingData.artinspiration}
        /> */}
        <Steps
          logo={headingData.logo.asset.url}
          heading={headingData.stepstitle}
          subheading={headingData.stepsdescription}
        />
        <History
          heading={headingData.historytitle}
          subheading={headingData.historydescription}
        />
        {/* <News
          logo={headingData.logo.asset.url}
          heading={headingData.newstitle}
          subheading={headingData.newsdescription}
        /> */}
      </>
    )
  );
}
