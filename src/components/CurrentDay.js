import React from "react";
import Now from "./Now"
import NextHour from "./NextHour"
import { connect } from 'react-redux';
import Slider from "react-slick";

class CurrentDay extends React.Component {

    render() {
        const {temp, temp_min_current, temp_max_current, city, country, date, description, icon, nextHoursData} = this.props;

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: nextHoursData ? nextHoursData.length - 1 : 0,
            slidesToScroll: 1,
            initialSlide: 0
        };

        console.log(this.props);
        console.log(nextHoursData);
        console.log(temp);

        const dayDetails =
            nextHoursData
            ? nextHoursData.map((dayDetail, index) =>
                <NextHour
                    key={index}
                    later_temp={`${dayDetail.main.temp}℃`}
                    temp_min_later={`${dayDetail.main.temp_min}℃`}
                    temp_max_later={`${dayDetail.main.temp_max}℃`}
                    later_icon={`http://openweathermap.org/img/w/${dayDetail.weather[0].icon}.png`}
                    hour={dayDetail.dt_txt.slice(10, 16)}
                />
            )
            : '';

        if(nextHoursData) {
            return (
                <div className={"row"}>
                    <div className={"col-lg-4"}>
                        <Now
                            city={city}
                            country={country}
                            temp={temp}
                            temp_min_current={temp_min_current}
                            temp_max_current={temp_max_current}
                            date={date}
                            description={description}
                            icon={icon}
                        />
                    </div>
                    <div className={"col-lg-8"}>
                        <Slider {...settings}>
                            {dayDetails}
                        </Slider>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        temp: state.reducer.temp,
        temp_min_current: state.reducer.temp_min_current,
        temp_max_current: state.reducer.temp_max_current,
        city: state.reducer.city,
        country: state.reducer.country,
        date: state.reducer.date,
        description: state.reducer.description,
        icon: state.reducer.icon,
        nextHoursData: state.reducer.nextHoursData
    }
};

const TodayContainer = connect(
    mapStateToProps,
    null,
)(CurrentDay);

export default TodayContainer;