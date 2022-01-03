import styled from "styled-components";

import Theme from "../../Base/theme";

const {
    colors: { lightGreen },
    typography: { light, regular },
    breakpoints: { sm, md, lg },
} = Theme;

const containerStyles = `
    padding: 30px 15px;
    width: 100%;
    background-color: rgba(126, 140, 123, 0.7);
    color: white;
    `;

const sectionFlex = `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    `;

export const WeatherSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 0px auto;
    width: 95%;
    cursor: default;

    @media ${md} {
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media ${lg} {
        margin: 40px auto;
    }
`;

export const Current = styled.section`
    ${sectionFlex}
    ${containerStyles}

    @media ${sm} {
        justify-content: space-around;
    }

    @media ${md} {
        flex: 1;
    }

    @media ${lg} {
        justify-content: center;
    }
`;

export const CurrentHeading = styled.h2`
    text-align: center;
    font-size: 5.9rem;
    line-height: 1;
    font-weight: ${regular};
    color: white;
`;

export const Units = styled.span`
    font-size: 2rem;
    vertical-align: 140%;
`;

export const CurrentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 50%;
`;

export const Paragraph = styled.p`
    text-align: center;
    font-size: 1.2rem;
    font-weight: ${light};
    color: white;
`;

export const LocationContainer = styled.section`
    ${containerStyles}

    @media (min-width: 768px) {
        flex: 1;
    }
`;

export const LocationName = styled.h2`
    text-align: center;
    font-size: 2.7rem;
    line-height: 1.2;
    letter-spacing: 0.1rem;
    font-weight: ${regular};
    color: white;
`;

export const CurrentDetails = styled.section`
    ${sectionFlex};
    ${containerStyles};
    padding: 0;

    @media ${lg} {
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;

export const CurrentDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 50%;
    min-height: 105px;

    &:hover {
        background: ${lightGreen};
    }
`;

export const DetailsUnits = styled.span`
    font-size: 1.2rem;
`;
