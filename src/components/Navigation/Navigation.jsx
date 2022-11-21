import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
    <nav>
        <NavLinkStyled to="/" end>Home</NavLinkStyled>
        {isLoggedIn &&
        <NavLinkStyled  to="/contacts">Contacts</NavLinkStyled>}
    </nav>
    )
};