import React from 'react';

const Gallery = () => {
    return (
        <div>

            <div class="w-full bg-gray-800">
                <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div class="text-center pb-12">
                        <h2 class="text-base font-bold text-indigo-600">
                            We have the best Perfumein the market
                        </h2>
                        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                            Check our Men's & Women's Collections
                        </h1>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row transform transition duration-500 hover:scale-110">
                            <div class="w-full h-80">
                                <img
                                    class="object-center object-cover w-full h-full"
                                    src="https://i.ibb.co/b7VGR4Z/man-1.jpg" alt="" />
                            </div>
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row transform transition duration-500 hover:scale-110">
                            <div class="w-full h-80">
                                <img
                                    class="object-center object-cover w-full h-full"
                                    src="https://i.ibb.co/nnXF9S2/man-2.jpg" alt="" />
                            </div>
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row transform transition duration-500 hover:scale-110">
                            <div class="w-full h-80">
                                <img
                                    class="object-center object-cover w-full h-full"
                                    src="https://i.ibb.co/kQFxzLr/man-3.jpg" alt="" />
                            </div>
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row transform transition duration-500 hover:scale-110">
                            <div class="w-full h-80">
                                <img
                                    class="object-center object-cover w-full h-full"
                                    src="https://i.ibb.co/bQSSqqD/man-4.jpg" alt="" />
                            </div>
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row transform transition duration-500 hover:scale-110">
                            <div class="w-full h-80">
                                <img
                                    class="object-center object-cover w-full h-full"
                                    src="https://i.ibb.co/rcK9JDL/women-1.jpg" alt="" />
                            </div>
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row transform transition duration-500 hover:scale-110">
                            <div class="w-full h-80">
                                <img
                                    class="object-center object-cover w-full h-full"
                                    src="https://i.ibb.co/bLp8dJq/women-2.jpg" alt="" />
                            </div>
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row transform transition duration-500 hover:scale-110">
                            <div class="w-full h-80">
                                <img
                                    class="object-center object-cover w-full h-full"
                                    src="https://i.ibb.co/ry4tgLd/women-3.jpg" alt="" />
                            </div>
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row transform transition duration-500 hover:scale-110">
                            <div class="w-full h-80">
                                <img
                                    class="object-center object-cover w-full h-full"
                                    src="https://i.ibb.co/WGyM4Fy/women-4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;