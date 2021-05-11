import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SignUp/SignUp';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/services' component={Services}></Route>
        <Route path='/products' component={Products}></Route>
        <Route path='/sign-up' component={SignUp}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
