import styled from "styled-components";
// import { NavLink } from "react-router-dom";

export const Container = styled.div` 
    max-width: 960px;
    margin: 0 auto;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-top: ${p => p.theme.space[3]}px;`; 
    
// export const Header = styled.header` 
//     padding-bottom: ${p => p.theme.space[5]}px;
//     padding-top: ${p => p.theme.space[5]}px;
//     border-bottom: ${p => p.theme.borders.normal};
//     margin-bottom: ${p => p.theme.space[4]}px;
//     box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);`;     

// export const Link = styled(NavLink)`
//     text-decoration: none;
//     color: ${p => p.theme.colors.black};
//     font-family: ${p => p.theme.fonts.body};
//     font-size: ${p => p.theme.fontSizes[3]}px;
//     padding-left: ${p => p.theme.space[3]}px;
//     padding-right: ${p => p.theme.space[3]}px;
//     padding-bottom: ${p => p.theme.space[2]}px;
//     padding-top: ${p => p.theme.space[2]}px;
//     border-radius: ${p => p.theme.radii.normal};
//     cursor: pointer;
//      &.active {
//     color: ${p => p.theme.colors.white};
//     background-color: ${p => p.theme.colors.accent};
//   }
//   &:not(:last-child) {
//     margin-right: ${p => p.theme.space[4]}px;
//   }
//   :hover{
//         color: ${p => p.theme.colors.linkColor};
//     };
// `;