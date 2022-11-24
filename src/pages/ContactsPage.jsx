import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Box } from '../components/Box';
import { selectIsLoading, selectError, selectContacts } from '../redux/contacts/contacts-selectors';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import { PhonebookForm } from '../components/PhonebookForm/PhonebookForm';
import { Filter } from '../components/Filter/Filter';
import { ContactsList } from "components/ContactsList/ContactsList";
import { Modal } from "components/Modal/Modal";

import { ButtonStyled } from "components/LoginForm/LoginForm.styled";

const ContactsPage = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const contactsItems = useSelector(selectContacts);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);

    useEffect(() => {
      dispatch(fetchContacts())
  }, [dispatch]);
    return (
        <Box p={3} textAlign="center" margin="0 auto">

          <ButtonStyled type="button" onClick={toggleModal}>+ Add contact</ButtonStyled>

    
          {contactsItems.length > 1 && <Filter />}
          {isLoading && !error && <p>Is loading...</p>}
          {error && <p>Oops! Something went wrong. Try again!</p>}
          <ContactsList />

          {isModalOpen  &&(
              <Modal onCloseModal={toggleModal}>          
                <PhonebookForm  onClose={toggleModal} onCloseBtn={toggleModal}/>
              </Modal>
          )}
        </Box>
    )
};

export default ContactsPage;



// import { useEffect } from "react";
// import { useDispatch, useSelector} from "react-redux";
// import { Box } from '../components/Box';
// import { selectIsLoading, selectError } from '../redux/contacts/contacts-selectors';
// import { fetchContacts } from '../redux/contacts/contacts-operations';
// import { PhonebookForm } from '../components/PhonebookForm/PhonebookForm';
// import { Filter } from '../components/Filter/Filter';
// import { ContactsList } from "components/ContactsList/ContactsList";

// const Contacts = () => {
//     const isLoading = useSelector(selectIsLoading);
//     const error = useSelector(selectError);
//     const dispatch = useDispatch();
//     useEffect(() => {
//       dispatch(fetchContacts())
//   }, [dispatch]);
//     return (
//         <Box bg="muted" p={3} border="normal" borderColor="lightGray" borderRadius="normal" width="35%"  boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
//         1px 4px 6px rgba(0, 0, 0, 0.16)" textAlign="center" margin="0 auto">
//           <h1>Phonebook</h1>
//           <PhonebookForm />
//           <h3>Contacts</h3>
//           <Filter />
//           {isLoading && !error && <p>Is loading...</p>}
//           {error && <p>Oops! Something went wrong. Try again!</p>}
//           <ContactsList />
//         </Box>
//     )
// };

// export default Contacts;
