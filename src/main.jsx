import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root';
import Home from './assets/Components/Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:
    [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/products"
        
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
