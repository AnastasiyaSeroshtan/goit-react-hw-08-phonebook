import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavStyled, NavLinkStyled, HomeIconStyled, ContactIconStyled } from './Navigation.styled';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
    <NavStyled>
        <NavLinkStyled to="/" end>
            <HomeIconStyled />
            Home
            </NavLinkStyled>
        {isLoggedIn &&
            <NavLinkStyled  to="/contacts">
                <ContactIconStyled />
                Contacts
            </NavLinkStyled>}
    </NavStyled>
    )
};