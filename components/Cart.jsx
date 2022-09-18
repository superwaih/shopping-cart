import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from '../context/Context'

const CartItem = ({prod}) => {
    const {dispatch} = CartState()
  return (
    <div className='flex border-b-2 bg-white z-50 border-slate-500  p-3 mb-2 gap-3 items-center justify-between '>
        <img className='h-20 w-20 rounded-full ' src={prod.image} alt="" />
        <div className='flex-1 flex flex-col'>
        <p>{prod.name}</p>
        <p>{prod.price}</p>
        </div>
        <AiFillDelete 
        onClick={() => dispatch({
            type: "REMOVE_FROM_CART",
            payload: prod
        })}
        
        className='items-center text-center text-xl cursor-pointer' />
        
    </div>
  )
}

export default CartItem