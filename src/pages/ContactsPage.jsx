import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Box } from '../components/Box';
import { selectIsLoading, selectError, selectContacts } from '../redux/contacts/contacts-selectors';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import { PhonebookForm } from '../components/PhonebookForm/PhonebookForm';
import { Filter } from '../components/Filter/Filter';
import { ContactsList } from "components/ContactsList/ContactsList";
import { Modal } from "components/Modal/Modal";
import { AddContactsBtn } from "components/AddContactsBtn/AddContactsBtn";

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
        <Box textAlign="center" margin="0 auto">
          <AddContactsBtn onClickAddContactsBtn={toggleModal}/>

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