import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h1>Add Product</h1>
            <form action="">
                <p>Name: </p>  <input type="text" for="name" placeholder="Name" /> <br />
                <p>Origin: </p> <input type="text" for="origin" placeholder="origin" /> <br />
                <p>By: </p>  <input type="text" for="by" placeholder="by" /> <br />
                <p>Price: </p>  <input type="text" for="price" placeholder="price" /> <br />
                <p>Image: </p>  <input type="text" for="img" placeholder="img link" /> <br />
                <button>Submit</button>


            </form>
        </div>
    );
};

export default AddProduct;