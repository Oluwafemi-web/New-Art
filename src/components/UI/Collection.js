import "../../css/style.css";
import { PortableText } from "@portabletext/react";
import { useInView } from "react-intersection-observer";

export default function Collection(props) {
  const { ref: myRef, inView: isVisible } = useInView();
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className={`collection-box ${isVisible ? "is-reveal" : ""}`}
        ref={myRef}
        data-scroll
        data-scroll-speed={props.dataScroll}
      >
        <figure>
          <img src={props.img} alt="Image" />
        </figure>
        <h4>
          <a href="collection-detail.html">{props.title}</a>
        </h4>
        <PortableText value={props.description} />
      </div>
    </div>
  );
}
