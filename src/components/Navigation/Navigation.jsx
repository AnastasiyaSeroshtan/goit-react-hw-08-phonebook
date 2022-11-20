// import { Home } from "components/Home/Home";
// import { Contacts } from "components/Contacts/Contacts";
// import { Box } from "components/Box";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
    <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink  to="/contacts">Contacts</NavLink>
    </nav>
    )
};