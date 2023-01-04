import React from 'react'
import produce from "immer";
const  initState = {
    products : [],
    totalPrice: 0,
    totalQuantities: 0
}
const CartReducer = (state = initState,action:any ) => {
        let findPro:any;
        let index:any;
        switch(action.type){
            case "ADD_TO_CART":
           //console.log(action.payload);
            const {product,quantity} = action.payload;
            const check = state.products.find(prod => prod['id'] === product.id);
           // console.log(state.products);
            if(check){
               return state
            } 
            else{
                 const total_price = state.totalPrice;
                 const total_quantities = state.totalQuantities
                const Tprice =  total_price  + product.discountprice * quantity;
                 const Tquantities = total_quantities + quantity;
                 product.quantity = quantity;

                 state = Object.assign({}, state, { totalPrice: Tprice });
                 state = Object.assign({}, state, { totalQuantities: Tquantities });
                return{
                    ...state, 
                    products : [...state.products,product],
                }
            }
            case 'INC':
                findPro =  state.products.find(product => product['id'] === action.payload);
                index = state.products.findIndex(product => product['id'] === action.payload);
                let findquantity = findPro?.quantity + 1;
                findPro.quantity = findquantity
               // state.products[index] = findPro
                return{
                    ...state,
                    totalPrice: state.totalPrice + findPro.discountPrice , totalQuantities : state.totalQuantities+1
                }
            case 'DEC':
                findPro =  state.products.find(product => product['id'] === action.payload);
                index = state.products.findIndex(product => product['id'] === action.payload);
                if(findPro.quantity > 1){
                    let findquantity = findPro?.quantity - 1;
                    findPro.quantity = findquantity
                    // state.products[index] = findPro
                    return{
                        ...state,
                        totalPrice: state.totalPrice - findPro.discountPrice , totalQuantities : state.totalQuantities - 1
                    }
                }
                else{
                    return state;
                }
               break;
            default:
            return state;
    
        }





    
    
}

export default CartReducer

