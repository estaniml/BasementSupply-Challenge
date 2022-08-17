import { createContext, useReducer, useRef, useState } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";

export const DataContext = createContext();



export const DataProvider = ({ children }) => {
    
    const [showCart, setShowCart] = useState(false)
    const [modal, setModal] = useState(false)

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const top = useRef(null)
    
    const addToCart = id => {
        dispatch({type: 'ADD_TO_CART', payload: id})
        top.current.scrollIntoView()
    }

    const removeFromCart = id => {
        dispatch({type: 'REMOVE_FROM_CART', payload: id})
    }

    const increment = id => {
        dispatch({type: 'INCREMENT', payload: id})
      }
    
    const decrement = id => {
        dispatch({type: 'DECREMENT', payload: id})
    }

    return (
        <DataContext.Provider value={{
            showCart,
            setShowCart,
            modal,
            setModal,
            state,
            top,
            addToCart,
            removeFromCart,
            decrement,
            increment
        }}>
            {children}
        </DataContext.Provider>
    )
}