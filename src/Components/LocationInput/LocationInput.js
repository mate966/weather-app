import React from "react";

import {
    LocationForm,
    InputLocation,
    SubmitLocation,
    SectionForm,
    InputIcon,
} from "./LocationInputStyled";

const LocationInput = ({
    location,
    setLocation,
    getCurrent,
    getForecast,
    coords,
    forecast,
    setCurrent,
    errorMessage,
    setErrorMessage,
}) => {
    const handleLocation = (e) => {
        setLocation(e.target.value);
    };

    const submitLocation = (e) => {
        e.preventDefault();
        if (!location) {
            setErrorMessage({ inputError: true });
        } else {
            setLocation("");
            getCurrent();
            setErrorMessage({ inputError: false });
        }
    };

    return (
        <SectionForm>
            <LocationForm>
                <InputLocation
                    type="text"
                    placeholder="Wpisz miejscowość"
                    onChange={handleLocation}
                    value={location}
                />
                <SubmitLocation type="submit" onClick={submitLocation}>
                    <InputIcon className="fas fa-location-arrow"></InputIcon>
                </SubmitLocation>
            </LocationForm>
            {errorMessage.inputError && <h3>Wpisz nazwę miejscowości!</h3>}
            {errorMessage.locationError && <h3>Nie ma takiej miejscowości!</h3>}
        </SectionForm>
    );
};

export default LocationInput;
