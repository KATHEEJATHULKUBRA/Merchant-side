
// // TopBar.jsx
// import React from 'react';
// import { Bell, User } from 'lucide-react';
// import './TopBar.css';
// import { useNavigate } from 'react-router-dom';

// const TopBar = ({ showNotifications, setShowNotifications, showProfile, setShowProfile }) => {
//     const navigate = useNavigate();

//     const handleNotificationClick = () => {
//         setShowNotifications(!showNotifications);
//         if (showProfile) setShowProfile(false);
//         navigate('/notification'); // Navigate to the notification page
//     };

//     return (
//         <header className="top-bar">
//             <div className="top-icons">
//                 {/* Notification Icon */}
//                 <div
//                     className="icon-wrapper"
//                     onClick={handleNotificationClick}
//                     tabIndex={0}
//                     role="button"
//                     aria-label="Toggle notifications"
//                     onKeyDown={(e) => e.key === 'Enter' && handleNotificationClick()}
//                 >
//                     <Bell size={20} />
//                     {showNotifications && <div className="dropdown">No new notifications</div>}
//                 </div>

//                 {/* Profile Icon */}
//                 <div
//                     className="icon-wrapper"
//                     onClick={() => {
//                         setShowProfile(!showProfile);
//                         if (showNotifications) setShowNotifications(false);
//                     }}
//                     tabIndex={0}
//                     role="button"
//                     aria-label="Toggle profile menu"
//                     onKeyDown={(e) => e.key === 'Enter' && setShowProfile(!showProfile)}
//                 >
//                     <User size={20} />
//                     {showProfile && (
//                         <div className="dropdown profile-dropdown">
//                             <img src="https://via.placeholder.com/40" alt="Profile" />
//                             <span>John Doe</span>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default TopBar;

// // TopBar.jsx
// import React, { useState } from 'react';
// import { Bell, User } from 'lucide-react';
// import './TopBar.css';
// import { useNavigate } from 'react-router-dom';

// const TopBar = () => {
//     const [showNotifications, setShowNotifications] = useState(false);
//     const [showProfile, setShowProfile] = useState(false);
//     const navigate = useNavigate();

//     const handleNotificationClick = () => {
//         setShowNotifications(!showNotifications);
//         if (showProfile) setShowProfile(false);
//         navigate('/notification');
//     };

//     return (
//         <header className="top-bar">
//             <div className="top-icons">
//                 {/* Notification Icon */}
//                 <div
//                     className="icon-wrapper"
//                     onClick={handleNotificationClick}
//                     tabIndex={0}
//                     role="button"
//                     aria-label="Toggle notifications"
//                     onKeyDown={(e) => e.key === 'Enter' && handleNotificationClick()}
//                 >
//                     <Bell size={20} />
//                     {showNotifications && <div className="dropdown">No new notifications</div>}
//                 </div>

//                 {/* Profile Icon */}
//                 <div
//                     className="icon-wrapper"
//                     onClick={() => {
//                         setShowProfile(!showProfile);
//                         if (showNotifications) setShowNotifications(false);
//                     }}
//                     tabIndex={0}
//                     role="button"
//                     aria-label="Toggle profile menu"
//                     onKeyDown={(e) => e.key === 'Enter' && setShowProfile(!showProfile)}
//                 >
//                     <User size={20} />
//                     {showProfile && (
//                         <div className="dropdown profile-dropdown">
//                             <img src="https://via.placeholder.com/40" alt="Profile" />
//                             <span>John Doe</span>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default TopBar;

import React, { useState, useEffect, useRef } from 'react';
import { Bell, User } from 'lucide-react';
import './TopBar.css';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();
    const profileRef = useRef(null);

    const handleNotificationClick = () => {
        setShowNotifications(!showNotifications);
        setShowProfile(false);
        navigate('/notification');
    };

    const handleLogout = () => {
        // TODO: Add your logout logic here (e.g., clearing tokens, redirect)
        alert('Logged out successfully!');
        navigate('/login');
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='topbar-overall'>
            <header className="top-bar">
                <div className="top-icons">
                    {/* Notification Icon */}
                    <div
                        className="icon-wrapper"
                        onClick={handleNotificationClick}
                        tabIndex={0}
                        role="button"
                        aria-label="Toggle notifications"
                        onKeyDown={(e) => e.key === 'Enter' && handleNotificationClick()}
                    >
                        <Bell size={20} />
                        {showNotifications && <div className="dropdown">No new notifications</div>}
                    </div>

                    {/* Profile Icon */}
                    <div
                        className="icon-wrapper"
                        onClick={() => setShowProfile(!showProfile)}
                        tabIndex={0}
                        role="button"
                        aria-label="Toggle profile menu"
                        onKeyDown={(e) => e.key === 'Enter' && setShowProfile(!showProfile)}
                        ref={profileRef}
                    >
                        <User size={20} />
                        {showProfile && (
                            <div className="dropdown profile-dropdown">
                                <img src="https://via.placeholder.com/40" alt="Profile" />
                                <span className="profile-name">John Doe</span>
                                <ul>
                                    <li onClick={() => navigate('/profile')}>Profile</li>
                                    <li onClick={() => navigate('/settings')}>Settings</li>
                                    <li onClick={handleLogout}>Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default TopBar;

