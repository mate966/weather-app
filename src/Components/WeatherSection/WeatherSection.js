import { useState, useEffect } from "react";

import ForecastSection from "../ForecastSection/ForecastSection";

import {
    WeatherSection,
    Current,
    CurrentContainer,
    CurrentHeading,
    Units,
    Paragraph,
    LocationContainer,
    LocationName,
    CurrentDetails,
    CurrentDetailsContainer,
    DetailsUnits,
    Forecast,
    ForecastDaily,
    ForecastDailyContainer,
} from "./WeatherSectionStyled";

import { Icons } from "../../Base/index";
import { countriesPL } from "../../Base/index";

const Weather = ({ current, coords, forecast, getForecast }) => {
    const [time, setTime] = useState(new Date());
    const mainTemp = current.main.temp.toFixed();
    const icon = current.weather[0].icon;
    const description = current.weather[0].description;
    const country = current.sys.country;
    const currentDate = new Date().toLocaleDateString();
    const feelTemp = current.main.feels_like.toFixed();
    const pressure = current.main.pressure;
    const wind = current.wind.speed;
    const humidity = current.main.humidity;
    const sunrise = new Date(
        current.sys.sunrise * 1000 + current.timezone * 1000
    )
        .toISOString()
        .slice(11, -8);
    const sunset = new Date(current.sys.sunset * 1000 + current.timezone * 1000)
        .toISOString()
        .slice(11, -8);

    console.log(current);

    const bigIcon = 70;

    const countryFullName = () => {
        for (const key in countriesPL) {
            if (countriesPL.hasOwnProperty(key)) {
                if (country === key) {
                    return countriesPL[key];
                }
            }
        }
    };

    // useEffect(() => {
    //     function tick() {
    //         setTime(new Date());
    //     }

    //     let timer = setInterval(() => tick(), 1000);

    //     return function cleanup() {
    //         clearInterval(timer);
    //     };
    // }, []);

    return (
        <WeatherSection>
            <Current>
                <CurrentHeading>
                    {mainTemp}
                    <Units>°C</Units>
                </CurrentHeading>
                <CurrentContainer>
                    <Icons icon={icon} size={bigIcon} />
                    <Paragraph>{description}</Paragraph>
                </CurrentContainer>
            </Current>
            <LocationContainer>
                <LocationName>{current.name},</LocationName>
                <LocationName>{countryFullName()}</LocationName>
                <Paragraph>Środa, {currentDate}</Paragraph>
                <Paragraph>{time.toLocaleTimeString()}</Paragraph>
            </LocationContainer>
            <CurrentDetails>
                <CurrentDetailsContainer>
                    <Paragraph>
                        {feelTemp}
                        <DetailsUnits>°C</DetailsUnits>
                    </Paragraph>
                    <Paragraph>Temperatura odczuwalna</Paragraph>
                </CurrentDetailsContainer>
                <CurrentDetailsContainer>
                    <Paragraph>{pressure}hPa</Paragraph>
                    <Paragraph>Ciśnienie</Paragraph>
                </CurrentDetailsContainer>
                <CurrentDetailsContainer>
                    <Paragraph>{wind}km/h</Paragraph>
                    <Paragraph>Prędkość wiatru</Paragraph>
                </CurrentDetailsContainer>
                <CurrentDetailsContainer>
                    <Paragraph>{humidity}%</Paragraph>
                    <Paragraph>Wiglotność</Paragraph>
                </CurrentDetailsContainer>
                <CurrentDetailsContainer>
                    <Paragraph>{sunrise}</Paragraph>
                    <Paragraph>Wschód</Paragraph>
                </CurrentDetailsContainer>
                <CurrentDetailsContainer>
                    <Paragraph>{sunset}</Paragraph>
                    <Paragraph>Zachód</Paragraph>
                </CurrentDetailsContainer>
            </CurrentDetails>
            <ForecastSection forecast={forecast} />
        </WeatherSection>
    );
};

export default Weather;
