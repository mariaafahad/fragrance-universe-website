import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const SeeReview = () => {
    const [data, setData] = useState([])
    const [newDel, setNewDel] = useState('')
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://sleepy-reaches-16284.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setData(data))
    }, [newDel])

    console.log(newDel);
    const deleteReview = (id) => {
        fetch(`https://sleepy-reaches-16284.herokuapp.com/delete/${id}`, { method: 'DELETE' })
            .then(() =>
                setNewDel({ id }))
            .then(alert('Deleted Successfully'))

    }
    return (
        <div className="py-10 mx-20">
            <h1 className="font-bold text-4xl text-center">Clients Review</h1>

            <div className="flex justify-evenly">
                {
                    data.map(data => <div className="my-1 px-1 w-full p-3  md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 border-4 border-light-blue-500 border-opacity-25 shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer" >
                        <img alt="Placeholder" className="block  w-15 rounded-3xl" src={data.image} />
                        <h1 className="font-bold">{data.name}</h1>
                        <p>{data.review}</p>
                        {
                            user.displayName && <button className="bg-red-700 p-3" onClick={() => deleteReview(data._id)}>Delete</button>
                        }
                    </div>)
                }
            </div>
        </div>
    );
};

export default SeeReview;