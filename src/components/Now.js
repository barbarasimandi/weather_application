import React from "react";

class Now extends React.Component {
    render() {
        return(
            <div className={"ibox"}>
                <div className={"ibox-title"}>
                    {this.props.date &&  <h5 > {this.props.date}</h5>}
                    <div className={"ibox-tools"}>
                        {this.props.city && this.props.country && <h1><span className={"label label-primary float-right"}>  {this.props.city}, {this.props.country}</span></h1>}
                    </div>
                </div>
                <div className={"text-center"}>
                    <div className={"ibox-content"}>
                        {this.props.icon && <img className={"img-md"} alt="" src={this.props.icon} />}
                        {this.props.description && <p><small>{this.props.description}</small></p>}
                        {this.props.temp && <h2 className={"text-primary"}>{this.props.temp}<small> ℃ </small></h2>}
                        {this.props.temp_min_current && this.props.temp_max_current &&
                            <p>
                                <i className={"text-info fa fa-play fa-rotate-90"}> </i>
                                <span className={"text-info"}> {`${this.props.temp_min_current}℃`} </span>
                                <i className={"text-warning fa fa-play fa-rotate-270"}> </i>
                                <span className={"text-warning"}> {`${this.props.temp_max_current}℃`}</span>
                            </p>
                        }
                        {this.props.error && <p>{this.props.error}</p>}
                    </div>
                </div>
            </div>
        );
    }
}
export default Now;