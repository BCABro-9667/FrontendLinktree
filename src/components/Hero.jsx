import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Required for navigation
import '../styles/Hero.css';
import HeroImages from '../assets/Images/homehero.jpg';
import Navbar from '../components/Navbar'


const Hero = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // React Router's navigation hook

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleProfileNavigation = () => {
    if (username.trim()) {
      // Navigate to the user's profile page (e.g., /username)
      navigate(`/${username.trim()}`);
    }
  };

  return (
    <>
    <Navbar/>
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Everything you are. In one, simple link in bio.
        </h1>
        <p className="hero-subtitle">
          Join 50M+ people using Linktree for their link in bio. One link to
          help you share everything you create, curate and sell from your
          Instagram, TikTok, Twitter, YouTube and other social media profiles.
        </p>
        <div className="input-div">
          <input
            type="text"
            placeholder="linktree/yourname"
            value={username}
            onChange={handleInputChange}
          />
          <button onClick={handleProfileNavigation}>Claim your Linktree</button>
        </div>
      </div>

      <div className="image-section">
        <img src={HeroImages} alt="Linktree" />
      </div>
    </section></>
  );
};

export default Hero;