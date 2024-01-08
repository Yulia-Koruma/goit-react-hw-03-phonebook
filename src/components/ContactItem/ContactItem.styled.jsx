import styled from 'styled-components';


export const ContactLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    margin: 0 auto;
    margin-top: ${p => p.theme.spacing(3)};

`;

export const ContactName = styled.p`
    color: ${p => p.theme.colors.black};
    font-size: 16px;
    font-weight: 500;

`;

export const BtnDelete = styled.button`
    padding: ${p => p.theme.spacing(1.5)};
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.md};
    border: none;
    font-size: 16px;
    font-weight: 400;

    &:hover,
    &:focus {
        background-color: ${p => p.theme.colors.red};
        font-weight: 600;
    }

`;