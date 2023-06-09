import React, { useEffect, useState } from 'react';

function ProductDetail({ match }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Lấy thông tin sản phẩm từ API hoặc dữ liệu đã có sẵn
        const productId = match.params.id; // Giả sử bạn có thể lấy ID sản phẩm từ URL params
        fetch(`https://647066d33de51400f7243134.mockapi.io/flower/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [match.params.id]);

    if (!product) {
        return <div>Loading...</div>; // Hiển thị một thông báo hoặc spinner khi đang tải dữ liệu sản phẩm
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.avatar} alt={product.name} />
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            {/* Hiển thị các thông tin khác về sản phẩm */}
        </div>
    );
}

export default ProductDetail;
