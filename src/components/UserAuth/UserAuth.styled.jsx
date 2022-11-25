import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaRegCheckCircle } from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai';

export const UserAuthWrapper = styled.nav`
  display: flex;
`;

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.space[2]}px;
    border-radius: ${p => p.theme.radii.normal};
    cursor: pointer;
    display: flex;
    align-items: center;
     &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
  :hover{
        color: ${p => p.theme.colors.linkColor};
    };
`;

export const RegisterIconStyled = styled(FaRegCheckCircle)`
    margin-right: ${p => p.theme.space[2]}px;
`;

export const LogInIconStyled = styled(AiOutlineLogin)`
    margin-right: ${p => p.theme.space[2]}px;
`;