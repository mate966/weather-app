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

const SunnyIcon = styled(WeatherSunny)`
    color: white;
`;

const PartlyCloudyIcon = styled(WeatherPartlyCloudyDay)`
    color: white;
`;

const CloudyIcon = styled(WeatherCloudy)`
    color: white;
`;

const RainyIcon = styled(WeatherRain)`
    color: white;
`;

const ThunderstormIcon = styled(WeatherThunderstorm)`
    color: white;
`;

const SnowIcon = styled(WeatherSnow)`
    color: white;
`;

const FogIcon = styled(WeatherFog)`
    color: white;
`;

const MoonIcon = styled(WeatherMoon)`
    color: white;
`;

const PartlyCloudyNightIcon = styled(WeatherPartlyCloudyNight)`
    color: white;
`;

const RainShowersNightIcon = styled(WeatherRainShowersNight)`
    color: white;
`;

const SnowShowerNightIcon = styled(WeatherSnowShowerNight)`
    color: white;
`;

const Icons = ({ icon, size }) => {
    const iconsList = {
        "01d": SunnyIcon,
        "02d": PartlyCloudyIcon,
        "03d": CloudyIcon,
        "04d": CloudyIcon,
        "09d": RainyIcon,
        "10d": RainyIcon,
        "11d": ThunderstormIcon,
        "13d": SnowIcon,
        "50d": FogIcon,
        "01n": MoonIcon,
        "02n": PartlyCloudyNightIcon,
        "03n": PartlyCloudyNightIcon,
        "04n": CloudyIcon,
        "09n": RainShowersNightIcon,
        "10n": RainShowersNightIcon,
        "11n": ThunderstormIcon,
        "13n": SnowShowerNightIcon,
        "50n": FogIcon,
    };

    const switchIcon = () => {
        for (const key in iconsList) {
            if (iconsList.hasOwnProperty(key)) {
                if (icon === key) {
                    return iconsList[key];
                }
            }
        }
    };

    return React.createElement(switchIcon(), { size });
};

export default Icons;
