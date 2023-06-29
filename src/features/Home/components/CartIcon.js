import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import './cart.css'

function CartIcon() {


    // quantity = sessionStorage.getItem('item_cart').length
    return (
        <>
            <div className="shopping-cart">
                <FontAwesomeIcon className={'cart'} icon={faCartShopping} />
                <div className="number">
                    <p>1</p>
                </div>
            </div>
        </>
    )
}

export default CartIcon