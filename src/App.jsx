import './App.css'
import Home from './pages/Home'
// import Cart from './pages/Cart'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout'
import Product from './components/Product'
import { ProductsData } from './Api/Api'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: ProductsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      // {
      //   path: "/cart",
      //   element: <Cart />
      // }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}
export default App
