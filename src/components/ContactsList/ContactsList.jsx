import { useSelector } from "react-redux";
import { Box } from "../Box";
import { ContactsItem } from "./ContactsItem/ContactsItem";
import { selectContacts} from "redux/contacts/contacts-selectors";
import { selectFilterContacts } from  'redux/filter/filter-selector';
import { ContactsTitleStyle } from './ContactsList.styled';

export const ContactsList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilterContacts);
    const contactsItems = useSelector(selectContacts);

    const getVisibleContacts = () => {
            const normalizedFilter = filter.toLocaleLowerCase();
            return (
              contacts.filter(contact => 
                contact.name.toLocaleLowerCase().includes(normalizedFilter))
            )
          }; 

    const visibleContacts = filter ? getVisibleContacts() : contacts;
    
    return (
        <Box as="ul" width='40%' margin='0 auto'>
            {contactsItems.length > 0 && 
                    <ContactsTitleStyle>Contacts</ContactsTitleStyle>}
            {visibleContacts.map(({name, number, id}) => (
                <ContactsItem key={id}
                    id={id} 
                    name={name} 
                    number={number} />
            ))}
        </Box>
    )
};