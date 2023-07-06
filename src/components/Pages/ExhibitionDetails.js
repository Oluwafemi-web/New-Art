//import images
import image08 from "../../images/image08.jpg";
import sideImag05 from "../../images/side-imag05.jpg";
import sideImag06 from "../../images/side-imag06.jpg";
import icon01 from "../../images/icon01.png.jpg";
import icon from "../../images/title-shape.png";

export default function ExhibitionDetails() {

  return (
    <>
      <section className="content-section" data-background="#fffbf7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="side-content left">
                <small>50% off exhibitions</small>
                <h2>Artemisia Gentileschi talk with Maria</h2>
                <p>
                  Beautiful paintings, sculpture and decorative art from the 13th
                  century to the present day.
                </p>
                <table>
                  <tbody>
                    <tr>
                      <td>START</td>
                      <td>: 15 November 2020</td>
                    </tr>
                    <tr>
                      <td>END </td>
                      <td>: 25 November 2020 </td>
                    </tr>
                    <tr>
                      <td>EVENT CATEGORY </td>
                      <td>: Exhibition</td>
                    </tr>
                    <tr>
                      <td>VENUE NAME </td>
                      <td>: Tate Modern</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end side-content */}
              <div className="side-icon-list">
                <ul>
                  <li>
                    <figure>
                      {" "}
                      <img src={icon01} alt="Image" />{" "}
                    </figure>
                    <div className="content">
                      <h5>Opening times</h5>
                      <p>
                        From 27 August
                        <br />
                        Thursday – Sunday: 11.00-19.00
                      </p>
                    </div>
                    {/* end content */}
                  </li>
                </ul>
              </div>
              {/* end side-icon-list */}
            </div>
            {/* end col-6 */}
            <div className="col-lg-6">
              <div
                className="side-image right-half"
                data-scroll=""
                data-scroll-speed={1}
              >
                <img src={sideImag05} alt="Image" />
              </div>
              {/* end side-image */}
            </div>
            {/*end col-6 */}
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
                <h3>Exhibitions Details</h3>
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
      <section className="content-section no-spacing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="side-image" data-scroll="" data-scroll-speed={1}>
                <img src={sideImag06} alt="Image" />
              </div>
              {/* end side-image */}
            </div>
            {/* end col-6 */}
            <div className="col-lg-6">
              <div className="side-list right">
                <ul>
                  <li>
                    <strong>This exhibition</strong> is a rare chance to
                    experience two of Yayoi Kusama’s Infinity Mirror Rooms. These
                    immersive installations will transport you into Kusama’s.
                  </li>
                  <li>
                    <strong>Architectural</strong> elements and armatures.
                    Bhabha’s multifaceted work explores colonialism, war,
                    displacement and the memory of home. For her first major
                    survey exhibition in Europe.
                  </li>
                  <li>
                    <strong>These immersive</strong> installations will transport
                    you into Kusama’s. This exhibition is a rare chance to
                    experience two of Yayoi Kusama’s Infinity Mirror Rooms.
                  </li>
                </ul>
              </div>
              {/* end side-list */}
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
          <div className="row align-items-center">
            <div className="col-12">
              <div className="section-title text-center">
                <figure>
                  <img src={icon} alt="Image" />
                </figure>
                <h6>DON’T MISS THE OPPORTUNITY</h6>
                <h2>
                  Wandau Museum
                  <br /> Now Open{" "}
                </h2>
              </div>
              {/* end section-title */}
            </div>
            {/* end col-12 */}
            <div className="col-12">
              <figure className="image-box" data-scroll="" data-scroll-speed={1}>
                {" "}
              <img src={image08} alt="Image" />{" "}
              </figure>
            </div>
            {/* end col-12 */}
            <div className="clearfix spacing-50" />
            <div className="col-12">
              <div className="text-box">
                <h2>Permanent Collection</h2>
                <p>
                  Housing a national collection, Tate Britain is the world centre
                  for the study and display of British art. Highlights include a
                  Turner collection of more than 300 paintings and thousands of
                  watercolours, with considerable space also dedicated to two
                  artists of the Romantic age, Constable and William Blake.
                </p>
                <p>
                  The national tradition of portraiture is represented in a fine
                  collection of Elizabethan works, as well as those by
                  Gainsborough, Reynolds, and Hogarth 'the father of English
                  painting' whose much-loved Rake's Progress sequence remains a
                  popular draw.
                </p>
              </div>
              {/* end text-box */}
            </div>
            {/* end-col-12 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end content-section */}
    </>
  )

}
