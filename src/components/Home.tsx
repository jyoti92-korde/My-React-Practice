import React from 'react'
import Header from './Header'
import { useAppSelector, useAppDispatch } from "../store/reduxHooks";
import currencyFormatter from 'currency-formatter'
import { privateDecrypt } from 'crypto';
import { useState } from 'react';
import {Link} from "react-router-dom"
const Home = () => {
  const dispatch = useAppDispatch();
  const {products} = useAppSelector(state => state.products);
  // const {totalQuantities} = useAppSelector(state => state.cart);
  const [cart, setCart] = useState<any>([]);
  const [prod_id, setProdId] = useState(0);
  
  const newCart : any [] = [...cart];

  const handleDeleteCart = (id:any) => {
    //setProdId(id);
    let quntity : HTMLElement | null = document.getElementById("quntity_"+id);
    if(newCart.some((i)=> i['id']=== id)){
       let itemIndex =newCart.findIndex((i)=> i['id']=== id);
     
      newCart[itemIndex]["count"]= cart[itemIndex]["count"]- 1;

      if(quntity !=  null){
        quntity.innerHTML = '<span>'+newCart[itemIndex]["count"]+'</span>';
      }
 
    }else {
      newCart.push({id:id,count:1});

      if(quntity !=  null){
        quntity.innerHTML = '<span>1</span>';
      }
    }
    setCart(newCart);
  };
  const handleAddCart = (id:any) => {
    setProdId(id);
    let quntity : HTMLElement | null = document.getElementById("quntity_"+id);
    if(newCart.some((i)=> i['id']=== id)){
       let itemIndex =newCart.findIndex((i)=> i['id']=== id);
     
      newCart[itemIndex]["count"]= cart[itemIndex]["count"]+ 1;

      if(quntity !=  null){
        quntity.innerHTML = '<span>'+newCart[itemIndex]["count"]+'</span>';
      }

    }else {
      newCart.push({id:id,count:1});

      if(quntity !=  null){
        quntity.innerHTML = '<span>1</span>';
      }
    }
    setCart(newCart);
  };

  let qunatities: HTMLElement | null  = document.getElementById("quntity_"+prod_id);
  let quantity:number = 0;
  if(qunatities != null){
    quantity = parseInt(qunatities.innerText);
  }
 
  const add_to_cart = (addproduct:any) =>{
    const filteredObject = newCart.filter((element) => {
      return element.id === addproduct?.id;
    });
    if(filteredObject?.length) {
      dispatch({type:'ADD_TO_CART',payload:{product:addproduct,quantity:filteredObject[0]?.count}})
    }
    else{
      dispatch({type:'ADD_TO_CART',payload:{product:addproduct,quantity:1}})
    }
  }

   return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          {products.map((product:any) => (
            <div className='col-3 m-5' key={product['id']}>
              <div className='product'>
              {/* <Link to={"/details/"+product.id}> */}
                <div className='product__img' > 
                  <img src={`/images/${product.image}`} alt="image_name"></img>
                </div>
                {/* </Link> */}
                <div className='product__name'>
                  {product.name}
                </div>
                <div className='row prod_price'>
                  <div className='col-6'> 
                    <div className='product__price'>
                      <span className='actual_price'>{currencyFormatter.format(product.price, { code: 'USD' })}</span> <span>{product.discount}%</span>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='product__discount__price'>
                      {currencyFormatter. format(product.discountprice, { code: 'USD' })}
                    </div>
                  </div>
                </div>
                <div className='row inc__dec'>
                  <div className='col-6'>
                    <button className="dec" onClick={()=>handleDeleteCart(product.id)} >-</button>
                    <button className="quntity" id={"quntity_"+product.id}><span id={"span_"+product.id}>0</span></button>
                     <button className="inc" onClick={()=>handleAddCart(product.id)}>+</button> 
                  </div>
                  <div className='col-6'>
                    <button className='add_card' onClick={()=>add_to_cart(product)}>
                        Add to cart
                         </button>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
      
    </div>
  )
}

export default Home
 