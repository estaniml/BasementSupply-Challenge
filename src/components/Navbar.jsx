import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import logo from '../assets/logo.svg'
import bar from '../assets/bar.png'
import icon from '../assets/favicon.ico'

const Navbar = () => {

  const { state, setShowCart } = useContext(DataContext)

  return (
    <nav className="flex items-center max-h-8 md:max-h-16 justify-between my-6 md:my-0">
      <img src={logo} alt='basement logo' className='h-full hidden md:flex'/>
      <img src={icon} alt='basement logo' className='h-full flex md:hidden'/>
      
      <img className="hidden md:flex h-6" src={bar} />
      
      <button onClick={ () => setShowCart(true)} className="font-bold border-2 rounded-3xl px-4 md:px-6 py-1 text-sm md:text-lg transition-all duration-150 ease-linear hover:bg-white hover:text-black">CART ({state.cart.length})</button>
    </nav>
  )
}

export default Navbar