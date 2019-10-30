import React from "react";
import TitlesContainer from './containers/titles_container/index'
import WeatherFormContainer from './containers/weather_form_container/index'
import TodayContainer from './components/CurrentDay'
import NextDaysContainer from './components/NextDay'
import IsItSpringYet from './components/IsItSpringYet'
import './index.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <div className={"row border-bottom white-bg"}>
                    <TitlesContainer/>
                </div>
                <div className={"wrapper wrapper-content"}>
                    <div className={"container"} >
                        <div className={"row"}>
                            <div className={"col-lg-10"}>
                                <WeatherFormContainer/>
                            </div>
                            <div className={"col-lg-2"}>
                                <IsItSpringYet/>
                            </div>
                        </div>
                        <TodayContainer/>
                        <NextDaysContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default App;