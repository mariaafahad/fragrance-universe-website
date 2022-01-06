import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://sleepy-reaches-16284.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (


        <div>
            <h2 className="text-4xl my-10 text-yellow-900 text-center">Our Products</h2>
            <div className="container max-w-5xl m-8 flex flex-wrap mx-auto">
                {
                    products.slice(0, 6).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }

            </div >

        </div>

    );
};

export default Products;