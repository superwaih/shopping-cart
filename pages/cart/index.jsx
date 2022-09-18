import React, { useEffect, useState } from 'react'
import { CartState } from '../../context/Context'
import { AiFillDelete } from 'react-icons/ai'
import Rating from '../../components/Rating'
import Head from 'next/head'
import { useRouter } from 'next/router'


const Cart = () => {
  const router = useRouter()
  const {state : { cart }, dispatch} = CartState()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [cart])
  
  return (
   <>


   <Head>
        <title> Cart Page || Shopping Mall  </title>
        <meta name="description" content="created by Adewale Shittu" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
   
    <div className='flex justify-between gap-2 mt-2'>
      <div className='w-[78%]'>
        <ul >
         {cart.map((prod) => {
          return(
            <div className='border w-full flex p-4 justify-between'>
              <img className='h-20 w-20 rounded-full' src={prod.image} alt="" />
              <p>{prod.name}</p>
              <p>${prod.price}</p>

              <Rating rating={prod.rating} />
              <select
              value={prod.qty}
              onChange={(e) => dispatch({
                type: "CHANGE_QTY",
                payload: {
                  id: prod.id,
                  qty: e.target.value
                }
              })}
              
              className='h-8' name="" id="">
                {[1,2,3,4,5].map((x) => (
                  <option  key={x} value={x} >{x}</option>
                ))}
              </select>
             <div className='flex'>
             <AiFillDelete
              className='text-center text-2xl cursor-pointer' 
        onClick={() => dispatch({
            type: "REMOVE_FROM_CART",
            payload: prod
        })}
        />
             </div>

            </div>
          )
         })}
        </ul>

      </div>

      <div className='h-[90vh] w-[25%] px-2 py-4 space-y-4 text-white bg-[#343A40]'>
         <h3 className='text-3xl'>Subtotal ({cart.length}) items</h3>
         <p>Total: ${total}</p>
      </div>

    </div>
   </>
  )
}

export default Cart