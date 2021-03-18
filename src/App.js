
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Login from './Containers/Login/Login';
import Shipment from './Containers/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './Containers/PrivateRoute/PrivateRoute';

export const userInfoContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <userInfoContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component = {Shop} />
          <Route path='/shop' component= {Shop}/>
          <Route path='/review' component={Review} />
          <PrivateRoute path='/shipment'><Shipment></Shipment></PrivateRoute>
          <Route path='/login' component={Login} />
          <Route path='/inventory' component={Inventory} />
          <Route path='/product/:key' component={ProductDetails} />
          <Route path='*' component={NotFound} />
        </Switch>

      </BrowserRouter>
    </userInfoContext.Provider>
  );
}

export default App;
