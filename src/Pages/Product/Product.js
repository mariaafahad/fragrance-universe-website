import React from 'react';
import { Link, } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, img } = product;

    return (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">

            <div className="relative pb-60 overflow-hidden">
                <img alt="Placeholder" class="absolute inset-0 h-full w-full object-cover transform hover:scale-110 transition duration-500" src={img}></img>
                <div className="px-4 py-8">
                    <h1 className="px-2 py-5 leading-none text-slate-900 font-semibold uppercase tracking-wide text-2xl text-gray-700">Name:{name}</h1>
                    <h5 className="px-2 py-5 leading-none text-slate-900 font-semibold uppercase tracking-wide text-2xl text-gray-700">Price:{price}</h5>
                    <Link to='/login'>
                        <button className="transition duration-500 ease-in-outborder-2 border-yellow-100 rounded-full py-2 px-2 my-2 hover:border-gray-500 hover:bg-red-700 hover:text-gray-600 transform hover:-translate-y-1 hover:scale-110 ...  ">Purchase now</button>
                    </Link>
                </div>
            </div>

        </div>


    );
};


export default Product;