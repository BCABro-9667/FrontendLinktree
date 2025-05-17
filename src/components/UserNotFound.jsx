import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/UserNotFound.css';

const UserNotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchedUsername = queryParams.get('username') || '';

  const handleCreateLinktree = () => {
    navigate('/linktree');
  };

  const handleTryAgain = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>User Not Found</h2>
        {/* <p>
          The username <span className="username">"{searchedUsername}"</span> doesn't exist yet.
        </p> */}
        <div className="button-group">
          <button onClick={handleCreateLinktree} className="create-btn">
            + Create
          </button>
          <button onClick={handleTryAgain} className="try-again-btn">
            Serach 
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserNotFound;