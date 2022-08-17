import { useContext } from "react"
import { DataContext } from "./context/DataContext"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Modal from "./components/Modal"


function App() {

  const { showCart, setShowCart, top, modal } = useContext(DataContext)

  return (
    <>
      {/* Showing the shopping Cart */}
      { showCart && 
        <Cart />
      }
      <div onClick={ () => setShowCart(false) } className={ showCart ? "absolute bg-black/80 w-full h-[280%] z-40 transition-all ease-in-out" : "bg-black/0" }></div> 

      {/* Checkout modal */}
      { modal && <Modal /> }

      {/* App body */}
      <div ref={top} className="p-[5%] md:p-[2%] overflow-x-clip">
       
        <Navbar />

        <Header />
        <Products />
        
        <Footer /> 
      
    </div>
    </>)
}

export default App
