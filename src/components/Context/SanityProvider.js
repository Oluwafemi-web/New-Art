import SanityContext from "./sanity-context";
import { useState } from "react";
const SanityProvider = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);

  const changeState = (newState) => {
    setDataLoaded(newState);
  };

  const stateContext = {
    dataLoaded,
    changeState,
  };

  return (
    <SanityContext.Provider value={stateContext}>
      {props.children}
    </SanityContext.Provider>
  );
};
export default SanityProvider;
