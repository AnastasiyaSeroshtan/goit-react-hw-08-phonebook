import { NavLinkStyled } from './UserAuth.styled';

export const UserAuth = () => {
    return (
        <nav>
            <NavLinkStyled to="/register">Register</NavLinkStyled>
            <NavLinkStyled  to="/login">Log In</NavLinkStyled>
        </nav>
    )
}; 