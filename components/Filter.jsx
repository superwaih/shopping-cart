import React, { useState } from 'react'
import { CartState } from '../context/Context'
import Rating from './Rating'

const Filter = () => {
  const [rate, setRate] = useState(0)

  const { productState: {
    sort,
    byStock,
    byFastDelivery,
    byRating,
    searchQuery }, productDispatch } = CartState()

  
  const onclick = (i) => {
    setRate(i + 1);
  };

  return (
    <div className='h-[86vh] w-[25%] px-2 py-4 space-y-4 text-white bg-[#343A40]'>
      <h3 className='text-[25px]'>Filter Products</h3>
      <div className="radios px-4 flex flex-col space-y-4">
        <div className='flex gap-4 items-center'>
          <input
            onChange={() => productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh"
            })}

            checked={sort === "lowToHigh" ? true : false}

            type="radio" name="sort" id="" />
          <label
            htmlFor="ascending">Ascending</label>
        </div>
        <div className='flex gap-4 items-center'>
          <input
            onChange={() => productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow"
            })}

            checked={sort === "highToLow" ? true : false}


            type="radio" name="sort" id="" />
          <label htmlFor="ascending">descending</label>
        </div>


        <div className='flex gap-4 items-center'>
          <input
            onChange={() => productDispatch({
              type: "FILTER_BY_STOCK",

            })}

            checked={byStock}


            type="checkbox" name="" id="" />
          <label htmlFor="stock">Include out of stock</label>
        </div>

        <div className='flex gap-4 items-center'>
          <input
            onChange={() => productDispatch({
              type: "FILTER_BY_DELIVERY",

            })}

            checked={byFastDelivery}

            type="checkbox" name="" id="" />
          <label htmlFor="stock">Fast delivery only</label>
        </div>
      </div>

      <div className='flex px-4 items-center gap-2 text-center '>
        <span>Rating:</span>
        <Rating rating={byRating}
          onclick={(i) => productDispatch({
            type: "FILTER_BY_RATING",
            payload: i + 1
          })} />
      </div>

      <button 
       onClick={() => productDispatch({
        type: "CLEAR_FILTERS"
      })}
      
      className='bg-blue-600 px-4 py-4 w-full rounded-md cursor-pointer'>Clear Filters</button>


    </div>
  )
}

export default Filter