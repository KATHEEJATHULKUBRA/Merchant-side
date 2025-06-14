// Payment.jsx
import React, { useState } from 'react';
import './Payment.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const Payment = () => {
    const [method, setMethod] = useState('UPI');

    return (
        <div className="page">
            <Sidebar />
            <div className="content">
                <Topbar />

                <motion.div className="payment-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="payment-title">
                        <FaArrowLeft className="back-button" />
                        Make Payment
                    </div>

                    <div className='overall-form'>
                        <div className="payment-box">

                            <div className="invoice-box">
                                <div className="invoice-row">
                                    <span>Rent Due:</span>
                                    <span className="amount">₹ 12,000</span>
                                </div>
                                <div className="invoice-row">
                                    <span>Due Date:</span>
                                    <span className="due-date">20 Apr 2025</span>
                                </div>
                                <div className="invoice-row">
                                    <span>Invoice ID:</span>
                                    <span className="invoice-id">KM-INV-0485</span>
                                </div>
                            </div>

                            <div className="payment-method">
                                <label>
                                    <input
                                        type="radio"
                                        checked={method === 'UPI'}
                                        onChange={() => setMethod('UPI')}
                                    />
                                    <span className="option-label">UPI</span>

                                </label>
                                {method === 'UPI' && (
                                    <input type="text" className="input-box" placeholder="UPI ID" />
                                )}

                                <label>
                                    <input
                                        type="radio"
                                        checked={method === 'Card'}
                                        onChange={() => setMethod('Card')}
                                    />
                                    <span className="option-label">Card</span>

                                </label>
                                {method === 'Card' && (
                                    <div className="card-inputs">
                                        <input type="text" className="input-box" placeholder="Card Number" />
                                        <input type="text" className="input-box" placeholder="Exp Date" />
                                    </div>
                                )}

                                <label>
                                    <input
                                        type="radio"
                                        checked={method === 'Net Banking'}
                                        onChange={() => setMethod('Net Banking')}
                                    />
                                    <span className="option-label">Net Banking</span>
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        checked={method === 'Wallet'}
                                        onChange={() => setMethod('Wallet')}
                                    />
                                    <span className="option-label">Wallet</span>

                                </label>
                            </div>

                            <button className="pay-now">Pay Now</button>
                            <button className="cancel">Cancel</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Payment;
