import styled from 'styled-components';


export const AppContainer = styled.div`
    width: 600px;
    margin: ${p => p.theme.spacing(6)} auto;
    padding: ${p => p.theme.spacing(6)};
    background-color: ${p => p.theme.colors.lightGrey};
    border-radius: ${p => p.theme.radii.lg};
    border: none;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
        text-align: center;

`;

export const MainTitle = styled.h1`
    color: ${p => p.theme.colors.black};
    margin-bottom: ${p => p.theme.spacing(6)};
    font-size: 40px;
`;

export const ContactsTitle = styled.h2`
    color: ${p => p.theme.colors.black};
    margin-bottom: ${p => p.theme.spacing(2)};
    font-size: 32px;
`;