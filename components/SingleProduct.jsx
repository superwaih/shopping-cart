import React from 'react'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({ prod }) => {
    const { state: { cart }, dispatch } = CartState()
    return (
        <div className='rounded max-w-[380px] border h-[520px] shadow-md'>
            <img className='h-80 w-full rounded-t ' src={prod.image} alt="" />
            <div className='px-4 py-2 space-y-3'>
                <h3 className='font-bold text-xl'>{prod.name}</h3>
                <p>${prod.price.split(".")[0]}</p>
                {prod.fastDelivery ? (<p>Fast Delivery</p>) : (<p>4 days delivery</p>)}
                <Rating rating={prod.ratings} />
            </div>
        {cart.some(c => c.id === prod.id) ?

        (<button
        key={prod.id}
            onClick={() => dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod
            })} 
            className='px-4 w-full text-white  py-3 bg-red-700 font-bold rounded-md'>Remove from cart</button>)


                :   (<button
                    key={prod.id}
                    disabled={!prod.inStock}
                    onClick={() => dispatch({
                        type: "ADD_TO_CART",
                        payload: {
                            id: prod.id,
                            name: prod.name,
                            price: prod.price,
                            image: prod.image,
                            rating: prod.ratings,
                            inStock: prod.inStock
                        }
                    })}
                    className='px-4 w-full py-3 font-bold bg-green-400 rounded-md'>{!prod.inStock ? "Out of Stock" : "Add to cart"}</button>)
            }


        </div>
    )
}

export default SingleProduct