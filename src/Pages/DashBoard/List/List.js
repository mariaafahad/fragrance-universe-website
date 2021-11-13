import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import ListPage from './ListPage';

const List = () => {
    const { user } = useAuth();
    const [lists, setLists] = useState([])

    useEffect(() => {
        const url = `https://sleepy-reaches-16284.herokuapp.com/parchase?email=${user.email}`
        fetch(url)
            .then(res => res.json())

            .then(data => setLists(data));
    }, [])

    return (
        <div>
            <h1>Parcahse count:{lists.length}</h1>



            {lists.map(list =>

                <ListPage

                    list={list}


                ></ListPage>
            )
            }
            {/* <ListPage></ListPage> */}






        </div >

    );
};

export default List;