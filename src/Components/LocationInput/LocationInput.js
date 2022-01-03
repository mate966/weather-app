import React from "react";

import {
    LocationForm,
    InputLocation,
    SubmitLocation,
    SectionForm,
    InputIcon,
    ErrorMessage,
} from "./LocationInputStyled";

const LocationInput = ({
    location,
    setLocation,
    getCurrent,
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
            {errorMessage.inputError && (
                <ErrorMessage>Wpisz nazwę miejscowości!</ErrorMessage>
            )}
            {errorMessage.locationError && (
                <ErrorMessage>Nie ma takiej miejscowości!</ErrorMessage>
            )}
        </SectionForm>
    );
};

export default LocationInput;
