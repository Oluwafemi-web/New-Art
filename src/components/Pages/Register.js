import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import data from "../../data" 

// import UI components
import Header from "../UI/Header";

//import images
import imag03 from "../../images/side-imag03.jpg";
import bg01 from "../../images/section-bg01.jpg";
import icon from "../../images/title-shape.png";


export default function Register() {
    return (
        <>
            <Header content={data.heading.member} />

            <section className="content-section" data-background="#fffbf7">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="side-list left">
                                <h2>Individual VIP Membership</h2>
                                <ul>
                                    <li>	<strong>Go free</strong> - into special exhibitions, the Planetarium
                                        and Old Dock Tours (subject to ticket availability)</li>

                                    <li><strong>Discounts</strong> - up to 15% in our cafes, restaurants,
                                        shops and online shop</li>

                                    <li><strong>Invitations</strong> - come to special members-only
                                        events</li>

                                    <li><strong>Updates</strong> - regular e-newsletter with news,
                                        exhibitions and free event listings</li>

                                    <li><strong>What's on</strong> - our Exhibitions & Events Guide
                                        emailed to you directly</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <figure className="side-image" data-scroll data-scroll-speed="1">
                                <img src={imag03} alt="Image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="content-section" data-background={bg01} style= {{background : `url(${bg01})`}} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="note-box">
                                <h2> Free Entry to Exhibitions</h2>
                                <p>Become a member today to gain unlimited free entry
                                    to all of our blockbuster exhibitions at National
                                    Museums Wandau including AI: More than Human and
                                    Linda McCartney Retrospective. <strong>Join today</strong>!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cta-box dark" data-scroll data-scroll-speed="-1">
                                <figure>
                                    <img src={icon} alt="Image" />
                                </figure>

                                <h2>exhibitions, Members <br/>
                                    only and more</h2>
                                <p>Join today from just £70 a year and start experiencing the as a Member straight away.
                                    With discounted rates for Under 26s, plus the option to add a guest or an extra card, you'll
                                    find the Membership that's perfect for you.

                                </p>
                                <a href="#" className="custom-button">PURCHASE NOW</a> </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
