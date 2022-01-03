import {
    ForecastSection,
    ForecastDailyContainer,
} from "./ForecastSectionStyled";
import {
    Paragraph,
    DetailsUnits,
} from "../WeatherSection/WeatherSectionStyled";

import { Icons } from "../../Base/index";

const Forecast = ({ forecast }) => {
    const getMaxTemp = (n) => {
        const dailyForecast = forecast.daily.map((day) => day.temp.max);
        return Math.round(dailyForecast[n]);
    };
    const getMinTemp = (n) => {
        const dailyForecast = forecast.daily.map((day) => day.temp.min);
        return Math.round(dailyForecast[n]);
    };

    const getForecastIcon = (n) => {
        const forecastIcon = forecast.daily.map((day) => day.weather[0].icon);
        return forecastIcon[n];
    };

    const date = (day) => {
        const currentDay = new Date().getDay();

        const forecastDay = currentDay + day;
        switch (forecastDay) {
            case 1:
                return "Poniedziałek";
            case 2:
                return "Wtorek";
            case 3:
                return "Środa";
            case 4:
                return "Czwartek";
            case 5:
                return "Piątek";
            case 6:
                return "Sobota";
            case 7:
                return "Niedziela";
            default:
                return null;
        }
    };

    const smallIcon = 50;

    return (
        <ForecastSection>
            <ForecastDailyContainer>
                <Paragraph>{date(1)}</Paragraph>
                <Icons icon={getForecastIcon(1)} size={smallIcon} />
                <Paragraph>
                    {getMaxTemp(1)}
                    <DetailsUnits>°C</DetailsUnits> / {getMinTemp(1)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(2)}</Paragraph>
                <Icons icon={getForecastIcon(2)} size={smallIcon} />
                <Paragraph>
                    {getMaxTemp(2)}
                    <DetailsUnits>°C</DetailsUnits> / {getMinTemp(2)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(3)}</Paragraph>
                <Icons icon={getForecastIcon(3)} size={smallIcon} />
                <Paragraph>
                    {getMaxTemp(3)}
                    <DetailsUnits>°C</DetailsUnits> / {getMinTemp(3)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(4)}</Paragraph>
                <Icons icon={getForecastIcon(4)} size={smallIcon} />
                <Paragraph>
                    {getMaxTemp(4)}
                    <DetailsUnits>°C</DetailsUnits> / {getMinTemp(4)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(5)}</Paragraph>
                <Icons icon={getForecastIcon(5)} size={smallIcon} />
                <Paragraph>
                    {getMaxTemp(5)}
                    <DetailsUnits>°C</DetailsUnits> / {getMinTemp(5)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(6)}</Paragraph>
                <Icons icon={getForecastIcon(6)} size={smallIcon} />
                <Paragraph>
                    {getMaxTemp(6)}
                    <DetailsUnits>°C</DetailsUnits> / {getMinTemp(6)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(0)}</Paragraph>
                <Icons icon={getForecastIcon(7)} size={smallIcon} />
                <Paragraph>
                    {getMaxTemp(7)}
                    <DetailsUnits>°C</DetailsUnits> / {getMinTemp(7)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
        </ForecastSection>
    );
};

export default Forecast;
