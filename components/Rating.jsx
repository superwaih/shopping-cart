import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({rating, onclick}) => {
  return (
    <>
    <div className="flex">
    {[...Array(5)].map((_, i) => (
        <span className='' key={i} onClick={() => onclick(i)}>
            {rating > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
    ))}
    </div>
    </>
  )
}

export default Rating