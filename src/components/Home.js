import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

import Nav from "./Nav";

const Home = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="content">
      <h1>Welcome {user?.displayName} to my React Project</h1>
     
      <Nav />
      
      <p>I am a first year student creating projects to better understand the syntax of React and the different packages that involve making and improving a project. So far I am using React Router and Firebase.</p>
      <button onClick={handleLogout} className="w-25 /mt-4">
        Logout
      </button>
    </div>
  );
};

export default Home;