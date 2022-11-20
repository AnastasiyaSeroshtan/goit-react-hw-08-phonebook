import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
    return (
    <nav>
        <NavLinkStyled to="/" end>Home</NavLinkStyled>
        <NavLinkStyled  to="/contacts">Contacts</NavLinkStyled>
    </nav>
    )
};