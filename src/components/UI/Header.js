import "../../css/style.css";
import { PortableText } from "@portabletext/react";

export default function Header(props) {
  return (
    <header
      className="page-header"
      data-background={props.background}
      style={{ background: `url(${props.background})` }}
    >
      <div className="inner">
        <svg width={580} height={400} className="svg-morph">
          <path
            id="svg_morph"
            d="m261,30.4375c0,0 114,6 151,75c37,69 37,174 6,206.5625c-31,32.5625 -138,11.4375 -196,-19.5625c-58,-31 -86,-62 -90,-134.4375c12,-136.5625 92,-126.5625 129,-127.5625z"
            style={{ fill: `${props.color}` }}
          />
        </svg>
        <h1>{props.title}</h1>
        <PortableText value={props.description} />
      </div>
      {/* end inner */}
    </header>
  );
}
