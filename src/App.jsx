import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={OrderForm} />
        <Route path="/confirmation" component={OrderConfirmation} />
      </Switch>
    </Router>
  );
};

export default App;
