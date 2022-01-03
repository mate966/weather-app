import styled from "styled-components";
import Theme from "../../Base/theme";

const {
    colors: { lightGreen, darkGreen },
} = Theme;

export const SectionForm = styled.section`
    margin: 0 auto;
    max-width: 320px;
    min-height: 80px;
`;

export const LocationForm = styled.form`
    display: flex;
    margin: 0 auto;
    padding: 0 20px;
    width: 95%;
    border: 1px solid ${lightGreen};
    border-radius: 7px;
    background-color: white;
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

export const ErrorMessage = styled.p`
    margin: 5px 0 0 20px;
    color: ${darkGreen};
`;
