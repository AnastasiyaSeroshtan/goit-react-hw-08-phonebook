import React from "react";
import { useDispatch } from 'react-redux';
import { login } from "redux/auth/auth-operations";
import { Box } from "../Box";
import { LabelStyled, InputStyled, ButtonStyled } from "./LoginForm.styled";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      const dataUser = {
          email:e.target.elements.email.value,
          password:e.target.elements.password.value,};
      dispatch(login(dataUser));
      e.target.reset();    
  };

    return (
        <Box as="form" onSubmit={handleSubmit} width="40%" display="block" p={3} >
          <LabelStyled>
            Email
            <InputStyled type="email" name="email" required />
          </LabelStyled>
          <LabelStyled>
            Password
            <InputStyled type="password" name="password" required />
          </LabelStyled>
          <ButtonStyled type="submit">Log In</ButtonStyled>
        </Box>
    )
};

