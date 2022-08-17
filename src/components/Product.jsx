import { useContext, useEffect } from 'react'
import { useState, useRef } from 'react'
import { DataContext } from '../context/DataContext'
import hoverImg from '../assets/hoverItem.png'


const Product = ({product}) => {

    const { id, name, price, img } = product;

    const [hover, setHover] = useState(false)

    const { addToCart } = useContext(DataContext)

    const item = useRef(null)

    useEffect(() => {
        const hoverFunc = () => {
            if(hover) {
               item.current.style.opacity = '1'
            } else {
                item.current.style.opacity = '0'
            }
        }
        hoverFunc()
    }, [hover])
  
  return (
    <div>
            <div 
                onMouseEnter={ () => setHover(true) }
                onMouseLeave={ () => setHover(false) }
                className='relative border-b-4 bg-gradient-to-t from-neutral-900 to-black cursor-pointer overflow-hidden transition-all duration-200 ease-in-out'
            >
                <img src={img} alt='black tshirt basement' />
                <div 
                    onClick={ () => addToCart(id)}
                    ref={item} 
                    className='absolute transition-all duration-300 opacity-0 w-full h-full flex items-center justify-center top-0'
                >
                    <img src={hoverImg} className='transition-all duration-300 hover:scale-105'/>
                </div>
            </div>

            <div className='flex justify-between my-2 font-bold text-lg'>
                <p>{name}</p>
                <p>${price}</p>
            </div>
        </div>
  )
}

export default Product