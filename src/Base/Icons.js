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

const iconStyles = `    
margin: 10px;
color: white;
`;

const SunnyIcon = styled(WeatherSunny)`
    ${iconStyles}
`;

const PartlyCloudyIcon = styled(WeatherPartlyCloudyDay)`
    ${iconStyles}
`;

const CloudyIcon = styled(WeatherCloudy)`
    ${iconStyles}
`;

const RainyIcon = styled(WeatherRain)`
    ${iconStyles}
`;

const ThunderstormIcon = styled(WeatherThunderstorm)`
    ${iconStyles}
`;

const SnowIcon = styled(WeatherSnow)`
    ${iconStyles}
`;

const FogIcon = styled(WeatherFog)`
    ${iconStyles}
`;

const MoonIcon = styled(WeatherMoon)`
    ${iconStyles}
`;

const PartlyCloudyNightIcon = styled(WeatherPartlyCloudyNight)`
    ${iconStyles}
`;

const RainShowersNightIcon = styled(WeatherRainShowersNight)`
    ${iconStyles}
`;

const SnowShowerNightIcon = styled(WeatherSnowShowerNight)`
    ${iconStyles}
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
