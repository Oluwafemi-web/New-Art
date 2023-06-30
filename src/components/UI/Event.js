import "../../css/style.css";
import { PortableText } from "@portabletext/react";

export default function Event(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="exhibition-box"
        data-scroll
        data-scroll-speed={props.dataScroll}
      >
        <figure>
          <a href="#">
            <img src={props.img} alt="Image" className="img" />
          </a>
          <div className="info">
            <figure className="i">
              <img src={props.icon} alt="Image" />
            </figure>
            <span>{props.promo}</span>
          </div>
          {/* end info */}
        </figure>
        <div className="content-box">
          <h4>
            <a href="#">{props.title}</a>
          </h4>
          <PortableText value={props.date} />
        </div>
        {/* end content-box */}
      </div>
      {/* end exhibition-box */}
    </div>
  );
}
