import { UserAuthWrapper, NavLinkStyled, RegisterIconStyled, LogInIconStyled } from './UserAuth.styled';

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