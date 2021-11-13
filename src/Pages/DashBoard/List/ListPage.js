import React from 'react';

const ListPage = ({ list }) => {
    const { name, price } = list;
    return (
        <div>
            <table class="table-auto w-100% border-2">

                <tr class="table-row">
                    <th>Name</th>
                    <th>Price</th>

                </tr>

                <tbody>
                    <tr class="table-row">
                        <td>${list.name}</td>
                        <br />
                        <br />
                        <br />
                        <br />
                        <td>${list.price}</td>

                    </tr>

                </tbody>
                <button class="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white" >Delete</button>
            </table>
        </div>
    );
};

export default ListPage;