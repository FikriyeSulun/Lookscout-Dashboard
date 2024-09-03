import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './Layout.jsx'

import './assets/css/bootstrap.css'
import './assets/css/reset.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)