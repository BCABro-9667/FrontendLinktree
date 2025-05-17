import React, { useState } from 'react';
import '../styles/LinktreeForm.css';
import HeroImages from '../assets/Images/homehero.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'

const LinktreeForm = () => {
  const [username, setUsername] = useState('');
  const [links, setLinks] = useState([{ url: '', text: '' }]);
  const [profileImage, setProfileImage] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const navigate = useNavigate();

  const handleAddLink = () => {
    setLinks([...links, { url: '', text: '' }]);
  };

  const handleLinkChange = (index, field, value) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users', {
        username,
        profileImage,
        displayName,
        subtitle,
        links: links.filter(link => link.url && link.text),
      });
    
      navigate(`/${username}`);
    } catch (err) {
      console.error('Error creating profile:', err);
      console.error('Error details:', err.response?.data);
      alert(err.response?.data?.error || 'Failed to create profile');
    }
    
  };
  
  return (
    <>
    <Navbar/>
    <section className="hero1">
      <div className="hero-content1">
        <h1 className="hero-title1">Create your Linktree</h1>
        <form onSubmit={handleSubmit}>
          <div className="linkgroup">
            <h3>Step 1: Claim Your Handle</h3>
            <input
              className="link-from-input"
              type="text"
              placeholder="Linktree/Yourname"
              value={username}
              onChange={(e) => setUsername(e.target.value.replace(/\s+/g, '').toLowerCase())}
              required
            />
            <input
              className="link-from-input"
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
            <input
              className="link-from-input"
              type="text"
              placeholder="Subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>

          <div className="linkgroup">
            <h3>Step 2: Add Links</h3>
            {links.map((link, index) => (
              <div className="linkgroup3" key={index}>
                <input
                  className="link-from-input"
                  type="url"
                  placeholder="Enter Link URL"
                  value={link.url}
                  onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                  required={index === 0}
                />
                <input
                  className="link-from-input"
                  type="text"
                  placeholder="Enter link text"
                  value={link.text}
                  onChange={(e) => handleLinkChange(index, 'text', e.target.value)}
                  required={index === 0}
                />
              </div>
            ))}
            <button 
              type="button" 
              className="link-from-btn"
              onClick={handleAddLink}
            >
              +Add
            </button>
          </div>

          <div className="linkgroup">
            <h3>Step 3: Add Picture and Finalize</h3>
            <input
              className="link-from-input"
              type="url"
              placeholder="Enter link to your Picture"
              value={profileImage}
              onChange={(e) => setProfileImage(e.target.value)}
            />
            <br />
            <button type="submit" className="link-from-btn">
              Create your Linktree
            </button>
          </div>
        </form>
      </div>

      <div className="image-section1">
        <img src={HeroImages} alt="Linktree" />
      </div>
    </section></>
  );
};

export default LinktreeForm;