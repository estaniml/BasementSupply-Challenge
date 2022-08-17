import Product from './Product'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Products = () => {

  const { state } = useContext(DataContext)
  const { products } = state;
  

  return (
    <div className='grid md:grid-cols-3 gap-10'>
      {
        products.map( product => (
          <Product 
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  )
}

export default Products