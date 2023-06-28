import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import data from "../../data"

// import UI components
import Header from "../UI/Header";

//import images
import icon01 from "../../images/icon01.png";
import imag04 from "../../images/side-imag04.jpg";
import image08 from "../../images/image08.jpg";
import visit from "../../images/logo-visit.png";
// import bg02 from "../../images/section-bg02.jpg";
import icon from "../../images/title-shape.png";

export default function Visit() {
    return (
        <>
            <Header content={data.heading.visit}/>

            
            <section className="content-section" data-background="#fffbf7">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="side-content left">
                      <h2>
                        welcoming <br />
                        you back to the <br />
                        museum.
                      </h2>
                      <p>
                        This page outlines the changes we've made to keep you safe
                        during your visit. Museum entry is still free but you'll now
                        need to pre-book a timed ticket online.
                      </p>
                    </div>
                    {/* end side-content */}
                    <div className="clearfix spacing-50" />
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
                    <figure className="side-image" data-scroll="" data-scroll-speed={1}>
                      {" "}
                      <img src={imag04} alt="Image" />{" "}
                    </figure>
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
                  <div className="col-lg-5">
                    <div className="contact-box">
                      <p>
                        Victoria and Albert Museum, Cromwell <br />
                        Road, London, SW7 2RL
                      </p>
                    </div>
                    {/* end contact-box */}
                    <a href="#" className="custom-button">
                      CONTACT US
                    </a>
                    <div className="clearfix spacing-50" />
                  </div>
                  {/* end col-5 */}
                  <div className="col-lg-7">
                    <div className="side-list">
                      <ul>
                        <li>
                          Nearest Underground stations: South Kensington (5-minute
                          walk), Gloucester Road (10-minute walk)
                        </li>
                        <li>Victoria Station (35-minute walk)</li>
                        <li>
                          Bike-hire is available at Exhibition Road and Thurloe Place
                        </li>
                        <li>
                          Several bus routes stop at the museum – see tfl.gov.uk for
                          details
                        </li>
                      </ul>
                    </div>
                    {/* end side-list */}
                  </div>
                  {/* end col-7 */}
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </section>
            {/* end content-section */}
            <section className="content-section no-spacing">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <figure className="image-box" data-scroll="" data-scroll-speed={1}>
                      {" "}
                      <img src={image08} alt="Image" />{" "}
                    </figure>
                  </div>
                  {/* end col-12 */}
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
                      <h2>Staying Safe</h2>
                    </div>
                    {/* end text-box */}
                  </div>
                  {/* end col-12 */}
                  <div className="col-md-2">
                    {" "}
                    <img src={visit} alt="Image" />{" "}
                  </div>
                  {/* end col-2 */}
                  <div className="col-lg-6 col-md-10">
                    <div className="text-box">
                      <p>
                        If you are a regular visitor you will notice new signs and
                        markers throughout the museum. Please take care of yourself and
                        others by keeping a safe distance from others during your visit.
                      </p>
                      <p>
                        Hand sanitiser and face coverings are available at the entrance
                        and at key points around the galleries. We are also selling
                        V&amp;A face coverings in our shop. In line with government
                        guidance, all visitors will need to wear a face covering inside
                        the museum.
                      </p>
                    </div>
                    {/* end text-box */}
                  </div>
                  {/* end col-6 */}
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </section>
            {/* end content-section */}
            <section
              className="content-section"
              data-background="images/section-bg02.jpg"
              data-scroll=""
              data-scroll-speed={1}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="clearfix spacing-400" />
                  </div>
                  {/* end col-12 */}
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </section>
            {/* end content-section */}
            <section className="content-section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="section-title text-center">
                      <figure>
                        <img src={icon} alt="Image" />
                      </figure>
                      <h2>
                        Frequently
                        <br />
                        asked questions
                      </h2>
                    </div>
                    {/* end section-title */}
                  </div>
                  {/* end col-12 */}
                  <div className="col-lg-8">
                    <dl className="accordion">
                      <dt>
                        <a href="#">What are your opening hours?</a>
                      </dt>
                      <dd>
                        We have a small gift shop where you can buy a range of Bank of
                        England related items. We don't have a cafe but there are places
                        to buy drinks or sandwiches nearby. Eating and drinking are not
                        allowed in the museum.{" "}
                      </dd>
                      <dt>
                        <a href="#">How long does it take to look around?</a>
                      </dt>
                      <dd>
                        We have a small gift shop where you can buy a range of Bank of
                        England related items. We don't have a cafe but there are places
                        to buy drinks or sandwiches nearby. Eating and drinking are not
                        allowed in the museum.{" "}
                      </dd>
                      <dt>
                        <a href="#">Are there printed or audio guides?</a>
                      </dt>
                      <dd>
                        We have a small gift shop where you can buy a range of Bank of
                        England related items. We don't have a cafe but there are places
                        to buy drinks or sandwiches nearby. Eating and drinking are not
                        allowed in the museum.{" "}
                      </dd>
                      <dt>
                        <a href="#">Do you give talks?</a>
                      </dt>
                      <dd>
                        We have a small gift shop where you can buy a range of Bank of
                        England related items. We don't have a cafe but there are places
                        to buy drinks or sandwiches nearby. Eating and drinking are not
                        allowed in the museum.{" "}
                      </dd>
                      <dt>
                        <a href="#">Is there a shop or cafe?</a>
                      </dt>
                      <dd>
                        We have a small gift shop where you can buy a range of Bank of
                        England related items. We don't have a cafe but there are places
                        to buy drinks or sandwiches nearby. Eating and drinking are not
                        allowed in the museum.{" "}
                      </dd>
                      <dt>
                        <a href="#">Do you have anywhere to store luggage?</a>
                      </dt>
                      <dd>
                        We have a small gift shop where you can buy a range of Bank of
                        England related items. We don't have a cafe but there are places
                        to buy drinks or sandwiches nearby. Eating and drinking are not
                        allowed in the museum.{" "}
                      </dd>
                      <dt>
                        <a href="#">How accessible is the museum?</a>
                      </dt>
                      <dd>
                        We have a small gift shop where you can buy a range of Bank of
                        England related items. We don't have a cafe but there are places
                        to buy drinks or sandwiches nearby. Eating and drinking are not
                        allowed in the museum.{" "}
                      </dd>
                      <dt>
                        <a href="#">Is the museum suitable for families?</a>
                      </dt>
                      <dd>
                        We have a small gift shop where you can buy a range of Bank of
                        England related items. We don't have a cafe but there are places
                        to buy drinks or sandwiches nearby. Eating and drinking are not
                        allowed in the museum.{" "}
                      </dd>
                    </dl>
                    {/* end accordion */}
                  </div>
                  {/* end col-8 */}
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </section>
            {/* end content-section */}
        </>
    );
}
