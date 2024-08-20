
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './screen/home/Home';    
import Images from './screen/images/Images';
import Layout from './component/Layout';
import NotFound from './component/404/Notfound';
import Login from './login/Login';

    // this is old version to define router  
 const router =createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>

  },
  {
    path:'/images',
    element: <Layout ><Images /></Layout>

  },

  {
    path:'/login',
    element: <Layout ><Login /></Layout>

  },
  {
    path:'/*',
    element: <Layout ><NotFound /></Layout>

  }
  

 ])  



const App = () => {


  return (

    <>
       <RouterProvider 
        router={router} />

       
    </>
  )
}

export default App