import React from 'react'
import Layout from './layouts/Layout'
import Home from './pages/home/Home.jsx'
import Portofolio from './pages/portfolio/Portfolio.jsx'
import Contact from './pages/contact/Contact.jsx'
import About from './pages/about/About.jsx'
import  { RouterProvider, createBrowserRouter} from 'react-router-dom'


export default function App() {

    const router = createBrowserRouter(
    [
      {path:'/', element:<Layout/> , children:[
        {index:true, element:<Home/>},
        {path:'/about', element:<About/>},
        {path:'/contact', element:<Contact/>},
        {path:'/portofolio', element:<Portofolio/>},
        {path:'*', element: <h1> Not Found Page  </h1>}
      ]}
    ]
  )
  return <>

    <RouterProvider router={router}/>

  </>
}
