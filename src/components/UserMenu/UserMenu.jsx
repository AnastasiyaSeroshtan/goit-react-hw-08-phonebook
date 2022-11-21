import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import { LogoutButton, LogoutUserDescr, UserMenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();

    return (
        <UserMenuWrapper>
            <LogoutUserDescr>Hello, {userName}!</LogoutUserDescr>
            <LogoutButton onClick={() => dispatch(logout())}>Logout</LogoutButton>
        </UserMenuWrapper>
    )
};