import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Import your page components here
import HomePage from './pages/HomePage';
import PartyPage from './pages/PartyPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

// Import your navigation component here if you have one
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/parties" component={PartyPage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;