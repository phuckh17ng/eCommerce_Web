import React, { useContext } from 'react'
import './TakeAway.css'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Đặt Hàng Thành Công!" );
const TakeAway = ({click}) => {
    return (
    <div className='user'>

      <form>
        <label>Tên người nhận:</label>
          <input 
            type='text'
            required
          />
        <label>Địa chỉ/ Số bàn:</label>
          <input 
            type='text'
            required
          />
        <label>Số điện thoại:</label>
          <input 
            type='text'
            required
          />
        <button className='pay' onClick={notify} type="reset"> 
          Thanh Toán
        </button>  
        <ToastContainer/> 
      </form>
      </div>
  )

}

export default TakeAway