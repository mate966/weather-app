import styled from "styled-components";
import Theme from "../../Base/theme";

const {
    colors: { lightGreen },
} = Theme;

export const SectionForm = styled.section`
    position: relative;
    /* margin: 10px; */
    min-height: 20vh;
`;

export const LocationForm = styled.form`
    position: absolute;
    top: 40%;
    left: 50%;
    display: flex;
    width: 80%;
    padding: 0 20px;
    border: 1px solid ${lightGreen};
    background-color: white;
    border-radius: 7px;
    transform: translate(-50%, 0);
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
    margin-left: 10px;
    border: none;
    font-size: 20px;
    background-color: transparent;
    color: ${lightGreen};
`;

export const InputIcon = styled.i``;
