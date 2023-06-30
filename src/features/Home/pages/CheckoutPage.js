import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decreaseCart, getTotals, removeFromCart} from "../cartSlice";
import {Link } from "react-router-dom";

export default function PaymentMethods() {
    const cartList = useSelector(state => state.carts.cartItems);
    const totalQuantity = useSelector(state => state.carts.cartTotalQuantity)
    const totalAmount = useSelector(state => state.carts.cartTotalAmount)
    console.log(totalAmount);
    const dispatch = useDispatch();
    const handleRemoveCart = (item) => {
        dispatch(removeFromCart(item))
    }
    const handleDecreaseCart = (item) => {
        dispatch(decreaseCart(item))
    }
    const handleIncreaseCart = (item) => {
        dispatch(addToCart(item))
    }
    useEffect(() => {
        dispatch(getTotals())

    },[cartList, dispatch]);
    return (
        <section className="h-100 gradient-custom">
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center my-4">

                    <MDBCol md="8">
                        <MDBCard className="mb-4">
                            <MDBCardHeader className="py-3">
                                <MDBTypography tag="h5" className="mb-0">
                                    Cart - {totalQuantity} items
                                </MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                {
                                    cartList.map((item) => (
                                        <React.Fragment key={item.id}>
                                            <MDBRow>
                                                <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                                    <MDBRipple rippleTag="div" rippleColor="light"
                                                               className="bg-image rounded hover-zoom hover-overlay">
                                                        <img
                                                            src={item.img}
                                                            className="w-100"/>
                                                        <a href="#!">
                                                            <div className="mask"
                                                                 style={{backgroundColor: "rgba(251, 251, 251, 0.2)",}}>
                                                            </div>
                                                        </a>
                                                    </MDBRipple>
                                                </MDBCol>

                                                <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                                    <p>
                                                        <strong>{item.name}</strong>
                                                    </p>
                                                    <p>{item.price}</p>
                                                    <p>{item.des}</p>
                                                    <div onClick={() => {
                                                        handleRemoveCart(item)
                                                    }}>
                                                        <MDBTooltip wrapperProps={{size: "sm"}} wrapperClass="me-1 mb-2"
                                                                    title="Remove item">
                                                            <MDBIcon fas icon="trash"/>
                                                        </MDBTooltip>
                                                    </div>
                                                </MDBCol>
                                                <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                                                    <div className="d-flex mb-4" style={{maxWidth: "300px"}}>

                                                        <div onClick={() => {
                                                            handleDecreaseCart(item)
                                                        }}>
                                                            <MDBBtn className="px-3 me-2">
                                                                <MDBIcon fas icon="minus"/>
                                                            </MDBBtn>
                                                        </div>

                                                        <MDBInput disabled value={item.cartItemQuantity} min={0}
                                                                  label="Quantity"/>
                                                        <div onClick={() => {
                                                            handleIncreaseCart(item)
                                                        }}>
                                                            <MDBBtn className="px-3 ms-2">
                                                                <MDBIcon fas icon="plus"/>
                                                            </MDBBtn>
                                                        </div>
                                                    </div>

                                                    <p className="text-start text-md-center">
                                                        <strong>{item.price * item.cartItemQuantity}</strong>
                                                    </p>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr className="my-4"/>
                                        </React.Fragment>
                                    ))
                                }

                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <p>
                                    <strong>Expected shipping delivery</strong>
                                </p>
                                <p className="mb-0">12.10.2020 - 14.10.2020</p>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody>
                                <p>
                                    <strong>We accept</strong>
                                </p>
                                <MDBCardImage className="me-2" width="45px"
                                              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                              alt="Visa"/>
                                <MDBCardImage className="me-2" width="45px"
                                              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                              alt="American Express"/>
                                <MDBCardImage className="me-2" width="45px"
                                              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                              alt="Mastercard"/>
                                <MDBCardImage className="me-2" width="45px"
                                              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                              alt="PayPal acceptance mark"/>
                            </MDBCardBody>

                        </MDBCard>
                        <div><Link to={'/'}> <MDBBtn className={'mt-2'}>Quay ve trang chu</MDBBtn> </Link></div>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mb-4">
                            <MDBCardHeader>
                                <MDBTypography tag="h5" className="mb-0">
                                    Summary
                                </MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <MDBListGroup>
                                    <MDBListGroupItem
                                        className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>{totalAmount}</span>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem
                                        className="d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>free</span>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem
                                        className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span>
                  <strong>{totalAmount}</strong>
                </span>
                                    </MDBListGroupItem>
                                </MDBListGroup>

                                <MDBBtn block size="lg">
                                    Go to checkout
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}