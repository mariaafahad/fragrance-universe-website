import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, signInWithGoogle, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (

        <div className="font-sans">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label for="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            Login
                        </label>
                        <form className="mt-10">

                            <div>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    onChange={handleOnChange}
                                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleOnChange}
                                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>


                            <div className="mt-7">
                                <button
                                    onClick={handleLoginSubmit}
                                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
                                </button>
                            </div>


                            <div className="flex mt-7 items-center text-center">
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                                <label className="block font-medium text-sm text-gray-600 w-full">
                                    Another Account
                                </label>
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                            </div>



                            <div className="mt-7">
                                <div className="flex justify-center items-center">
                                    <Link to='/registration' className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Create a new Account? Please Register.
                                    </Link>
                                </div>
                            </div>


                            {isLoading &&
                                <button type="button" class="bg-rose-600 ..." disabled>
                                    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                                    </svg>
                                    Processing
                                </button>
                            }

                            {/* 
                            {authError &&
                                alert({ authError })
                            } */}
                        </form>

                        <div className="flex mt-7 justify-center w-full">


                            <button onClick={handleGoogleSignIn} className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                                Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;