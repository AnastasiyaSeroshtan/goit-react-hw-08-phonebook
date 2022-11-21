import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { getCurrentUser } from "redux/auth/auth-operations";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivatedRoute } from "./PrivateRoute";

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path='/contacts' element={<PrivatedRoute component={<Contacts />} redirectTo='/login'/>}/>
        <Route path='/register' element={<RestrictedRoute component={<Register />} redirectTo='/contacts'/>}/>
        <Route path='/login' element={<RestrictedRoute component={<Login />} redirectTo='/contacts'/>}/>
        <Route path='*' element={<Home />}/>
      </Route>
    </Routes>
 
  );
};
