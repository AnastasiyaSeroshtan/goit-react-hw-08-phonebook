import styled from "styled-components";

export const UserMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    
    &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const LogoutUserDescr = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
    border-radius: ${p => p.theme.radii.normal};
    cursor: pointer;
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

export const LogoutButton = styled.button`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.space[2]}px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${p => p.theme.space[0]}px;
    margin-top: ${p => p.theme.space[0]}px;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    cursor: pointer;
    :hover{
        color: ${p => p.theme.colors.linkColor};
        background-color: ${p => p.theme.colors.accent};
    };
`;