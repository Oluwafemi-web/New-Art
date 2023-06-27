import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import data from "../../data"
import icon from "../../images/title-shape.png"

// import UI components
import Header from "../UI/Header";
import Collection from "../UI/Collection";
import Member from "../Index/Member";



const YourComponent = ({ yourArray }) => {

  return (
    <div>
      {yourArray.map((item, index) => {

      })}
    </div>
  );
};


export default function Collections() {

  let previousDataScroll = 1.5; // Initial value for the first component

    return (
        <>
            <Header content={data.heading.collection}/>
            <section className="content-section" data-background="#fffbf7">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title text-center">
                      <figure>
                        <img src={icon} alt="Image" />
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
                    {data.collection.map((collectionItem, index) => {

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
                          img={collectionItem.img}
                          h4={collectionItem.h4}
                          p={collectionItem.p}
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
            <Member />
            

        </>
    );
}
