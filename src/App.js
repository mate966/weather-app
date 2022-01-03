import { GlobalStyle } from "./Base";

import Header from "../src/Components/Header/Header";
import LocationInput from "../src/Components/LocationInput/LocationInput";
import Weather from "../src/Components/WeatherSection/WeatherSection";
import { useState, useEffect } from "react";

function App() {
    const [current, setCurrent] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [location, setLocation] = useState("");
    const [coords, setCoords] = useState({
        lat: "",
        lon: "",
    });
    const [errorMessage, setErrorMessage] = useState({
        inputError: false,
        locationError: false,
    });
    const getCurrent = () => {
        (async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=29488b0a4ac01b307dac2f403a8774a9&units=metric&lang=pl`
                );
                if (response.status === 404) {
                    setErrorMessage({ locationError: true });
                    return;
                } else {
                    const result = await response.json();
                    setCurrent(result);
                    setCoords({
                        lat: result.coord.lat,
                        lon: result.coord.lon,
                    });
                }
            } catch (err) {
                console.log(err);
            }
        })();
    };

    const getForecast = (lat, lon) => {
        (async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,current,minutely,alerts&appid=29488b0a4ac01b307dac2f403a8774a9&units=metric&lang=pl`
                );
                const result = await response.json();
                setForecast(result);
            } catch (err) {
                console.log(err);
            }
        })();
    };

    useEffect(() => {
        if (coords.lat) {
            getForecast(coords.lat, coords.lon);
        }
    }, [coords.lat, coords.lon]);

    return (
        <>
            <GlobalStyle />
            <div className="App">
                <Header />
                <LocationInput
                    location={location}
                    setLocation={setLocation}
                    getCurrent={getCurrent}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                />
                {forecast.length !== 0 && (
                    <Weather current={current} forecast={forecast} />
                )}
            </div>
        </>
    );
}

export default App;
