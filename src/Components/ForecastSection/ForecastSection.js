import {
    ForecastSection,
    ForecastDaily,
    ForecastDailyContainer,
} from "./ForecastSectionStyled";
import {
    Paragraph,
    DetailsUnits,
} from "../WeatherSection/WeatherSectionStyled";
import { Icons } from "../../Base/index";

const Forecast = ({ forecast, icon }) => {
    const smallIcon = 50;

    const getDailyForecast = (n) => {
        const dailyForecast = forecast.daily.map((day) => day.temp.day);
        return dailyForecast[n];
    };

    const getForecastIcon = (n) => {
        const forecastIcon = forecast.daily.map((day) => day.weather[0].icon);
        return forecastIcon[n];
    };

    const date = (day) => {
        const currentDay = new Date().getDay();
        const forecastDay = currentDay + day;
        switch (forecastDay) {
            case 0:
                return "Niedziela";
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
            default:
                return null;
        }
    };

    return (
        <ForecastSection>
            <ForecastDailyContainer>
                <Paragraph>{date(1)}</Paragraph>
                <Icons icon={getForecastIcon(0)} size={smallIcon} />
                <Paragraph>
                    {getDailyForecast(0)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(2)}</Paragraph>
                <Icons icon={getForecastIcon(1)} size={smallIcon} />
                <Paragraph>
                    {getDailyForecast(1)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(3)}</Paragraph>
                <Icons icon={getForecastIcon(2)} size={smallIcon} />
                <Paragraph>
                    {getDailyForecast(2)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(4)}</Paragraph>
                <Icons icon={getForecastIcon(3)} size={smallIcon} />
                <Paragraph>
                    {getDailyForecast(3)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(-2)}</Paragraph>
                <Icons icon={getForecastIcon(4)} size={smallIcon} />
                <Paragraph>
                    {getDailyForecast(4)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(-1)}</Paragraph>
                <Icons icon={getForecastIcon(5)} size={smallIcon} />
                <Paragraph>
                    {getDailyForecast(5)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
            <ForecastDailyContainer>
                <Paragraph>{date(0)}</Paragraph>
                <Icons icon={getForecastIcon(6)} size={smallIcon} />
                <Paragraph>
                    {getDailyForecast(6)}
                    <DetailsUnits>°C</DetailsUnits>
                </Paragraph>
            </ForecastDailyContainer>
        </ForecastSection>
    );
};

export default Forecast;
