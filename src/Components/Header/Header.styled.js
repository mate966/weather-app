import styled from "styled-components";
import Theme from "../../Base/theme";

const {
    colors: { lightGreen },
    typography: { regular },
} = Theme;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 20px 10px;
`;

export const Heading = styled.h1`
    font-size: 1.9rem;
    font-weight: ${regular};
    color: ${lightGreen};
`;

export const Socials = styled.div`
    display: flex;
`;

export const SocialLinks = styled.a`
    text-decoration: none;
`;

export const SocialIcon = styled.i`
    margin: 5px;
    display: block;
    font-size: 2rem;
    color: ${lightGreen};
`;
