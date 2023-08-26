import React, { useEffect, useState, useContext } from "react";
import sanityClient from "../../client";
import LanguageContext from "../Context/language-context";

export default function Partners() {
  const [partnerData, setPartnerData] = useState(null);
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "partners" && language == $language ]{
             title,
             partner[]{
               link,
               image{
                asset->{
                    url
                }
               }
             },
             _translations[]{
                value->{
                    title,
                    partner[]{
                        link,
                        image{
                            asset->{
                            url
                            }
                        }
                    }
                }
             }
          }`,
        { language: ctx.languageData }
      )
      .then((data) => setPartnerData(data[0]))
      .catch(console.error);
  }, [ctx.languageData]);

  if (!partnerData) return;
  const { title, partner } = partnerData;

  return (
    partnerData && (
      <section className="partners">
        <div className="container">
          <div className="section-title text-center">
            <h2>{title}</h2>
          </div>
          <div
            className="grid-fr"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {partner.map((item, index) => (
              <a href={item.link} target="_blank" key={index}>
                <img src={item.image.asset.url} />
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  );
}
