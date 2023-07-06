import slide from "../../videos/video.mp4";

export default function Member() {
  return (
    <section className="content-section" data-scroll>
      <div className="video-bg">
        <video src={slide} loop="" autoPlay="" playsInline="" muted="" />
      </div>
      {/* end video-bg */}
      <div className="container">
        <div className="cta-box" data-scroll="" data-scroll-speed={-1}>
          <h6>JOIN TODAY AND ENJOY UNLIMITED</h6>
          <h2>
            exhibitions, Members <br />
            only and more
          </h2>
          <a href="#" className="custom-button">
            BECOME A MEMBER
          </a>
        </div>
        {/* end cta-box */}
      </div>
      {/* end container */}
    </section>
  );
}
