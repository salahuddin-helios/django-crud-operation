import './App.css';
import React from 'react'
import {RouterProvider} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import router from './Route/Route';
function App() {

  return (
    <div>
      <RouterProvider router={router}>
    
      </RouterProvider>
      <Toaster />
    </div>

   
  );
}

export default App;
