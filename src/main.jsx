import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root';
import Home from './assets/Components/Home/Home';
import AddProducts from './assets/Components/AddProducts/AddProducts';
import Products from './assets/Components/Products/Products';
import Details from './assets/Components/Details/Details';
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
        path:"/add-product",
        element:<AddProducts></AddProducts>
      },
      {
        path:'/products/:brand',
        element:<Products></Products>,
        loader: ()=> fetch('http://localhost:5000/products')

      },
      {
        path:'/detail/:_id',
        element:<Details></Details>,
        loader: ()=> fetch('http://localhost:5000/products')

      }
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
