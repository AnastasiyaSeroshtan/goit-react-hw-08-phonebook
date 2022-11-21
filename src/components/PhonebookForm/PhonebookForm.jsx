import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { Box } from "../Box";
import { LabelStyled, InputStyled, ButtonStyled } from "./PhonebookForm.styled";

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const getAllContacts = useSelector(selectContacts);
   
  const handleSubmit = (e) => {
      e.preventDefault();
      const getName = getAllContacts.find(contact => contact.name.toLowerCase() === e.target.elements.name.value.toLowerCase());

      if (getName){
        window.alert("This contact already exists.");
      }
      else {
        dispatch(addContact({number:e.target.elements.number.value, name:e.target.elements.name.value}));
      }
      e.target.reset();
    };

    return (
        <Box as="form" onSubmit={handleSubmit} bg="muted"  border="normal" borderRadius="normal" borderColor="accent" display="block" p={3} mb={3} >
              <LabelStyled>
              Name
            <InputStyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            </LabelStyled>
            <LabelStyled>
              Number
            <InputStyled
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
            />
            </LabelStyled>
            <ButtonStyled type="submit">Add contact</ButtonStyled>
        </Box>
      );
};