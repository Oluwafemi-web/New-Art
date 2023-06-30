//import images
import box01 from "../../images/image-content-box01.jpg";
import box02 from "../../images/image-content-box02.jpg";
import box03 from "../../images/image-content-box03.jpg";
import bg01 from "../../images/section-bg01.jpg";
import icon from "../../images/title-shape.png";

export default function CollectionDetails() {

    return (
      <>
        <section className="content-section" data-background="#fffbf7">                                           
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10">
                <div className="text-box">
                  <h2>Special Collection</h2>
                  <p>
                    If you are a regular visitor you will notice new{" "}
                    <strong>signs</strong> and <strong>markers</strong> throughout
                    the museum. Please take care of yourself and others by keeping a
                    safe distance from others during your visit.
                  </p>
                  <p>
                    Hand sanitiser and face coverings are available at the entrance
                    and at key points around the galleries. We are also selling
                    V&amp;A face coverings in our shop. In line with government
                    guidance, all visitors will need to wear a face covering inside
                    the museum.
                  </p>
                </div>
              </div>
              {/* end col-10 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end content-section */}
        <section className="content-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="image-content-box"
                  data-scroll=""
                  data-scroll-speed={-1}
                >
                  <figure>
                    <img src={box01} alt="Image" />
                  </figure>
                  <div className="content-box">
                    <h3>Cable Griffith – Ghost Tree</h3>
                    <p>
                      <strong>2018</strong>, <br />
                      Original acrylic on paper
                    </p>
                  </div>
                  {/* end content-box */}
                </div>
                {/* end image-content-box */}
              </div>
              {/* end col-4 */}
              <div className="col-lg-4 col-md-6">
                <div
                  className="image-content-box"
                  data-scroll=""
                  data-scroll-speed={1}
                >
                  <figure>
                    <img src={box02} alt="Image" />
                  </figure>
                  <div className="content-box">
                    <h3>Modern Home with Shark</h3>
                    <p>
                      <strong>2019</strong>, <br />
                      Original acrylic on paper
                    </p>
                  </div>
                  {/* end content-box */}
                </div>
                {/* end image-content-box */}
              </div>
              {/* end col-4 */}
              <div className="col-lg-4 col-md-6">
                <div
                  className="image-content-box"
                  data-scroll=""
                  data-scroll-speed="-0.5"
                >
                  <figure>
                    <img src={box03} alt="Image" />
                  </figure>
                  <div className="content-box">
                    <h3>Love Love Me Do Bull Terrier</h3>
                    <p>
                      <strong>2023</strong>, <br />
                      Original acrylic on paper
                    </p>
                  </div>
                  {/* end content-box */}
                </div>
                {/* end image-content-box */}
              </div>
              {/* end col-4 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end content-section */}
        <section
          className="content-section"
          data-background={bg01} 
          style= {{background : `url(${bg01})`}}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="note-box">
                  <h2> Discover Collections</h2>
                  <p>
                    Become a member today to gain unlimited free entry to all of our
                    blockbuster exhibitions at National Museums Wandau including AI:
                    More than Human and Linda McCartney Retrospective.{" "}
                    <strong>Join today</strong>!
                  </p>
                </div>
                {/* end note-box */}
              </div>
              {/* end col-6 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end content-section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-box">
                  <h3>Collection Details</h3>
                  <p>
                    This exhibition is a rare chance to experience two of Yayoi
                    Kusama’s Infinity Mirror Rooms. These immersive installations
                    will transport you into Kusama’s unique vision of endless
                    reflections.
                  </p>
                  <p>
                    Infinity Mirrored Room – Filled with the Brilliance of Life is
                    one of Kusama’s largest installations to date and was made for
                    her 2012 retrospective at the gallery. It is shown alongside
                    Chandelier of Grief, a room which creates the illusion of a
                    boundless universe of rotating crystal chandeliers.{" "}
                  </p>
                  <p>
                    A small presentation of photographs – some on display for the
                    first time – provides historical context for the global
                    phenomenon that Kusama’s mirrored rooms have become today.
                  </p>
                </div>
                {/* end text-box */}
              </div>
              {/*end col-12 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end content-section */}
      </>
    )
    
}
  