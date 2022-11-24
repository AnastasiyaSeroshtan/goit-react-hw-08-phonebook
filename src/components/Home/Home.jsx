import { useSelector } from 'react-redux';
import { Box } from "components/Box";
import { DescriptionHomeStyle, LinkLogRegStyle } from "./Home.styled";
import { selectIsLoggedIn } from "redux/auth/auth-selectors";

export const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return(
        <Box margin='0 auto' display="block" width="60%" textAlign='center'>
            <h1>Welcome to your personal Phonebook storage page!</h1>
            <DescriptionHomeStyle>Here you can store your telephone contacts, as well as easily find the right one if necessary.</DescriptionHomeStyle>
            {!isLoggedIn &&
                        <nav>
                            <LinkLogRegStyle to="/register">Register</LinkLogRegStyle>
                            <LinkLogRegStyle  to="/login">Log In</LinkLogRegStyle>
                        </nav>
            }
        </Box>
    )
};