import {
    WeatherInfoSection,
    CurrentTemp,
    InfoHeading,
    InfoParagraph,
    Units,
} from "./WeatherSectionStyled";

import { Icons } from "../../Base/index";
import { countriesPL } from "../../Base/index";

const Weather = ({ current, coords, forecast, getForecast }) => {
    const mainTemp = current.main.temp.toFixed();
    const icon = current.weather[0].icon;
    const description = current.weather[0].description;
    const dailyForecast = forecast.daily.map((day) => day);
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    const country = current.sys.country;
    console.log(current);

    const countryFullName = () => {
        for (const key in countriesPL) {
            if (countriesPL.hasOwnProperty(key)) {
                if (country === key) {
                    return countriesPL[key];
                }
            }
        }
    };

    const bigIcon = 120;
    const smallIcon = 50;

    return (
        <WeatherInfoSection>
            <CurrentTemp>
                <InfoHeading>
                    {mainTemp}
                    <Units>°C</Units>
                </InfoHeading>
                <Icons icon={icon} size={bigIcon} />
                <InfoParagraph>{description}</InfoParagraph>
            </CurrentTemp>
            <CurrentTemp>
                <InfoHeading>{current.name},</InfoHeading>
                <InfoHeading>{countryFullName()}</InfoHeading>
                <InfoParagraph>
                    {currentTime} {currentDate}
                </InfoParagraph>
            </CurrentTemp>
            {/* <MainInfo>
                <Icons icon={icon} size={bigIcon} />
                <MainTemp>{mainTemp}°C</MainTemp>
                <h1>{current.name}</h1>
                <h1>{countryFullName()}</h1>
                <h2>
                    {currentTime} {currentDate}
                </h2>
                <h2>{description}</h2>
                <MainParagraph>Piątek 8 Października</MainParagraph>
            </MainInfo> */}
            {/* <ForecastDetailsContainer>
                <ForecastDetails>Godzina Zachodu</ForecastDetails>
                <ForecastDetails>Godzina Zachodu</ForecastDetails>
                <ForecastDetails>Wiglotność</ForecastDetails>
                <ForecastDetails>Ciśnienie</ForecastDetails>
            </ForecastDetailsContainer> */}
        </WeatherInfoSection>
    );
};

export default Weather;
