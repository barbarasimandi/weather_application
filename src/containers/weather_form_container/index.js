import React from 'react';
import { connect } from 'react-redux';
import {fetchThreeHours, fetchCurrentDay} from '../../actions/actions';
import WeatherForm from '../../components/WeatherForm';


let WeatherFormContainer = ({ handleSubmit, values }) =>
    <WeatherForm
        onSubmit={values => handleSubmit(values)}
    />;

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: value => {
            dispatch(fetchThreeHours(value));
            dispatch(fetchCurrentDay(value));
        },
    }
};

export default WeatherFormContainer = connect(
    null,
    mapDispatchToProps,
)(WeatherFormContainer);