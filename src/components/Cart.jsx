import { useContext, useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight, HiOutlineShoppingCart } from 'react-icons/hi'
import { DataContext } from "../context/DataContext";
import CartProduct from './CartProduct'

const Cart = () => {

  const { setShowCart, state, setModal } = useContext(DataContext)
  const [total, setTotal] = useState(0)
  
  const { cart } = state;
  
  
  useEffect(() => {
    let totalPrice = 0;
    cart.map( item =>
      totalPrice += item.price * item.quantity
    )  
    setTotal(totalPrice)
  }, [cart])
  

  return (
    <div className='absolute bg-black border-2 top-0 right-0 z-50 flex flex-col w-full md:w-3/5 xl:w-2/5'>

        <button onClick={() => setShowCart(false)} className='flex gap-2 self-end text-2xl leading-5 font-bold p-5'>
          <HiOutlineArrowNarrowRight className='text-lg' />CLOSE
        </button>

        <h1 className='text-8xl mx-4'>YOUR 
            <span className='text-black bw'> CART</span>
        </h1>

        { cart.length > 0 ?
            (cart.map(product => (
            <CartProduct 
                key={product.id}
                product={product}
              />
            ))) : (
              <p className='flex ml-4 md:ml-0 md:self-center gap-2 items-center my-10 text-xl'>< HiOutlineShoppingCart /> Your cart is empty!</p>
            )
        }

        <div className='flex flex-col md:flex-row justify-between md:border-t-2 mt-20'>
            <p className='flex gap-2 justify-between text-xl md:text-3xl py-3 px-5'>TOTAL: <span>${total}</span></p>
            <button className='text-4xl md:text-3xl border-t-2 md:border-t-0 md:border-l-2 py-3 mx-5 md:mx-5 px-0 md:px-5 bw text-black transition-all ease-linear hover:text-white'
              onClick={() => setModal(true)}
            >CHECKOUT</button>
        </div>

    </div>
  )
}

export default Cart