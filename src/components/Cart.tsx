import React from 'react'
import { useAppSelector, useAppDispatch } from "../store/reduxHooks";
import currencyFormatter from 'currency-formatter'
import { BsDash,BsPlus } from 'react-icons/bs';
import {FaRegTrashAlt } from 'react-icons/fa';
const Cart = () => {
  const {products,totalQuantities,totalPrice} = useAppSelector<any>(state => state.cart);
  const dispatch = useAppDispatch();
  // console.log(totalPrice);
  return (
    <div className='cart'>
       <div className='container'> 
          <h3>Your cart</h3>
          {products.length > 0 ?<>
             <div className='row'>
               <div className='col-9'> 
                  <div className='cart__heading'>
                    <div className='row'>
                       <div className='col-2'>Picture</div>
                       <div className='col-2'>Name</div>
                       <div className='col-2'>Price</div>
                       <div className='col-2'>Inc/Dec</div>
                       <div className='col-2'>Total price</div>
                       <div className='col-2'>Remove</div>
                    </div>
                  </div>
                  {products.map((product:any) => (
                    <div className='row verticalAlign' key={product.id}>
                       <div className='col-2'>
                          <div className="cart__image">
                            <img src={`/images/${product.image}`} alt="img" ></img>
                          </div>
                       </div>
                       <div className="col-2">
                         <div className="cart__name">
                            {product.name}
                         </div>
                       </div>
                       <div className="col-2">
                         <div className="cart__price">
                           {currencyFormatter.format(product.discountprice, { code: 'USD' })}
                         </div>
                       </div>
                       <div className="col-2 cart__incDec">
                            <button className="dec" onClick={()=> dispatch({type:'DEC',payload:product.id})}>-</button>
                            <button className="quntity">{product.quantity}</button>
                            <button className="inc" onClick={()=> dispatch({type:'INC',payload:product.id})} >+</button> 
                       </div>
                       <div className="col-2"> 
                         <div className="cart__total">
                            {currencyFormatter.format(product.discountprice * product.quantity, { code: 'USD' })}
                         </div>
                       </div>
                       <div className="col-2">
                          <div className="cart__remove"  onClick={()=> dispatch({type:'REMOVE',payload:product.id})}>
                          <FaRegTrashAlt/>
                          </div>
                       </div>
                    </div>
                     
                  ))}
               </div>
               <div className='col-3 summary-col'>
                  <div className="summary">
                      <div className="summary__heading">
                         Summary 
                      </div>
                      <div className="summary__details">
                        <div className="row mb-10">
                           <div className="col-6">
                              Total Item: 
                           </div>
                           <div className="col-6">
                              {totalQuantities}
                           </div>
                        </div>
                        <div className="row mb-10">
                           <div className="col-6">
                              Total Price: 
                           </div>
                           <div className="col-6">
                              {currencyFormatter.format(totalPrice, { code: 'USD' })}
                           </div>
                        </div>
                        <button type='button' className='checkout'>checkout</button>
                      </div>
                  </div>
               </div>
             </div>
          
          
          </>: 'Your cart is empty' }
       </div>
    </div>
  )
}

export default Cart
