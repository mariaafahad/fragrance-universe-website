import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Explore from '../Explore';

const Explores = () => {
    const { products } = useAuth()

    return (
        <div>
            <h2 className="text-4xl my-10 text-yellow-900 text-center">Our Products</h2>
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2  text-center lg:mx-52 md:mx-48">
                {
                    products.map(allProduct => <Explore
                        key={allProduct._id}
                        products={allProduct}
                    ></Explore>)
                }

            </div >

        </div>
    );
};

export default Explores;