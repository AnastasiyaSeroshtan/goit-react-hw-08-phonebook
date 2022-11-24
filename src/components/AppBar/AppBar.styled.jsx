import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background: radial-gradient(circle, rgba(151,48,205,1) 34%, rgba(210,161,201,1) 97%);
    margin-bottom: ${p => p.theme.space[5]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
    padding-top: ${p => p.theme.space[5]}px;`;