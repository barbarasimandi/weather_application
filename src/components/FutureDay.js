import React from "react";

class FutureDay extends React.Component {
    render() {
        return(
            <div className={"ibox"}>
                <div className={"text-center"}>
                    <div className={"ibox-content"}>
                        {this.props.date &&  <p> {this.props.date}</p>}
                        <h1 className={"no-margins"}>
                            {this.props.icon && <img className={"img-md"} alt="" src={this.props.icon} />}
                        </h1>
                        {this.props.temp && <h4> {this.props.temp}</h4>}
                    </div>
                </div>
            </div>

        )
    }
}
export default FutureDay;