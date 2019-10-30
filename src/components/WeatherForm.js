import React from "react";
import { Field, reduxForm } from 'redux-form'

let WeatherForm = props => {
    let { handleSubmit } = props;

    return(
        <div className="ibox ">
            <div className="ibox-content">
                <div className="m-t-sm">
                    <div className="row">
                        <div className={"col-md-12"}>
                            <form onSubmit={handleSubmit} className={"form-inline"}>
                                <div className={"form-group"}>
                                    <Field
                                        name="city"
                                        component="input"
                                        type="text"
                                        className={"form-control"}
                                    />
                                </div>
                                <div className={"form-group"}>
                                    <Field
                                        name="country"
                                        component="input"
                                        type="text"
                                        className={"form-control"}
                                    />
                                </div>
                                <button type="submit" className={"btn btn-primary btn-rounded"}>Get Weather</button>
                                <button type="button" className={"btn btn-primary btn-rounded"}>Get Forecast</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    };

export default reduxForm({
    // a unique name for the form
    form: 'weatherForm'
})(WeatherForm);