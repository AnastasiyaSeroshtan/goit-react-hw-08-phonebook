import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const DescriptionHomeStyle = styled.p`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    color: ${p => p.theme.colors.black};
    margin-top: ${p => p.theme.space[5]}px;
    margin-bottom: ${p => p.theme.space[6]}px;
`;

export const LinkLogRegStyle = styled(NavLink)`
    text-decoration: none;
    color: ${p => p.theme.colors.accent};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.space[2]}px;
    border-radius: ${p => p.theme.radii.normal};
    border: ${p => p.theme.borders.normal};
    cursor: pointer;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[6]}px;
  }
  :hover{
        color: ${p => p.theme.colors.linkColor};
    };
`;