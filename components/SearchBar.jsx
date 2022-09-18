import React from 'react'
import { CartState } from '../context/Context'

const SearchBar = () => {
  const {productDispatch } = CartState()
  return (
    <form className='w-full max-w-lg'>
        <input 
        onChange={(e) => productDispatch({
          type: "FILTER_BY_SEARCH",
          payload: e.target.value
        })}
        type="search" placeholder='search for a product' className='outline-none rounded-md text-black w-full border p-2' />

    </form>
  )
}

export default SearchBar