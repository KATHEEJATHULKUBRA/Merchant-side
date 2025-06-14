
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import './Shop.css';

const Shop = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [issueText, setIssueText] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setSubmitted(false);
            setIssueText('');
        }, 2000);
    };

    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate('/edit-shop');
    };

    return (
        <div className="page">
            <Sidebar />
            <div className="content">
                <Topbar />
                <div className="shop-container">
                    <div className="shop-header">
                        <h2>Manage Shop</h2>
                        <button className="maintenance-btn" onClick={() => setIsModalOpen(true)}>
                            Maintenance issues
                        </button>
                    </div>


                    <div className="form-wrapper">
                        <div className="shop-form">
                            <div className="form-group">
                                <label>Shop Name</label>
                                <input type="text" value="Taibah Enterprises" disabled />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" value="+91 98562 30587" disabled />
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    value="10, Jalal Road Abc Street, Ambur - 635802"
                                    disabled
                                />
                            </div>

                            <div className="form-group">
                                <label>Upload Shop Banner</label>
                                <img
                                    src="/images/shop-image.png"
                                    alt="Shop Banner"
                                    className="shop-banner"
                                />
                            </div>

                            <div className="form-group">
                                <label>Upload Logo</label>
                                <img
                                    src="/images/shop-logo.png"
                                    alt="Shop Logo"
                                    className="shop-logo"
                                />
                            </div>

                            <button className="edit-btn" onClick={handleEditClick}> <FiEdit3 size={18} /> Edit</button>
                        </div>
                    </div>

                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal-box">
                                {submitted ? (
                                    <div className="thank-you">
                                        <div className="checkmark">  <img src="/images/right.png" alt="right" className="check-icon" /></div>
                                        <p>Thank you! Your maintenance request has been recorded.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="modal-header">
                                            <h3>Report Maintenance</h3>
                                            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                                                <AiOutlineClose className="close-icon" />

                                            </button>
                                        </div>

                                        <div className='overall-form-shop'>
                                            <div className="form-group">
                                                <label>Shop Name</label>
                                                <input type="text" value="Taibah Enterprises" disabled />
                                            </div>

                                            <div className="form-group">
                                                <label>Issues:</label>
                                                <textarea
                                                    rows="3"
                                                    placeholder="Describe the issue..."
                                                    value={issueText}
                                                    onChange={(e) => setIssueText(e.target.value)}
                                                />
                                            </div>

                                            <button className="submit-btn" onClick={handleSubmit}>
                                                Submit
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
