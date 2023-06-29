import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './product.css';

function ProductsList() {
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

    return (
        <div>
            {categories.map((category) => (
                <div key={category} className="category">
                    <h2>{category}</h2>
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
                                    <Link to={`/products/${flower.id}`} className="product-button">
                                        Chi tiết
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductsList;
