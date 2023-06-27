import "../../css/style.css";

export default function Collection(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="collection-box"
        data-scroll=""
        data-scroll-speed={props.dataScroll}
      >
        <figure>
          <img src={props.img} alt="Image" />
        </figure>
        <h4>
          <a href="collection-detail.html">
            {props.h4}
          </a>
        </h4>
        <p>
          {props.p}
        </p>
      </div>
      {/* end collection-box */}
      {/* {console.log(props, props.img, props.p, props.h4)} */}
    </div>
  );
}
