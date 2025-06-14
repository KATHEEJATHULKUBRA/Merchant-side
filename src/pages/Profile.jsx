import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Profile.css'; // Make sure this path matches your actual file

const Profile = () => {
    return (
        <div className="page">
            <Sidebar />
            <div className="content">
                <Topbar />
                <div className="profile-container">
                    <h2 style={{ color: 'black' }}>My Profile</h2>
                    <div className="profile-header">
                        <div className="profile-avatar">
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <div className="profile-details">
                            <h4>Ayesha Khan</h4>
                            <p>adminkubra01@gmail.com</p>
                        </div>
                        <div className="shop-no">
                            <span>Shop No.</span>
                            <p style={{ color: 'black' }} >07</p>
                        </div>
                    </div>

                    <div className="form-card">
                        <h3>Shop Information</h3>
                        <div className="form-group">
                            <label>Shop Name:</label>
                            <input type="text" value="Taibah Enterprises" readOnly />
                        </div>
                        <div className="form-group">
                            <label>Shop Category:</label>
                            <input type="text" value="Crockery Items & Abhaya’s" readOnly />
                        </div>
                        <div className="form-group">
                            <label>Shop Description:</label>
                            <textarea rows="3" value="Crockery Items & Abhaya’s" readOnly></textarea>
                        </div>
                        <div className="form-group">
                            <label>Shop Number:</label>
                            <input type="text" value="07" readOnly />
                        </div>
                        <div className="form-group">
                            <label>Shop Contact Number:</label>
                            <input type="text" value="+91 9865321470" readOnly />
                        </div>
                        <div className="form-group status-group">
                            <label>Shop Status:</label>
                            <span className="toggle-text">Active</span>
                            <label className="switch">
                                <input type="checkbox" checked readOnly />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <button className="save-btn">Save Changes</button>
                    </div>

                    <div className="form-card">
                        <h3>Merchant Information</h3>
                        <div className="form-group">
                            <label>Owner Name:</label>
                            <input type="text" value="Ayesha Khan" readOnly />
                        </div>
                        <div className="form-group">
                            <label>E-mail:</label>
                            <input type="email" value="ayesha01@gmail.com" readOnly />
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input type="text" value="+91 98653214470" readOnly />
                        </div>
                        <div className="form-group">
                            <label>Location:</label>
                            <input type="text" value="Ambur, Thirupattur dist, Tamil Nadu." readOnly />
                        </div>
                        <button className="save-btn">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
