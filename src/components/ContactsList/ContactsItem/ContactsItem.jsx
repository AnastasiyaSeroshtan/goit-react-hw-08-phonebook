import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contacts/contacts-operations';
import { ContactItem, ContactDescription, ContactButton } from "./ContactsItem.styled";

export const ContactsItem = ({name, number, id}) => {
    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteContact(id))
    };
    return(
        <ContactItem>
        <ContactDescription>{name}:</ContactDescription>
        <ContactDescription>{number}</ContactDescription>
        <ContactButton type="button" onClick={handleDeleteContact}>Delete</ContactButton>
    </ContactItem>
    )
};

ContactsItem.prototype = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};