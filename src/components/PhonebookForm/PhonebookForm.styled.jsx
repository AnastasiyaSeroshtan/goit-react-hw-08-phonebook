import styled from "styled-components";
import { MdOutlineClose } from 'react-icons/md';

export const BtnCloseStyle = styled.button`
    display: block;
    margin-left: auto;
    border: ${p => p.theme.borders.none};
    outline: none;
    cursor: pointer;
    background-color: ${p => p.theme.colors.white};  
`;

export const BtnCloseIconStyle = styled(MdOutlineClose)`
    margin-left: auto;
    /* margin-bottom: ${p => p.theme.space[3]}px; */
    /* display: block; */
    width: 20px;
    height: 20px;
    
    :hover{
        fill: ${p => p.theme.colors.accent};
    };
`;

export const LabelStyled = styled.label`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    display: block;
    text-align: left;
`;

export const InputStyled = styled.input`
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.black};
    border-radius: ${p => p.theme.radii.normal};
    width: 98%;
    height: ${p => p.theme.space[5]}px;
    :hover{
        border-color: ${p => p.theme.colors.accent};
    };
`;

export const ButtonStyled = styled.button`
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
    margin-top: 55px;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    cursor: pointer;
    :hover{
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.accent};
    };
`;