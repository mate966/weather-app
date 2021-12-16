import styled from "styled-components";
import Theme from "../../Base/theme";

const {
    colors: { lightGreen },
} = Theme;

export const SectionForm = styled.section`
    margin: 50px auto;
    max-width: 320px;
`;

export const LocationForm = styled.form`
    display: flex;
    margin: 0 auto;
    width: 95%;
    padding: 0 20px;
    border: 1px solid ${lightGreen};
    background-color: white;
    border-radius: 7px;
`;

export const InputLocation = styled.input`
    flex-grow: 1;
    height: 40px;
    border: none;
    color: grey;

    &:focus {
        outline: none;
    }
`;

export const SubmitLocation = styled.button`
    border: none;
    font-size: 20px;
    background-color: transparent;
    color: ${lightGreen};
`;

export const InputIcon = styled.i``;
