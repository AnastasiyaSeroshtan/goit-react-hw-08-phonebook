import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Box } from '../components/Box';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { PhonebookForm } from '../components/PhonebookForm/PhonebookForm';
import { Filter } from '../components/Filter/Filter';
import { ContactsList } from "components/ContactsList/ContactsList";

const Contacts = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchContacts())
  }, [dispatch]);
    return (
        <Box bg="muted" p={3} border="normal" borderColor="lightGray" borderRadius="normal" width="35%"  boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
        1px 4px 6px rgba(0, 0, 0, 0.16)" textAlign="center" margin="0 auto">
          <h1>Phonebook</h1>
          <PhonebookForm />
          <h3>Contacts</h3>
          <Filter />
          {isLoading && !error && <p>Is loading...</p>}
          {error && <p>Oops! Something went wrong. Try again!</p>}
          <ContactsList />
        </Box>
    )
};

export default Contacts;

// import { Box } from "./Box";
// import { Form } from "./Form/Form";
// import { ContactsList } from "./ContactsList/ContactsList";
// import { Filter } from "./Filter/Filter";
// import { Header, Title } from "./Title.styled";
// import { fetchContacts } from "redux/operations";
// import { useEffect } from "react";
// import { useDispatch, useSelector} from "react-redux";
// import { selectError, selectIsLoading } from "redux/selectors";

// export const App = () => {
// //   const isLoading = useSelector(selectIsLoading);
// //   const error = useSelector(selectError);
// //   const dispatch = useDispatch();
// //   useEffect(() => {
// //     dispatch(fetchContacts())
// // }, [dispatch]);

//   return (
//     <Box bg="muted" p={3} border="normal" borderColor="lightGray" borderRadius="normal" width="35%"  boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
//     1px 4px 6px rgba(0, 0, 0, 0.16)" textAlign="center" margin="0 auto">
//       <Header>Phonebook</Header>
//       <Form />
//       <Title>Contacts</Title>
//       <Filter />
//       {isLoading && !error && <p>Is loading...</p>}
//       {error && <p>Oops! Something went wrong. Try again!</p>}
//       <ContactsList />
//     </Box>
//   );
// };