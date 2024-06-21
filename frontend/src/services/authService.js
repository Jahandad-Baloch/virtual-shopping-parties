import axios from 'axios';

const API_URL = '/api/auth/';

async function login(email, password) {
  const response = await axios.post(API_URL + 'login', {
    email,
    password
  });
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}

function logout() {
  localStorage.removeItem('user');
}

async function signup(email, password) {
  const response = await axios.post(API_URL + 'signup', {
    email,
    password
  });
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}

function onAuthChange(callback) {
  const user = JSON.parse(localStorage.getItem('user'));
  callback(user);
  // This is a simplified version. In a real app, you might want to set up a real-time listener
  return () => {};
}

export { login, logout, signup, onAuthChange };