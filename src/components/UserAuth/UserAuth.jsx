import { UserAuthWrapper, NavLinkStyled, RegisterIconStyled, LogInIconStyled } from './UserAuth.styled';
// import { FaRegCheckCircle } from 'react-icons/fa';
// import { AiOutlineLogin } from 'react-icons/ai';

export const UserAuth = () => {
    return (
        <UserAuthWrapper>
            <NavLinkStyled to="/register">
                <RegisterIconStyled />
                Register</NavLinkStyled>
            <NavLinkStyled  to="/login">
                <LogInIconStyled />
                Log In</NavLinkStyled>
        </UserAuthWrapper>
    )
}; 