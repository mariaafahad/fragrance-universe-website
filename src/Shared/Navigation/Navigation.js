import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
    const [showNav, setShowNav] = useState(false)
    const { user, logout } = useAuth();
    return (
        <div>
            <div className="flex justify-between align-middle bg-gray-800 text-gray-200  px-2">
                <div className="hidden md:flex space-x-1 items-center ml-20">

                    <Link to="/home"
                        className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300 hover:bg-black"
                    >Home</Link>
                    <Link to="/explore"
                        className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300 hover:bg-black"
                    >Explore</Link>
                    <Link to="/about"
                        className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300 hover:bg-black"
                    >About Us</Link>
                    {
                        user?.email ?
                            <>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <button color="inherit">Dashboard</button>
                                </NavLink>

                                <button onClick={logout} color="inherit">Logout</button>
                            </>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <button color="inherit">Login</button>
                            </NavLink>
                    }



                </div>
                <div class="md:hidden lg:hidden flex items-center">
                    <button class="outline-none mobile-menu-button" onClick={() => setShowNav(!showNav)}>
                        <svg
                            className="w-10 h-10 text-white"
                            x-show="!showMenu"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16">

                            </path>
                        </svg>

                    </button>
                </div>
                <br />

            </div >
            {
                showNav && <div className="text-center bg-gray-800 py-4 md:hidden lg:hidden">
                    <Link to="/home"
                        className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300 hover:underline "
                    >Home</Link> <br />
                    <br />

                    <Link to="/explore"
                        className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300 hover:underline "
                    >Explore</Link> <br /> <br />
                    <Link to="/about"
                        className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300 hover:underline "
                    >About Us</Link> <br /> <br />
                    {/* <Link to="/login"
                        className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300 hover:underline "
                    >Login</Link> */}

                    {
                        user?.email ?
                            <button onClick={logout} color="inherit">Logout</button>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <button color="inherit">Login</button>
                            </NavLink>
                    }


                    {/* {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    } */}


                </div>
            }

        </div >
    );
};

export default Navigation;