import styled from "styled-components";

export const LabelStyled = styled.label`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-bottom: 55px;
    display: block;
`;

export const InputStyled = styled.input`
    margin-left: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.black};
    border-radius: ${p => p.theme.radii.normal};
    width: 40%;
    height: ${p => p.theme.space[5]}px;
    :hover{
        border-color: ${p => p.theme.colors.accent};
    };
    &:focus {
      outline: none;
      border-color: ${p => p.theme.colors.accent};
      cursor: pointer;
    };
    &:not(:placeholder-shown) {
      border-color: ${p => p.theme.colors.accent};
      background-color: ${p => p.theme.colors.white};
    }
`;