import "../../css/style.css";
import preloader from "../../images/preloader.png";



export default function Event(props) {
    return (
        <>
          <div className="preloader" id="preloader">
            <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" version="1.1">
              <path d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z" />
            </svg>
            <div className="inner">
              <canvas
                className="progress-bar"
                id="progress-bar"
                width={200}
                height={200}
              />
              <figure>
                <img src={preloader} alt="preloader" />
              </figure>
              <small>Loading</small>{" "}
            </div>
            {/* end inner */}
          </div>
          {/* end preloder */}
          {/* <div className="page-transition">
            <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" version="1.1">
              <path d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,980 1294.66667,930 960,930 C625.333333,930 305.333333,980 0,1080 L0,0 Z" />
            </svg>
          </div> */}
          {/* end page-transition */}
        </> 
    )
}