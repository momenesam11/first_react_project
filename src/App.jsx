import React from 'react'
import Layout from './layouts/Layout'
import Home from './pages/home/Home.jsx'
import Portfolio from './pages/portfolio/Portfolio.jsx'
import Contact from './pages/contact/Contact.jsx'
import About from './pages/about/About.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: '*', element: <h1>Not Found Page</h1> },
      ],
    },
  ],
  {
    basename: '/react_assigment_one',
  }
)

export default function App() {
  return <RouterProvider router={router} />
}