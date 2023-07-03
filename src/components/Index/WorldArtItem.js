import { PortableText } from "@portabletext/react";

export default function WorldArtItem(props) {
  return (
    <li>
      <figure>
        <img src={props.img} alt="Image" />
      </figure>
      <div className="content">
        <h5>{props.heading}</h5>
        <PortableText value={props.description} />
      </div>
      {/* end content */}
    </li>
  );
}
