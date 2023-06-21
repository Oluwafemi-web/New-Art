import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import data from "../../data"

// import UI components
import Header from "../UI/Header";

export default function Exhibitions() {
    return (
        <>
            <Header content={data.heading.exhibition}/>
        </>
    );
}
