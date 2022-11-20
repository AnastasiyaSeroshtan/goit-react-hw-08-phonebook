import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path='contacts' element={<Contacts />}/>
        <Route path='register' element={<Register />}/>
        <Route path='login' element={<Login />}/>
        <Route path='*' element={<Home />}/>
      </Route>
    </Routes>
 
  );
};
