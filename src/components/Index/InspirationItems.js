import { PortableText } from "@portabletext/react";

export default function InspirationItems(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="text-content"
        data-scroll
        data-scroll-speed={props.dataScroll}
      >
        <h6>{props.title}</h6>
        <PortableText value={props.description} />
      </div>
      {/* end text-content */}
    </div>
  );
}
