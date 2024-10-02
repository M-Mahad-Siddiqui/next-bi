import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer.jsx"
    import LoginPopUp from "./components/loginPopUp/LoginPopUp.jsx"
import Navbar from "./components/navbar/Navbar"
import Cart from "./pages/cart/Cart"
import Home from "./pages/home/Home.jsx"
import PlaceOrder from "./pages/placeOrder/PlaceOrder"
import { useState } from "react"



function App() {

    const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin = {setShowLogin} />}
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path = "/" element     = {<Home />} />
          <Route path = "/cart" element = {<Cart />} />
          <Route path ='/placeOrder' element = {<PlaceOrder />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
