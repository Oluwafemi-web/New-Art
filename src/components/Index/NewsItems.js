import { PortableText } from "@portabletext/react";

export default function NewsItems(props) {
  return (
    <div className="col-12">
      <div className="recent-news">
        <div className="content-box">
          <small>{props.date}</small>
          <h3>{props.heading}</h3>
          <PortableText value={props.description} />

          <a href="#" className="custom-link">
            Continue reading
          </a>
        </div>
        {/* end content-box */}
        <figure data-scroll>
          <img src={props.img} alt="Image" />
        </figure>
      </div>
      {/* end recent-news */}
    </div>
  );
}
