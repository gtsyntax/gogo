import React from 'react'
import ReactDOM from 'react-dom/client'
/* routes */
import Root from './routes/root'
import ErrorPage from './error-page'
import Register from './routes/register'
import Login from './routes/login'
import Index from './routes/index'
import Shop from './routes/shop'
import ShopDetail from './routes/shopDetail'
/* routes */
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true,
        element: <Index />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "shops",
        element: <Shop />
      },
      {
        path: "shops/:shopId",
        element: <ShopDetail />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
