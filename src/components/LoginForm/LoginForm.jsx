import React from "react";
import { Box } from "../Box";
import { LabelStyled, InputStyled, ButtonStyled } from "./LoginForm.styled";

export const LoginForm = () => {
    return (
        <Box as="form" width="40%" display="block" p={3} >
        <LabelStyled>
        Email
      <InputStyled
        type="email"
        name="email"
        required
      />
      </LabelStyled>
      <LabelStyled>
        Password
      <InputStyled
         type="password"
         name="password"
         required
      />
      </LabelStyled>
      <ButtonStyled type="submit">Log In</ButtonStyled>
  </Box>
    )
};

