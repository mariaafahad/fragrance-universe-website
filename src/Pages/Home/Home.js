import React from 'react';
import Footer from '../../Shared/Footer/Footer';

import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';
import Review from '../Review/Review';
import SeeReview from '../Review/SeeReview';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Products></Products>
            <Gallery></Gallery>
            <SeeReview />
            <Review></Review>

            <Footer></Footer>

        </div>
    );
};

export default Home;