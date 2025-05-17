import React from 'react';
import '../styles/loader.css';
import loader from '../assets/Images/loader.png'; // adjust path as needed

function Loader() {
  return (
    <div className="loader-wrapper">
      <img src={loader} alt="Loading..." className="center-logo" height={100}/>
      <div className="spinner-ring"></div>
    </div>
  );
}

export default Loader;
