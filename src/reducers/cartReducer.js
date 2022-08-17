import tshirt from '../assets/products/shirt.png';
import hoodie from '../assets/products/hoodie.png';
import cap from '../assets/products/cap.png';

export const cartInitialState = {
    products: [
        {
            id: 1,
            name: 'Black t-shirt',
            price: 8,
            img: `${tshirt}`,
            description: 'Unisex Basic Softstyle T-Shirt'
        },
        {
            id: 2,
            name: 'Black hoodie',
            price: 13,
            img: `${hoodie}`,
            description: 'Unisex Basic hoodie'
        },
        {
            id: 3,
            name: 'Black caps',
            price: 23,
            img: `${cap}`,
            description: 'Unisex Basic Cap'
        }
    ],
    cart: [],
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
                let newItem = state.products.find(product => product.id === action.payload)

                let quantityItem = state.cart.find(product => product.id === newItem.id)
                
                return quantityItem 
                ? {
                    ...state,
                    cart: state.cart.map(product => product.id === newItem.id ? {...product, quantity: product.quantity + 1} : product),
                }
                : {
                    ...state,
                    cart: [...state.cart, {...newItem, quantity: 1}]
                }
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }
        case 'INCREMENT':
            return {
                ...state,
                cart: state.cart.map(product => product.id === action.payload ? {...product, quantity: product.quantity + 1} : product)
            }
        case 'DECREMENT':
            return {
                ...state,
                cart: state.cart.map(product => product.id === action.payload ? {...product, quantity: product.quantity - 1} : product)
            }
        default:
            return state
    }
}