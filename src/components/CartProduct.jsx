import { useContext, useEffect } from "react"
import { DataContext } from "../context/DataContext"
import SizeTab from "./SizeTab";

const CartProduct = ({product }) => {

    const { name, price, description, quantity, img, id } = product;

    const { increment, decrement, removeFromCart } = useContext(DataContext)
    
    useEffect(() => {
      if( quantity <= 0 ) {
        removeFromCart(id)
      }
    }, [quantity])
    
  return (
    <div className='m-4 border-2 p-1 md:p-4 flex gap-5 relative'>

            <div className='my-4 bg-gradient-to-t from-neutral-900 to-black transition-all duration-200 ease-in-out' >
                <img src={img} className='w-20 md:w-40 h-24 md:h-48'/>
            </div>
            <div className='flex flex-col justify-between'>
                <div>
                    <h4 className='text-sm md:text-3xl uppercase'>{name}</h4>
                    <p className='text-sm md:text-xl text-[#999999] mb-4'>{description}</p>
                </div>
                
                <div>
                    <div className="flex items-center gap-2 mb-2 text-xs md:text-xl">
                        <h5>QUANTITY: </h5>
                        <div className="flex gap-2 border-2 px-2 md:px-4 rounded-2xl">
                            <button onClick={() => decrement(id)}>-</button>
                            <p>{quantity}</p>
                            <button onClick={() => increment(id)}>+</button>
                        </div>
                    </div>
                    <div className="flex items-center text-xs md:text-xl gap-2">
                        <p>SIZE:</p>   
                        <SizeTab />
                    </div>
                    <p className='md:absolute bottom-2 right-4 text-sm mt-2 md:text-3xl'>${price * quantity}</p>

                </div>
            </div>
        </div>
  )
}

export default CartProduct