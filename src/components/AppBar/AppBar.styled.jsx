import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: ${p => p.theme.colors.lightGray};
    /* padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px; */
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-top: ${p => p.theme.space[4]}px;`;