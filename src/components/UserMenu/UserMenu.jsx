import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import { LogoutButton, LogoutButtonTextStyled, LogoutUserDescr, UserMenuWrapper } from './UserMenu.styled';
import { AiOutlineLogout } from 'react-icons/ai';
export const UserMenu = () => {
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();

    return (
        <UserMenuWrapper>
            <LogoutUserDescr>Hello, {userName}!</LogoutUserDescr>
            <LogoutButton onClick={() => dispatch(logout())}>
                <AiOutlineLogout />
                <LogoutButtonTextStyled>Logout</LogoutButtonTextStyled>
            </LogoutButton>
        </UserMenuWrapper>
    )
};