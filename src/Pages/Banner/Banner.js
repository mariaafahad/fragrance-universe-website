import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <section className="w-full h-3/4 background bg-no-repeat	bg-cover bg-fixed">
                <div className=" w-full h-screen  flex flex-col justify-center text-left md:align-top pl-10">
                    <h1 className="md:text-8xl text-yellow-700 font-bold animate-pulse" style={{ marginTop: "-800px" }}>Fragrance Universe</h1>

                </div>
            </section>
        </div>
    );
};

export default Banner;