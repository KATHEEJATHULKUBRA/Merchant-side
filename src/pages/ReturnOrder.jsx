// ReturnOrder.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { FaArrowLeft } from 'react-icons/fa';
import './ReturnOrder.css';

const statusTypes = ['All', 'Approved', 'Rejected', 'Picked', 'Requested', 'Refunded'];

const ReturnOrder = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [activeStatus, setActiveStatus] = useState('All');

    useEffect(() => {
        // Dummy data - Replace with real API call if needed
        const data = [
            { id: '#R203004', product: 'Clothes and Cosmetics', customer: 'Haya sen', date: '25 Mar 2024', status: 'Rejected' },
            { id: '#R203005', product: 'Cakes and Bakes', customer: 'Anaya', date: '22 Mar 2024', status: 'Approved' },
            { id: '#R203006', product: 'Leather shoes', customer: 'Sana Khan', date: '10 Mar 2024', status: 'Picked' },
            { id: '#R203007', product: 'Gift Hamper', customer: 'Zoya', date: '05 Mar 2024', status: 'Requested' },
            { id: '#R203008', product: 'Beauty Pack', customer: 'Mira', date: '01 Mar 2024', status: 'Refunded' },
        ];
        setOrders(data);
        setFilteredOrders(data);
    }, []);

    const handleFilter = (status) => {
        setActiveStatus(status);
        if (status === 'All') {
            setFilteredOrders(orders);
        } else {
            setFilteredOrders(orders.filter(order => order.status === status));
        }
    };

    return (
        <div className="page">
            <Sidebar />
            <div className="content">
                <Topbar />

                <div className="return-orders">
                    <div className="header-bar">
                        <div className="title-section">
                            {/* <span className="back-arrow">←</span> */}
                            <FaArrowLeft className="back-arrow" />
                            <h2>Return Orders</h2>
                        </div>
                        <input type="text" className="search-box" placeholder="Search Order ID or Product" />
                    </div>

                    <div className="status-filters">
                        {statusTypes.map(status => (
                            <button
                                key={status}
                                className={`status-btn ${activeStatus === status ? 'active' : ''}`}
                                onClick={() => handleFilter(status)}
                            >
                                {status}
                            </button>
                        ))}
                    </div>

                    <div className="orders-table">
                        <div className="table-header">
                            <span>Return Id</span>
                            <span>Product</span>
                            <span>Customer</span>
                            <span>Requested on</span>
                            <span>Status</span>
                        </div>

                        {filteredOrders.map((order, index) => (
                            <div className="table-row" key={index}>
                                <span>{order.id}</span>
                                <span>{order.product}</span>
                                <span>{order.customer}</span>
                                <span>{order.date}</span>
                                <span className={`status-label ${order.status.toLowerCase()}`}>{order.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnOrder;
