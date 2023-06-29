import { useState } from "react";
export default function FrequentlyAsked(props) {
  const [isClicked, setIsclicked] = useState(false);
  const showHandler = () => {
    setIsclicked(!isClicked);
  };
  return (
    <>
      <dt>
        <a href="#" onClick={showHandler}>
          {props.question}
        </a>
      </dt>
      <dd style={{ display: `${isClicked ? "block" : "none"}` }}>
        {props.answer}
      </dd>
    </>
  );
}
