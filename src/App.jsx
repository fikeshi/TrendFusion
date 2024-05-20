import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {Route, Routes, Outlet, BrowserRouter} from "react-router-dom"


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
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>  
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
