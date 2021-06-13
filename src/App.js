import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import Cart from './components/cart';
import Nav from './components/Nav';
import store from './store/reducer/index';
import {BrowserRouter as Router,Route} from 'react-router-dom';  
import Home from './components/home';
import Details from './components/Details';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/details/:id" exact component={Details}/>
    </Router>
    </Provider>
  );
}

export default App;
