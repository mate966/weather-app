import {
    MainInfo,
    ForecastWrapper,
    MainSpan,
    MainIcon,
    MainParagraph,
    MainTemp,
    ForecastDetails,
    TestIcon,
    ForecastDetailsContainer,
} from "./WeatherSectionStyled";

import Icons from "../../Base/Icons";

const Weather = ({ current, coords, forecast, getForecast }) => {
    const mainTemp = current.main.temp.toFixed();
    const icon = current.weather[0].icon;
    const dailyForecast = forecast.daily.map((day) => day);
    console.log(dailyForecast);
    console.log(current);
    console.log(icon);

    return (
        <ForecastWrapper>
            <Icons icon={icon} />
            <i
                className="wi-day-sunny"
                style={{
                    color: "red",
                    width: "50px",
                    height: "50px",
                    fontSize: "2rem",
                    backgroundColor: "green",
                }}
            />
            <MainTemp>{mainTemp}°C</MainTemp>
            <h1>{current.name}</h1>
            <h2>{coords.lat}</h2>
            <MainInfo>
                <MainIcon></MainIcon>
                <p>
                    <MainSpan></MainSpan>
                </p>
                <MainParagraph>Piątek 8 Października</MainParagraph>
            </MainInfo>
            <ForecastDetailsContainer>
                <ForecastDetails>Godzina Zachodu</ForecastDetails>
                <ForecastDetails>Godzina Zachodu</ForecastDetails>
                <ForecastDetails>Wiglotność</ForecastDetails>
                <ForecastDetails>Ciśnienie</ForecastDetails>
            </ForecastDetailsContainer>
        </ForecastWrapper>
    );
};

export default Weather;
