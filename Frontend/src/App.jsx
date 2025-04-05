import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavbarTop from './components/Layouts/NavbarTop';
import Footer from './components/Layouts/Footer';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/><Footer/></>,
    },
    {
      path: "/contact",
      element: <><NavbarTop/><Contact/><Footer/></>,
    },
    // {
    //   path: "/login",
    //   element: <><NavbarTop/><Login/><Footer/></>,
    // },
    // {
    //   path: "/signup",
    //   element: <><NavbarTop/><Signup/><Footer/></>,
    // },
    // {
    //   path: "/Profile",
    //   element: <><NavbarTop/><Profile/><Footer/></>,
    // },
  ]);
  return (
      <>
      <RouterProvider router={router} />
      </>
  )
}

export default App

