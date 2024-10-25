import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { useUser } from './Context/UserContext'; // Assuming useUser is your custom hook for auth

function App() {
  
  const { user } = useUser();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
        <Route path="/" element={!user ? <Navigate replace to="/login" /> : <Home />} />
        {/* Redirect any unknown routes */}
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
