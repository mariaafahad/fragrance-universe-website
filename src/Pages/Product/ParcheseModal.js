import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';

import useAuth from '../../Hooks/useAuth';

const ParcheseModal = () => {
    const { products } = useAuth();
    const { id } = useParams()
    const { name, price, _id } = products;
    const history = useHistory();

    // To get the specific product
    const selectedProduct = products.filter(product => product._id === id);
    console.log(selectedProduct);
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email }
    const [info, setInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInformation = { ...info };
        newInformation[field] = value;
        console.log(newInformation);
        setInfo(newInformation);
    }


    const handleSubmit = e => {
        // collect data
        const information = {
            ...info,
            name,
            price


        }


        // send to the server
        fetch('http://localhost:5000/parchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(information)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Purchased successfully')
                    history.push('/dashboard')
                }
            });

        e.preventDefault();
    }
    return (
        <div class="max-w-2xl p-6 bg-white">
            <div class="flex items-center justify-between">

                <h1>Parchase Details</h1>
            </div>
            <div class="mt-4">
                <form
                    onSubmit={handleSubmit}
                >
                    <div class="mb-5">
                        <label for="name" class="block font-bold text-gray-600">Name</label>
                        <input
                            onBlur={handleOnBlur}
                            type="text"
                            name="name"
                            defaultValue={user.displayName}
                            class="w-full p-2 border border-gray-300 rounded-l shadow focus:outline-none focus:ring-2 focus:ring-purple-600"

                        />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block font-bold text-gray-600">Email</label>
                        <input
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            type="text"
                            name="email"
                            class="w-full p-2 border border-gray-300 rounded-l shadow"
                        />

                    </div>
                    <div class="mb-5">
                        <label for="email" class="block font-bold text-gray-600">Product Name</label>
                        <input
                            onBlur={handleOnBlur}
                            defaultValue={selectedProduct[0].name}
                            type="text"
                            name="email"
                            class="w-full p-2 border border-gray-300 rounded-l shadow"
                            placeholder="" />

                    </div>
                    <div class="mb-5">
                        <label for="email" class="block font-bold text-gray-600">Price</label>
                        <input
                            onBlur={handleOnBlur}
                            defaultValue={selectedProduct[0].price}
                            type="text"
                            name="email"
                            class="w-full p-2 border border-gray-300 rounded-l shadow"
                            placeholder="" />

                    </div>
                    <button type="submit"
                        class="block w-full p-3 font-bold text-white bg-blue-500 rounded-l">Submit</button>
                </form>
            </div>
        </div>


    );
};

export default ParcheseModal;