import React from "react";
import { useDispatch } from 'react-redux';
import { register } from "redux/auth/auth-operations";
import { Box } from "../Box";
import { RegisterLabel, RegisterInput, RegisterButton } from './RegisterForm.styled';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataUser = {
            name:e.target.elements.name.value,
            email:e.target.elements.email.value,
            password:e.target.elements.password.value};
        dispatch(register(dataUser));
        e.target.reset();    
    };

    return (
        <Box as="form" onSubmit={handleSubmit} width="40%" margin='0 auto' display="block" p={3} >
        <RegisterLabel>
            Name
            <RegisterInput type="text" name="name" required/>
        </RegisterLabel>
        <RegisterLabel>
            Email
            <RegisterInput type="email" name="email" required/>
        </RegisterLabel>
        <RegisterLabel>
            Password
            <RegisterInput type="password" name="password" required/>
        </RegisterLabel>
        <RegisterButton type="submit">Register</RegisterButton>
  </Box>
    )
};