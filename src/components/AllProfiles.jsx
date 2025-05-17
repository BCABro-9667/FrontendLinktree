// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/AllProfiles.css'; // Create this CSS file for styling
// import Navbar from './Navbar';

// const AllProfiles = () => {
//   const [profiles, setProfiles] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAllProfiles = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/users');
//         setProfiles(res.data);
//       } catch (err) {
//         console.error('Failed to fetch users:', err);
//       }
//     };

//     fetchAllProfiles();
//   }, []);

//   const handleView = (username) => {
//     navigate(`/${username}`);
//   };

//   const handleEdit = (username) => {
//     navigate(`/edit/${username}`);
//   };

//   const handleDelete = async (username) => {
//     if (window.confirm(`Are you sure you want to delete "${username}"?`)) {
//       try {
//         await axios.delete(`http://localhost:5000/api/users/${username}`);
//         setProfiles(profiles.filter(profile => profile.username !== username));
//       } catch (err) {
//         console.error('Failed to delete user:', err);
//         alert('Failed to delete profile');
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="all-profiles-container">
//         <h2>All Linktree Profiles</h2>
//         <table className="profiles-table">
//           <thead>
//             <tr>
//               <th>Sr. No.</th>
//               <th>Username</th>
//               <th>Profile Picture</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {profiles.map((profile, index) => (
//               <tr key={profile.username}>
//                 <td>{index + 1}</td>
//                 <td>{profile.username}</td>
//                 <td>
//                   {profile.profileImage ? (
//                     <img
//                       src={profile.profileImage}
//                       alt={profile.username}
//                       width="60"
//                       height="60"
//                       style={{ borderRadius: '50%' }}
//                     />
//                   ) : (
//                     'No Image'
//                   )}
//                 </td>
//                 <td>
//                   <button onClick={() => handleView(profile.username)}>View</button>
//                   <button onClick={() => handleEdit(profile.username)}>Edit</button>
//                   <button onClick={() => handleDelete(profile.username)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default AllProfiles;
