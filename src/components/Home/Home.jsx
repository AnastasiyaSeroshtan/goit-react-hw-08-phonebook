import { Box } from "components/Box";
import { DescriptionHomeStyle, LinkLogRegStyle } from "./Home.styled";

export const Home = () => {
    return(
        <Box margin='0 auto' display="block" width="60%" textAlign='center'>
            <h1>Welcome to your personal Phonebook storage page!</h1>
            <DescriptionHomeStyle>Here you can store your telephone contacts, as well as easily find the right one if necessary.</DescriptionHomeStyle>
            <nav>
                <LinkLogRegStyle to="/register">Register</LinkLogRegStyle>
                <LinkLogRegStyle  to="/login">Log In</LinkLogRegStyle>
        </nav>
        </Box>
    )
};

// export const Home = () => {
//     return(
//         <Box margin='0 auto' display="block" width="60%" textAlign='center'>
//             <h1>Welcome to your personal Phonebook storage page!</h1>
//             <DescriptionHomeStyle>Here you can store your telephone contacts, as well as easily find the right one if necessary.</DescriptionHomeStyle>
//             <UserAuth />
//         </Box>
//     )
// };