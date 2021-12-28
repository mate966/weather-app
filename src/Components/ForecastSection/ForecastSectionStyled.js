import styled from "styled-components";

import Theme from "../../Base/theme";

const {
    colors: { lightGreen },
} = Theme;

export const ForecastSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(126, 140, 123, 0.7);
`;

export const ForecastDailyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin: 0 auto;
    flex-basis: 50%;

    &:hover {
        background: ${lightGreen};
    }
`;
