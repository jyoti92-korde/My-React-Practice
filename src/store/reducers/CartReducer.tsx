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
            const {product,quantity} = action.payload;
            const check = state.products.find(prod => prod['id'] === product.id);
            if(check){
               return state
            } 
            else{
                    const total_price = state.totalPrice;
                    const total_quantities = state.totalQuantities
                    const Tprice =  total_price  + product.discountprice * quantity;
                    const Tquantities = total_quantities + quantity;
                    product.quantity = quantity;
                    return{
                        ...state, 
                        products : [...state.products,product],
                        totalPrice: Tprice,
                        totalQuantities: Tquantities
                    }
                
            }
            case 'INC':
                findPro =  state.products.find(product => product['id'] === action.payload);
                index = state.products.findIndex(product => product['id'] === action.payload);
                let findquantity = findPro?.quantity + 1;
                findPro.quantity = findquantity;
               // state.products[index] = findPro
                return{
                    ...state,
                    totalPrice: state.totalPrice + findPro.discountprice , totalQuantities : state.totalQuantities + 1
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
                        totalPrice: state.totalPrice - findPro.discountprice , totalQuantities : state.totalQuantities - 1
                    }
                }
                else{
                    return state;
                }
                case 'REMOVE':
                    findPro =  state.products.find(product => product['id'] === action.payload);
                    const filtered = state.products.filter(product => product['id'] !== action.payload)
                    return{
                        ...state,
                        products : filtered,
                        totalPrice: state.totalPrice - findPro.discountprice * findPro.quantity, 
                        totalQuantities : state.totalQuantities - findPro.quantity,
                    }
               break;
            default:
            return state;
    
        }
}
// const CartReducer = produce((draft, action) => {
//         let findPro:any;
//         let index:any;
//         switch(action.type){
//             case "ADD_TO_CART":
//             const {product,quantity} = action.payload;
//             const check = draft.products.find((prod:any) => prod['id'] === product.id);
//             if(check){
//                 return draft
//             } 
//             else{
//                      const total_price = draft.totalPrice;
//                      const total_quantities = draft.totalQuantities
//                     const Tprice =  total_price  + product.discountprice * quantity;
//                      const Tquantities = total_quantities + quantity;
//                      product.quantity = quantity;
//                     return{
//                         ...draft, 
//                         products : [...draft.products,product],
//                         totalPrice:Tprice,
//                         totalQuantities:Tquantities
//                     }
//             }
//             break;
//             default:
//             return draft;
    
//         }



// })

export default CartReducer

