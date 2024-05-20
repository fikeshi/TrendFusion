import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {Route, Routes, Outlet, BrowserRouter} from "react-router-dom"
import { productsData } from './Api/Api'



const layout=()=>{
  return (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
  )
}


function App() {
  return (
    <div className='font-bodyFont'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={layout()}>
            <Route index loader:productsData element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>  
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
