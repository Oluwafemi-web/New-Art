import { useInView } from "react-intersection-observer";
import { PortableText } from "@portabletext/react";

export default function Event(props) {
  const { ref: myRef, inView: isVisible } = useInView();
  return (
    <div className="col-lg-4 col-md-6">
      <div
        ref={myRef}
        className={`exhibition-box ${isVisible ? "is-reveal" : ""}`}
        data-scroll
      >
        <figure>
          <a href="#">
            <img src={props.img} alt="" className="img" />
          </a>
          <div className="info">
            <figure className="i">
              <img src={props.icon} alt="" />
            </figure>
            <span>{props.promo}</span>
          </div>
        </figure>
        <div className="content-box">
          <h4>
            <a href="#">{props.title}</a>
          </h4>
          <PortableText value={props.date} />
        </div>
      </div>
    </div>
  );
}
