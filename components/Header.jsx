import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CartState } from '../context/Context'
import CartItem from './Cart'
import SearchBar from './SearchBar'
import { useRouter } from "next/router";
const Header = () => {

  const router = useRouter()
  const path = router.route.includes("cart") 
 
  const [show, setShow] = useState(false)
  const { state: { cart } } = CartState()
  return (
    <div className='bg-gray-800 relative flex justify-between p-4 text-white h-20 '>
      <Link href="/">
      <h2 className='text-xl md:text-3xl cursor-pointer'>Nexxt Mall</h2>

      </Link>
      {!path && <SearchBar />}
      


      <div onClick={() => setShow(!show)} className="cart cursor-pointer bg-green-500 font-bold rounded-md p-4 gap- flex">
        <AiOutlineShoppingCart className='text-2xl text-center' />
        <span>{cart.length}</span>
      </div>
      {show && (
        cart.length > 0 ? 
        (<div className='flex flex-col text-black absolute top-[80px] z-50 -bottom-[80%] right-10 border-red-300 rounded w-[300px] '>
        {cart.map((prod) => (
              <CartItem key={prod.id} prod={prod} />
            
        ))}
        <Link href="/cart">
        <button onClick={() => setShow(false)} className='bg-blue-500  cursor-pointer my-2 mx-1 rounded-md text-white w-full px-6 py-3'>Proceed to checkout</button>

        </Link>
        </div>
        )
        
        :
          <div className='absolute text-xl p-4 border-b-2   text-black  -bottom-[80%] right-10 w-[300px] shadow-md rounded-md bg-white' >
            cart is empty!

          </div>

      )}
    </div>
  )
}

export default Header