import React, { useEffect, useState } from 'react';
import '../assets/css/home.css';

function Home() {
    const [flowers, setFlowers] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://647066d33de51400f7243134.mockapi.io/flower')
            .then((response) => response.json())
            .then((data) => {
                setFlowers(data);
                setCategories(getUniqueCategories(data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const getUniqueCategories = (flowersData) => {
        const uniqueCategories = flowersData.reduce((result, flower) => {
            if (!result.includes(flower.category)) {
                result.push(flower.category);
            }
            return result;
        }, []);
        return uniqueCategories;
    };

    const highlightedCategories = [''];
    const oldCategories = categories.filter(
        (category) => !highlightedCategories.includes(category)
    );

    return (
        <div>
            {highlightedCategories.map((category) => (
                <div key={category} className="category">
                    <div className="product-grid">
                        {flowers
                            .filter((flower) => flower.category === category)
                            .map((flower) => (
                                <div key={flower.id} className="product-item">
                                    <img
                                        src={flower.avatar}
                                        alt={flower.name}
                                        className="product-image"
                                    />
                                    <p className="product-name">{flower.name}</p>
                                    <p className="product-price">{flower.price}</p>
                                </div>
                            ))}
                    </div>
                </div>
            ))}

            {oldCategories.map((category) => (
                <div key={category} className="category">
                    <div className="pr_grid">
                        {flowers
                            .filter((flower) => flower.category === category)
                            .map((flower) => (
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
                </div>
            ))}
        </div>
    );
}

export default Home;
