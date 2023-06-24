export default function WorldArtItem(props) {
  return (
    <li>
      <figure>
        <img src={props.img} alt="Image" />
      </figure>
      <div className="content">
        <h5>{props.heading}</h5>
        <p>{props.description}</p>
      </div>
      {/* end content */}
    </li>
  );
}
