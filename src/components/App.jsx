import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { fetchingCurrentUser } from "redux/auth/auth-operations";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivatedRoute } from "./PrivateRoute";
import { selectIsFetchingCurrentUser } from "redux/auth/auth-selectors";
import { Loader } from "./Loader/Loader";
import { Box } from "./Box";

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const getFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchingCurrentUser())
  }, [dispatch]);

  return (
    <Box>
      {getFetchingCurrentUser ? 
      (<Loader />) :
      (
        <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<HomePage />} />
          <Route path='/contacts' element={<PrivatedRoute component={<ContactsPage />} redirectTo='/login'/>}/>
          <Route path='/register' element={<RestrictedRoute component={<RegisterPage />} redirectTo='/contacts'/>}/>
          <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts'/>}/>
          <Route path='*' element={<HomePage/>}/>
        </Route>
      </Routes>
      )}
      <ToastContainer autoClose={3000}/>
    </Box>
  );
};
