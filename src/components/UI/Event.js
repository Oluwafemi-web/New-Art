
import "../../css/style.css";

import icon from "../../images/icon-info.png";
import data from "../../data"

export default function Event(props) {
  return (
    <>
        <div className="col-lg-4 col-md-6">
            <div
              className="exhibition-box is-inview"
              data-scroll=""
              data-scroll-speed={-1}
              style={{
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -31.7812, 0, 1)",
              }}
            >
              <figure>
                <a href="#">
                  <img src={props.img} alt="Image" className="img" />
                </a>
                <div className="info">
                  <figure className="i">
                    <img src={icon} alt="Image" />
                  </figure>
                  <span>{props.promo}</span>
                </div>
                {/* end info */}
              </figure>
              <div className="content-box">
                <h4>
                  <a href="#">{props.h4}</a>
                </h4>
                <p>{props.p}</p>
              </div>
              {/* end content-box */}
            </div>
            {/* end exhibition-box */}
        </div>
    </>
  );
}
