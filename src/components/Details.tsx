import React , {useState} from 'react'
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/reduxHooks";
import {Link} from "react-router-dom"
import currencyFormatter from 'currency-formatter'

const Details = () => {
 const id = useParams();
 const dispatch = useAppDispatch();
 const prod_id = id.id;
 const {products} = useAppSelector(state => state.products);
 const product = products.find(x => x['id'] === Number(prod_id));
 const [quantity, setQuantity] = useState(1);
  return (
    <div>
    <div className='container mt-100'>
      <div className='row'>
      <div className='col-6'>
        <div className='details_image'>
            <img src={`/images/${product?.image}`} alt='img' ></img>
        </div>
      </div>
      <div className='col-6'>
         <div className='details_name'>
            {product?.name}
         </div>
         <div className='product__price'>
           M.R.P <span className='actual_price'> ${product?.price}</span>
         </div>
         <div>
             <span>{product?.discount}%</span>
         </div>
         <div className='details__discount__price'>
           Discount Price : ${product?.discountprice}
         </div>
         <div>
            {product?.desc}
         </div>
          <div className='row inc__dec'>
                <div className='col-3'>
                <button className="dec" onClick={()=>{if(quantity>1){setQuantity(quantity - 1)}}}>-</button>
                <button className="quntity">{quantity}</button>
                <button className="inc" onClick={()=> setQuantity(quantity + 1)}>+</button>
                </div>
                <div className='col-2'>
                <button className='add_card'>Add to card</button>
            </div>
        </div> 
      </div>

      </div>
    </div>
    
  </div>
    
  )
}

export default Details
