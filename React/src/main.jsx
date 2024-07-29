import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { Header } from './components/Header'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import { Projects } from './components/Projects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      
      <>
        <Header/>
          
        <App />
      </>
    )
  },
  {
    path: "/project",
    element:(
      <>
        <Header></Header>

        <Projects></Projects>
      </>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
      
  </React.StrictMode>,
)
