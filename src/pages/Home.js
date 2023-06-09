import React, {useEffect, useState} from 'react';
import '../assets/css/home.css';
import FlowerApi from "../api/flowerApi";

function Home() {
    const [hotFlower, setHotFlower] = useState([]);
    const [normalFlower, setNormalFlower] = useState([]);


    useEffect(() => {
        setHotFlower([]);
        setNormalFlower([]);
        const fetchFlowers = async () => {
            try {
                const reponse = await FlowerApi.getAll();
                reponse.forEach((flower) => {
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

    return (
        <div>

            <h1>HOT FLOWER</h1>
            <div className="pr_grid">
                {hotFlower.map((flower) => (
                    <div key={flower.id} className="pr_item">
                        <img
                            src={flower.avatar}
                            alt={flower.name}
                            className="Pr_image"
                        />
                        <p className="product-name">{flower.name}</p>
                        <p className="product-price">{flower.price}</p>
                        <button className="button_mua">Mua</button>
                        <button className="button_detail">Chi tiết</button>
                    </div>
                ))}
            </div>
            <h1>FLOWER</h1>
            <div className="pr_grid">
                {normalFlower.map((item) => (
                    <div key={item.id} className="pr_item">
                        <img
                            src={item.avatar}
                            alt={item.name}
                            className="Pr_image"
                        />
                        <p className="product-name">{item.name}</p>
                        <p className="product-price">{item.price}</p>
                        <button className="button_mua">Mua</button>
                        <button className="button_detail">Chi tiết</button>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default Home;
