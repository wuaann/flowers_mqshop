import React, {useEffect, useState} from 'react';
import './home.css';
import FlowerApi from "../../../api/flowerApi";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../cartSlice";

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
    console.log(useSelector(state => state.carts.cartItems))
    const handleAddShoppingCart = (flower) => {
        dispatch(addToCart(flower))
    }
    return (
        <div className={'container'}>

            <h1>HOT FLOWER</h1>
            <div className="pr_grid">
                {hotFlower.map((flower) => (
                    <div key={flower.id} className="pr_item">
                        <img
                            src={flower.img}
                            alt={flower.name}
                            className="Pr_image"
                        />
                        <p className="product-name">{flower.name}</p>
                        <p className="product-price">{flower.price}</p>
                        <button className="button_mua" onClick={()  => {
                            handleAddShoppingCart(flower);
                        }}>Mua</button>
                        <button className="button_detail">Chi tiết</button>
                    </div>
                ))}
            </div>
            <h1>FLOWER</h1>
            <div className="pr_grid">
                {normalFlower.map((item) => (
                    <div key={item.id} className="pr_item">
                        <img
                            src={item.img}
                            alt={item.name}
                            className="Pr_image"
                        />
                        <p className="product-name">{item.name}</p>
                        <p className="product-price">{item.price}</p>
                        <button className="button_mua" >Mua</button>
                        <button className="button_detail">Chi tiết</button>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default Home;
