import React from 'react';
import { Link } from 'react-router-dom';
import List from '../List/List';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from './DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import ReviewPage from '../../Review/ReviewPage';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import SeeReview from '../../Review/SeeReview';

const Dashboard = (props) => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

 
    return (
        <div>

            <main class="flex w-full h-screen">
                <aside class="w-80 h-screen bg-gray shadow-md  w-fulll  sm:block">
                    <div class="flex flex-col justify-between  h-screen p-4 bg-gray-800">

                        <div>
                            <Link to='/explore' className='flex text-white rounded bg-gray-900 hover:bg-gray-700 hover:text-blue-300 cursor-pointer text-center text-sm'> <button className=" text-white  inline-flex items-center  rounded cursor-pointer    font-bold py-2 px-4 ">Explore</button></Link>
                        </div>
                        <div>
                            <Link to={`${url}`} className='flex text-white rounded bg-gray-900 hover:bg-gray-700 hover:text-blue-300 cursor-pointer text-center text-sm'> <button className=" text-white  inline-flex items-center  rounded cursor-pointer    font-bold py-2 px-4 ">Dashboard</button></Link>
                        </div>
                        {admin && <div>
                            <Link to={`${url}/makeadmin`} className='flex text-white rounded bg-gray-900 hover:bg-gray-700 hover:text-blue-300 cursor-pointer text-center text-sm'> <button className=" text-white  inline-flex items-center  rounded cursor-pointer    font-bold py-2 px-4 ">Make Admin</button></Link>
                            <Link to={`${url}/addproduct`} className='flex text-white rounded bg-gray-900 hover:bg-gray-700 hover:text-blue-300 cursor-pointer text-center text-sm'> <button className=" text-white  inline-flex items-center  rounded cursor-pointer    font-bold py-2 px-4 "> Add Product</button></Link>
                        </div>
                        }
                        <Link to={`${url}/pay`} className='flex text-white rounded bg-gray-900 hover:bg-gray-700 hover:text-blue-300 cursor-pointer text-center text-sm'> <button className=" text-white  inline-flex items-center  rounded cursor-pointer    font-bold py-2 px-4 ">Payment</button></Link>
                        <Link to={`${path}/review`} className='flex text-white rounded bg-gray-900 hover:bg-gray-700 hover:text-blue-300 cursor-pointer text-center text-sm'> <button className=" text-white  inline-flex items-center  rounded cursor-pointer    font-bold py-2 px-4 ">Add Review</button></Link>
                    </div>
                </aside>

                <section class="w-full p-4">
                    {/* <div class="w-full  border-dashed border-4 p-4 text-md"><List></List></div> */}
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${url}/addproduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <Route path={`${path}/pay`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/review`}>
                            <ReviewPage></ReviewPage>
                        </Route>
                        <Route path={`${path}/seeReview`}>
                            <SeeReview />
                        </Route>
                    </Switch>
                </section>


            </main>
        </div>
    );
};

export default Dashboard;