import React from "react";
import FutureDay from "./FutureDay";
import { createNextDaysHash } from '../component-logic/next-days-counting';
import Slider from "react-slick";
import {connect} from "react-redux";

class NextDay extends React.Component {
    render() {
        const { nextDaysData } = this.props;
        const settings = {
            dots: false,
            lazyLoad: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0
        };

        const nextDaysDataHash = nextDaysData ? createNextDaysHash(nextDaysData) : '';

        const dates = Object.keys(nextDaysDataHash);
        const days = Object.values(nextDaysDataHash);

        const fourDays = days.map((day, index) => (
                <FutureDay
                    key={index}
                    date={dates[index]}
                    icon={`http://openweathermap.org/img/w/${day.icon}.png`}
                    temp={`${day.temp}℃`}
                />
        ));
        return(
            <div className={"row"}>
                <div className={"col-lg-12"}>
                    <Slider {...settings}>
                       {fourDays}
                    </Slider>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        nextDaysData: state.reducer.nextDaysData
    }
};

const NextDayContainer = connect(
    mapStateToProps,
    null,
)(NextDay);

export default NextDayContainer;