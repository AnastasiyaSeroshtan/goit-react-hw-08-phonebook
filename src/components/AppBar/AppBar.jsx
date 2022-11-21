import { useSelector } from 'react-redux';
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { UserAuth } from "components/UserAuth/UserAuth";
import { Header } from "./AppBar.styled";
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <UserAuth />}
        </Header>
    )
};