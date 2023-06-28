export default function InspirationItems(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="text-content" data-scroll>
        <h6>{props.title}</h6>
        <p>{props.description}</p>
      </div>
      {/* end text-content */}
    </div>
  );
}
