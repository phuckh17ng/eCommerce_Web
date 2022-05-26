import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

const Product = ({imageUrl,name,price,description,productId}) => {
  return (
    <div className='product'>
        <img src={imageUrl}
        atl={name}></img>
        <div className='product__info'></div>
        <p className='info__name'>{name}</p>
        <p className='info__description'>{description.substring(0,100)}...</p>
        <p className='info__price'>{price} VND</p>
        <Link to={`/product/${productId}`}className='info__button'>Chi tiết</Link>

    </div>
  )
}

export default Product