import React from 'react'
import { useAppSelector, useAppDispatch } from "../store/reduxHooks";
import currencyFormatter from 'currency-formatter'
import { BsDash,BsPlus,BsReverseBackspaceReverse } from 'react-icons/bs';
const Cart = () => {
  const {products} = useAppSelector<any>(state => state.cart);
  const dispatch = useAppDispatch();
   //console.log(products);
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
                            <img src={`/images/${product.image}`} alt="img"></img>
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
                       <div className="col-2">
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
                          <div className="cart__remove">
                          <BsReverseBackspaceReverse/>
                          </div>
                       </div>
                    </div>
                     
                  ))}
               </div>
               <div className='col-3'>
                  Summary
               </div>
             </div>
          
          
          </>: 'Your cart is empty' }
       </div>
    </div>
  )
}

export default Cart
