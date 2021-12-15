import React from "react";
import styled from "styled-components";

import {
    WeatherSunny,
    WeatherPartlyCloudyDay,
    WeatherCloudy,
    WeatherRain,
    WeatherThunderstorm,
    WeatherSnow,
    WeatherFog,
    WeatherMoon,
    WeatherPartlyCloudyNight,
    WeatherRainShowersNight,
    WeatherSnowShowerNight,
} from "@styled-icons/fluentui-system-filled";
import { Component } from "react/cjs/react.production.min";

const SunnyIcon = styled(WeatherSunny)`
    color: white;
`;
const CloudyIcon = styled(WeatherCloudy)`
    color: white;
`;

const Icons = ({ icon }) => {
    const iconsList = {
        "01d": WeatherSunny,
        "02d": WeatherPartlyCloudyDay,
        "03d": CloudyIcon,
        "04d": CloudyIcon,
        "09d": WeatherRain,
        "10d": WeatherRain,
        "11d": WeatherThunderstorm,
        "13d": WeatherSnow,
        "50d": WeatherFog,
        "01n": WeatherMoon,
        "02n": WeatherPartlyCloudyNight,
        "03n": WeatherPartlyCloudyNight,
        "04n": CloudyIcon,
        "09n": WeatherRainShowersNight,
        "10n": WeatherRainShowersNight,
        "11n": WeatherThunderstorm,
        "13n": WeatherSnowShowerNight,
        "50n": WeatherFog,
    };

    const switchIcon = () => {
        for (const key in iconsList) {
            if (iconsList.hasOwnProperty(key)) {
                if (icon === key) {
                    // console.log(iconsList[key]);
                    return iconsList[key];
                }
            }
        }
    };
    const checkIcon = switchIcon();

    return React.createElement(checkIcon);
    // return <CloudyIcon />;
};

export default Icons;
