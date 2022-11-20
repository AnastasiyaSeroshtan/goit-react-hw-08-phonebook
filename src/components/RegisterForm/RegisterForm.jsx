import React from "react";
import { useDispatch } from 'react-redux';
import { register } from "redux/auth/operations";
import { Box } from "../Box";
import { RegisterLabel, RegisterInput, RegisterButton } from './RegisterForm.styled';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({name:e.currentTarget.elements.name.value,
            email:e.currentTarget.elements.email.value,
            password:e.currentTarget.elements.password.value,}));
        e.currentTarget.reset();    
    };

    return (
        <Box as="form" onSubmit={handleSubmit} width="40%" display="block" p={3} >
        <RegisterLabel>
            Name
            <RegisterInput type="name" name="name" required/>
        </RegisterLabel>
        <RegisterLabel>
            Email
            <RegisterInput type="email" name="email" required/>
        </RegisterLabel>
        <RegisterLabel>
            Password
            <RegisterInput type="password" name="password" required />
        </RegisterLabel>
        <RegisterButton type="submit">Register</RegisterButton>
  </Box>
    )
};