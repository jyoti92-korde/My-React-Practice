import React from 'react'
import {Link} from "react-router-dom"
import { BsFillBagFill } from "react-icons/bs";
import { useAppSelector } from "../store/reduxHooks";
import Home from "./Home";
const Nav = () => {
  const {totalQuantities} = useAppSelector(state => state.cart);
  return (
    <div className='nav'>
        <div className="container">
            <div className="nav__container">
                <div className="nav__left">
                <Link to="/"><img src='/images/logo.webp' alt="logo"></img></Link>
                </div>
                <div className="nav__right">
                    <Link to={"/Cart"}>
                       <div className='basket'>
                        <BsFillBagFill className='cart-icon'/>
                        <span>{totalQuantities}</span>
                       </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav


