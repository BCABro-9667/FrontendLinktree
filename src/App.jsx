// App.jsx
import React from 'react';
import '../src/styles/globals.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
import Home from './components/Hero';
import LinktreeForm from './components/LinktreeForm';
import Profile from './components/Profile';
import UserNotFound from './components/UserNotFound';
// import AllProfiles from './components/AllProfiles';
// import Footer from '../src/components/Footer';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linktree" element={<LinktreeForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        {/* <Route path="/all-profiles" element={<AllProfiles />} /> */}
        <Route path="/not-found" element={<UserNotFound />} />
        <Route path="*" element={<UserNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
