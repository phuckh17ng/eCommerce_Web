import './ProductScreen.css';
import React from 'react';
import { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import {getProductDetails} from '../redux/actions/productActions'
import { addToCart } from "../redux/actions/cartActions";


  const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
  const {id}=useParams();
  const history=useNavigate();

  console.log((id));
  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch,  product]);
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history(`/cart`);
  };

  return (
    <div className="productscreen">
      {loading ?(<h2>Loading...</h2>):error?<h2>{error}</h2>:(
        <>
        <div className='productscreen__left'>
        <div className='left__image'>
        <img src={product.imageUrl}
        atl={product.name}></img>
        </div>
        <div className='left__info'>
          <p className='left__name'>{product.name}</p>
          <p>Giá: {product.price} VND</p>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="productscreen__right">
            <div className="right__info">
              <p>
                Giá:
                <span>{product.price} VND</span>
              </p>
              <p>
                Tình Trạng:
                <span>
                  {product.countInStock > 0 ? "Còn Hàng" : "Hết Hàng"}
                </span>
              </p>
              <p>
                Số Lượng
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Thêm Vào Giỏ Hàng
                </button>
              </p>
            </div>
          </div>
      </>
      )} 
    </div>
  )
}

export default ProductScreen