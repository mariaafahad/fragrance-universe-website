import React from 'react';
import { Link } from 'react-router-dom';

const Explore = ({ products }) => {
    const { _id, img, name, origin, by, price } = products;



    return (
        <>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 border-4 border-light-blue-500 border-opacity-25 shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer" >
                <img alt="Placeholder" class="block h-auto w-full" src={img}></img>
                <h1>Name:{name}</h1>
                <h3>Origin:{origin}</h3>
                <h5>By:{by}</h5>
                <h5>Price:{price}</h5>

                <Link to={`/parchase/${_id}`}>
                    <button
                        className="border-2 border-yellow-300 rounded-full py-2 px-2 my-2 hover:border-gray-500 hover:bg-red-700 hover:text-white  ">Purchase now</button>
                </Link>



            </div>



        </>


    );
};

export default Explore;