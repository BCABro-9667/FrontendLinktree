// Profile.jsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/profile.css";
import UserNotFound from "./UserNotFound";
import Loader from "./loader";

const Profile = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`https://linktreebackend-n1uq.onrender.com/api/${username}`);
        setProfile(response.data);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  return (
    <>
      <Helmet>
        <title>{profile?.displayName || "Profile"}'s Linktree</title>
      </Helmet>

      <div className="container" style={{ background: 'var(--theme-bg)' }}>
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner">
              <Loader />
            </div>
          </div>
        ) : error || !profile ? (
          <UserNotFound searchedUsername={username} />
        ) : (
          <div className="card">
            {profile.profileImage && (
              <img
                src={profile.profileImage}
                alt="Profile"
                width={100}
                height={100}
                className="profileImage"
              />
            )}
            <h1 className="name" style={{ color: 'var(--secondary-accent)' }}>
              {profile.displayName}
            </h1>
            {profile.subtitle && (
              <p className="subtitle" style={{ color: 'var(--secondary-accent)' }}>
                {profile.subtitle}
              </p>
            )}
            <div className="links">
              {profile.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="link"
                  style={{ background: 'var(--link-bg)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
