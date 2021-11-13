import React from 'react';
import { Link, } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, img } = product;

    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 border-4 border-light-blue-500 border-opacity-25 shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer" >
            <img alt="Placeholder" class="block h-auto w-full" src={img}></img>
            <h1>Name:{name}</h1>
            <h5>Price:{price}</h5>
            <Link to='/login'>
                <button className="transition duration-500 ease-in-outborder-2 border-yellow-100 rounded-full py-2 px-2 my-2 hover:border-gray-500 hover:bg-red-700 hover:text-white transform hover:-translate-y-1 hover:scale-110 ...  ">Purchase now</button>
            </Link>
        </div>
    );
};


export default Product;