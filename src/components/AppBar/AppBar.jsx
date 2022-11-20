import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { UserAuth } from "components/UserAuth/UserAuth";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
    return (
        <Header>
            <Navigation />
            <UserAuth />
            <UserMenu />
        </Header>
    )
};