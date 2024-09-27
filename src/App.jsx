import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home.jsx"
import { Routes, Route } from "react-router-dom"
import Cart from "./pages/cart/Cart"
import PlaceOrder from "./pages/placeOrder/PlaceOrder"



function App() {

  return (
    <>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path = "/" element     = {<Home />} />
          <Route path = "/cart" element = {<Cart />} />
          <Route path ='/placeOrder' element = {<PlaceOrder />} />
        </Routes>
      </div>
    </>
  )
}

export default App
