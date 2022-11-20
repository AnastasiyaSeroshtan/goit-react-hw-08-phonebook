import { LogoutButton, LogoutUserDescr, UserMenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
    return (
        <UserMenuWrapper>
            <LogoutUserDescr>mango@mail.com</LogoutUserDescr>
            <LogoutButton>Logout</LogoutButton>
        </UserMenuWrapper>
    )
};