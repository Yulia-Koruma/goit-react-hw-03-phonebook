import styled from 'styled-components';

export const FilterTitle = styled.h3`
    margin-bottom: ${p => p.theme.spacing(2)};
    color: ${p => p.theme.colors.black};
    font-size: 20px;
    font-weight: 500;
`;

export const FilterInput = styled.input`
    width: 400px;
    padding: ${p => p.theme.spacing(1)};
    border: 1px solid ${p => p.theme.colors.blue};
    border-radius: ${p => p.theme.radii.md};
    font-size: 18px;
    font-weight: 400;
`;