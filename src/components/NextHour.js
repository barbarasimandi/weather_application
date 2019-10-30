import React from "react";

class NextHour extends React.Component {
    render() {
        return(
                <div className={"text-center"}>
                    <div className={"ibox-content"}>
                        {this.props.hour && <h3 className={"text-muted"}>{this.props.hour}</h3>}
                        {this.props.later_icon && <img className={"img-lg"} alt="" src={this.props.later_icon} />}
                        {this.props.later_temp && <h4>{this.props.later_temp}</h4>}
                        <br/>
                        {this.props.temp_min_later && this.props.temp_max_later &&
                            <p>
                                <i className={"text-info fa fa-play fa-rotate-90"}> </i>
                                <span className={"text-info"}> {this.props.temp_min_later} </span>
                                <i className={"text-warning fa fa-play fa-rotate-270"}> </i>
                                <span className={"text-warning"}> {this.props.temp_max_later}</span>
                            </p>
                        }
                    </div>
                </div>

        )
    }
}
export default NextHour;