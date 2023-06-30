import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import './cart.css'
import {useDispatch, useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getTotals} from "../cartSlice";

function CartIcon() {
    const navigate = useNavigate();
    const totalQuantity = useSelector(state => state.carts.cartTotalQuantity)
    const cart = useSelector(state => state.carts.cartItems)
    const handleRedirect = () => {
      navigate('/cart');
    }
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getTotals())
    },[dispatch, cart])
    return (
        <>
            <div onClick={handleRedirect} className="shopping-cart" >
                <FontAwesomeIcon className={'cart'} icon={faCartShopping} />
                <div className="number">
                    <p>{totalQuantity}</p>
                </div>

            </div>
        </>
    )
}

export default CartIcon