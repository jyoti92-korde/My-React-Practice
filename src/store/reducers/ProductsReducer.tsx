import React from 'react'
const  initState = {
    products : [
        {id:1,name:'Home decor',image:'1.jpg',price:500,discount:2,discountprice:500 - 2/100*500,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {id:2,name:'Women Stylish bag',image:'2.jpg',price:550,discount:10,discountprice:550 - 10/100*550 ,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {id:3,name:'Men black helmet',image:'3.jpg',price:750,discount:5,discountprice:750 - 5/100*750,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {id:4,name:'Women stylish hoody',image:'4.jpg',price:650,discount:12,discountprice:650 - 12/100*650,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {id:5,name:'Men casual shirt',image:'5.webp',price:400,discount:15,discountprice:400 - 15/100*400,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {id:6,name:'Mens shoes',image:'6.webp',price:700,discount:19,discountprice:700 - 19/100*700,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {id:7,name:'Baby girl dress',image:'7.webp',price:575,discount:9,discountprice:575 - 9/100*575,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {id:8,name:'Men stylish hoody',image:'8.jpg',price:675,discount:20,discountprice:675 - 20/100*675,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {id:9,name:'T-shirt for girls',image:'9.jpg',price:499,discount:18,discountprice:499 - 18/100*499,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {id:10,name:'Travelling bag with wheels',image:'10.jpg',price:999,discount:14,discountprice:999 - 14/100*999,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {id:11,name:'Watch for men',image:'11.jpg',price:799,discount:11,discountprice:799 - 11/100*799,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {id:12,name:'Watch for women',image:'12.jpg',price:899,discount:13,discountprice:899 - 13/100*899,quantity:0,desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
    ],
    //product:{}
}
//const product = {}
const ProductsReducer = (state = initState,action:any ) => {
    switch(action.type){
        // case "PRODUCT":
        // return{...state,product: state.products.find(product=> product['id'] === parseInt(action.id))}
        default:
        return state;

    }
}

export default ProductsReducer
