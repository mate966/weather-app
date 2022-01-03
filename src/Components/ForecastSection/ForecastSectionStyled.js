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
    flex: 1;
    background-color: rgba(126, 140, 123, 0.7);

    @media (min-width: 1024px) {
        flex-wrap: nowrap;
    }
`;

export const ForecastDailyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    margin: 0 auto;
    padding: 15px;
    min-width: 50%;

    &:hover {
        background: ${lightGreen};
    }

    @media (min-width: 1024px) {
        min-width: 0;
    }
`;
