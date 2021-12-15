import styled from "styled-components";

import Theme from "../../Base/theme";

const {
    colors: { darkGreen },
    typography: { regular },
} = Theme;

export const ForecastWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainTemp = styled.h2`
    text-align: center;
    font-size: 4.5rem;
    font-weight: ${regular};
    color: ${darkGreen};
`;

export const MainInfo = styled.div`
    min-width: 100%;
    padding: 15px;
    border-radius: 5px;
    background-color: rgba(126, 140, 123, 0.7);
    color: white;
`;

export const ForecastDetailsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 100%;
    margin: 15px 0;
    border-radius: 5px;
    background-color: rgba(126, 140, 123, 0.7);
    color: white;
`;
export const ForecastDetails = styled.div`
    width: 50%;
    padding: 10px;
`;

export const MainSpan = styled.span`
    display: block;
    font-size: 2rem;
    font-weight: ${regular};
    /* color: white; */
`;

export const MainParagraph = styled.p`
    /* color: white; */
`;
