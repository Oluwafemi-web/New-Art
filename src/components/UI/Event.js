import { useInView } from "react-intersection-observer";
import { PortableText } from "@portabletext/react";

export default function Event(props) {
  // let thresholdValue = (props.dataScroll + 3) * 0.2;

  const { ref: myRef, inView: isVisible } = useInView();
  // {
  //   trigger: "scroll", // Trigger the effect when scrolling
  //   threshold: thresholdValue ? thresholdValue : 0.2, // Adjust the threshold value as per your requirement
  // }
  // const delay = props.index + props.dataScroll * 3;

  return (
    // <img
    //   ref={myRef}
    //   src={props.img}
    //   alt=""
    //   className={`exhibition-box ${isVisible ? "is-reveal" : ""}`}
    //   data-scroll
    // />

    <div className="col-lg-4 col-md-6">
      <div
        ref={myRef}
        className={`exhibition-box ${isVisible ? "is-reveal" : ""}`}
        data-scroll
        // style={{ animationDelay: `${delay ? delay : 0}s` }} // Add animation delay based on the index
      >
        <figure>
          <a href="#">
            <img src={props.img} alt="" className="img" />
          </a>
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
