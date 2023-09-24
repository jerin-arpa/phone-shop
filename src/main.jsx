import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite';
import Login from './components/Login/Login';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/phone.json'),
      },
      {
        path: "/favorite",
        element: <Favorite></Favorite>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/phones/:id',
        element: <PhoneDetails></PhoneDetails>,
        loader: () => fetch('/phone.json'),
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
