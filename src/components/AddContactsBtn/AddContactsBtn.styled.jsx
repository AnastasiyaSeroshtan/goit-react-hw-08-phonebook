import styled from "styled-components";

export const AddContactsBtnStyled = styled.button`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.space[2]}px;
    background-color: ${p => p.theme.colors.background};
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${p => p.theme.space[6]}px;
    margin-top: ${p => p.theme.space[0]}px;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    cursor: pointer;
    :hover{
        color: ${p => p.theme.colors.linkColor};
        background-color: ${p => p.theme.colors.accent};
    };
`;

export const AddContactsBtnTextStyled = styled.span`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-left: ${p => p.theme.space[3]}px;
`;