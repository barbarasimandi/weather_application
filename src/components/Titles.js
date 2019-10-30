import React from "react";
import Geocode from "react-geocode";

class Titles extends React.Component {
    render() {
        return(
            <nav className={"navbar navbar-expand-lg navbar-static-top"}>
                <a href="#" className={"navbar-brand"}>Weather finder</a>
                <div className={"navbar-collapse collapse"}>
                    <ul className={"nav navbar-nav mr-auto"}>
                        <li className={"active"}>
                            <a aria-expanded="false" role="button" href="layouts.html">Find out temperature, conditions and more...</a>
                        </li>
                    </ul>
                    <ul className={"nav navbar-top-links navbar-right"} >
                        <li>
                            <a><i className={"fa fa-map-marker"}></i> Your current location: Budapest</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Titles;