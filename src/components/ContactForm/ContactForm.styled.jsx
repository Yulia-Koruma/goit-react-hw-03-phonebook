import { Field, Form, ErrorMessage} from "formik";
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    display: inline-flex;
    flex-direction: column;
    width: 400px;
    gap: ${p => p.theme.spacing(2)};
    margin-bottom: ${p => p.theme.spacing(8)};
`;

export const FormLabel = styled.label`
    text-align: start;
    font-size: 16px;
    font-weight: 500;
    color: ${p => p.theme.colors.black};

`;

export const StyledField = styled(Field)`
    padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};
    border: 1px solid ${p => p.theme.colors.blue};
    border-radius: ${p => p.theme.radii.md};
    font-size: 18px;
    font-weight: 400;
`;

export const ErrorMsg = styled(ErrorMessage)`
    color: ${p => p.theme.colors.red};
    font-size: 16px;
    font-weight: 500;
    margin-right: auto;
`;

export const BtnAddContact = styled.button`
    width: 400px;
    padding: ${p => p.theme.spacing(2)};
    margin-right: auto;
    margin-left: auto;
    margin-top: ${p => p.theme.spacing(6)};
    background-color: ${p => p.theme.colors.green};
    color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.lg};
    border: 4px solid ${p => p.theme.colors.green};
    font-size: 20px;
    font-weight: 400;

    &:hover,
    &:focus {
        border: 4px solid ${p => p.theme.colors.darkGreen};
        color: ${p => p.theme.colors.darkGreen};
        font-weight: 600;
    }

`;