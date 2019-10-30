export const createNextDaysHash = (threeHoursList) => {
    console.log(threeHoursList);
    const fourDaysMap = {};

    for(var i = 0; i < threeHoursList.length; i++) {
        let day = fourDaysMap[threeHoursList[i].dt_txt.substr(0,10)] || {icon: null, temp: null};

        if(day.icon === null) {
            day.icon = threeHoursList[i].weather[0].icon
        }
        if(day.temp === null ) {
            day.temp = threeHoursList[i].main.temp
        }

        fourDaysMap[threeHoursList[i].dt_txt.substr(0, 10)] = day
    }

    console.log(fourDaysMap);
    return fourDaysMap;
};