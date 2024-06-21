import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function HomePage() {
  const { currentUser } = useAuth();

  return (
    <div className="container mt-5">
      <h1>Welcome to Virtual Shopping Parties</h1>
      <p>This is the ultimate place to shop with friends, no matter where you are!</p>
      {currentUser ? (
        <div>
          <p>Welcome back, {currentUser.email}!</p>
          <Link to="/parties" className="btn btn-primary">Join a Party</Link>
        </div>
      ) : (
        <div>
          <Link to="/login" className="btn btn-primary mr-2">Login</Link>
          <Link to="/register" className="btn btn-secondary">Register</Link>
        </div>
      )}
    </div>
  );
}

export default HomePage;