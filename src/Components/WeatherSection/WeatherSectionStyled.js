import styled from "styled-components";

import Theme from "../../Base/theme";

const {
    colors: { darkGreen },
    typography: { light, regular },
} = Theme;

export const WeatherInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 95%;
`;

export const CurrentTemp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    padding: 30px 15px;
    width: 100%;
    background-color: rgba(126, 140, 123, 0.7);
    color: white;
`;

export const InfoHeading = styled.h2`
    text-align: center;
    font-size: 5.5rem;
    line-height: 0.9;
    font-weight: ${regular};
    color: white;
`;
export const InfoParagraph = styled.p`
    text-align: center;
    line-height: 0.5;
    font-weight: 300;
    color: white;
`;

export const Units = styled.span`
    font-size: 2rem;
    vertical-align: 140%;
`;
