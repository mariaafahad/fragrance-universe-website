
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";

import Home from './Pages/Home/Home';
import Explores from './Pages/Explore/Explores/Explores';
import Login from './Login/Login';
import Navigation from './Shared/Navigation/Navigation';
import Registration from './Registration/Registration';
import Review from './Pages/Review/Review';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import ParcheseModal from './Pages/Product/ParcheseModal';
import Dashboard from './Pages/DashBoard/DashBoard/Dashboard';
import AddProduct from './Pages/DashBoard/AddProduct/AddProduct';
import SeeReview from './Pages/Review/SeeReview';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/explore">
              <Explores></Explores>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/addproduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path="/explore">
              <Explores></Explores>
            </PrivateRoute>
            <PrivateRoute path="/parchase/:id">
              <ParcheseModal />
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
