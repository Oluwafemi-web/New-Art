import "../../css/style.css";

export default function Event(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="exhibition-box is-inview"
        data-scroll=""
        data-scroll-speed={-1}
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
          <p>{props.date}</p>
        </div>
        {/* end content-box */}
      </div>
      {/* end exhibition-box */}
    </div>
  );
}
