
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './screen/home/Home';    
import Images from './screen/images/Images';

    // this is old version to define router  
 const router =createBrowserRouter([
  {
    path: '/',
    element: <Home />

  },
  {
    path:'/images',
    element: <Images />
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