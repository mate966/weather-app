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
}) => {
    const handleLocation = (e) => {
        setLocation(e.target.value);
    };

    const submitLocation = (e) => {
        e.preventDefault();
        if (!setLocation) {
            alert("Put some location!");
        } else {
            setLocation("");
            getCurrent();
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
        </SectionForm>
    );
};

export default LocationInput;
