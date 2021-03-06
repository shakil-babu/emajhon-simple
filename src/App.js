
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';
function App() {

  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component = {Shop} />
          <Route path='/shop' component= {Shop}/>
          <Route path='/review' component={Review} />
          <Route path='/inventory' component={Inventory} />
          <Route path='/product/:key' component={ProductDetails} />
          <Route path='*' component={NotFound} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
