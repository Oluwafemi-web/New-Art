import "../../css/style.css";
import { PortableText } from "@portabletext/react";

export default function Collection(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="collection-box"
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
