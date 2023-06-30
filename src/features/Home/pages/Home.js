import React, {useEffect, useState} from 'react';
import './home.css';
import FlowerApi from "../../../api/flowerApi";
import {useDispatch,} from "react-redux";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {addToCart} from "../cartSlice";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBBtn,
    MDBCardBody,
    MDBCardImage,
    MDBRipple,
} from "mdb-react-ui-kit";
function Home() {
    const [hotFlower, setHotFlower] = useState([]);
    const [normalFlower, setNormalFlower] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        setHotFlower([]);
        setNormalFlower([]);
        const fetchFlowers = async () => {
            try {
                const response = await FlowerApi.getAll();
                response.data.forEach((flower) => {
                    if (flower.category) {
                        setHotFlower(prevState => [...prevState, flower]);

                    } else setNormalFlower(prevState => [...prevState, flower]);

                })
            } catch (error) {
                console.log('Failed to fetch flower list: ', error);
            }
        }
        fetchFlowers();
    }, []);

    const handleAddShoppingCart = (flower) => {
        dispatch(addToCart(flower))
    }
    return (
        <div className={'container'}>
            <MDBContainer fluid className="my-5 text-center">
                <h4 className="mt-4 mb-5">
                    <strong>Hot</strong>
                </h4>

                <MDBRow>
                    {
                        hotFlower.map((item) => (
                           <React.Fragment key={item.id}>
                               <MDBCol  md="12" lg="4" className="mb-4">
                                   <MDBCard>
                                       <MDBRipple
                                           rippleColor="light"
                                           rippleTag="div"
                                           className="bg-image rounded hover-zoom"
                                       >
                                           <MDBCardImage
                                               style={{width: "100%", height: '500px' }}
                                               src={item.img}
                                               fluid
                                               className="w-100"
                                           />
                                           <a href="#!">
                                               <div className="mask">
                                                   <div className="d-flex justify-content-start align-items-end h-100">
                                                       <h5>
                                                           <span className="badge bg-primary ms-2">New</span>
                                                       </h5>
                                                   </div>
                                               </div>
                                               <div className="hover-overlay">
                                                   <div
                                                       className="mask"
                                                       style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                   ></div>
                                               </div>
                                           </a>
                                       </MDBRipple>
                                       <MDBCardBody>

                                           <h5 className="card-title mb-3">{item.name}</h5>
                                           <h6 className="mb-3">{item.price}</h6>

                                               <MDBBtn className='me-1' color='success' onClick={() => {handleAddShoppingCart(item)}}>
                                                   Mua
                                               </MDBBtn>

                                           <MDBBtn className='me-1' color='danger' >
                                               Detail
                                           </MDBBtn>
                                       </MDBCardBody>
                                   </MDBCard>
                               </MDBCol>
                           </React.Fragment>
                        ))
                    }


                </MDBRow>
            </MDBContainer>
            );

            <MDBContainer fluid className="my-5 text-center">
                <h4 className="mt-4 mb-5">
                    <strong>Our Product</strong>
                </h4>

                <MDBRow>
                    {
                        normalFlower.map((item) => (
                            <React.Fragment key={item.id}>
                                <MDBCol  md="12" lg="4" className="mb-4">
                                    <MDBCard>
                                        <MDBRipple
                                            rippleColor="light"
                                            rippleTag="div"
                                            className="bg-image rounded hover-zoom"
                                        >
                                            <MDBCardImage
                                                style={{width: "100%", height: '500px' }}
                                                src={item.img}
                                                fluid
                                                className="w-100"
                                            />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="d-flex justify-content-start align-items-end h-100">
                                                        <h5>
                                                            <span className="badge bg-primary ms-2">New</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div
                                                        className="mask"
                                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                    ></div>
                                                </div>
                                            </a>
                                        </MDBRipple>
                                        <MDBCardBody>

                                            <h5 className="card-title mb-3">{item.name}</h5>
                                            <h6 className="mb-3">{item.price}</h6>

                                            <MDBBtn className='me-1' color='success' onClick={() => {handleAddShoppingCart(item)}}>
                                                Mua
                                            </MDBBtn>

                                            <MDBBtn className='me-1' color='danger' >
                                                Detail
                                            </MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </React.Fragment>
                        ))
                    }


                </MDBRow>
            </MDBContainer>

        </div>


    );
}

export default Home;
