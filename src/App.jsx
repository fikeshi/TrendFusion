import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout'
import { ProductsData } from './Api/Api'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
      path:"",
      element:<Home/>,
      loader: ProductsData,
      },
      {
      path:"/cart",
      element:<Cart/>
      }
  ]
  }
])

function App() {
return <RouterProvider router={router}/>
}
export default App
