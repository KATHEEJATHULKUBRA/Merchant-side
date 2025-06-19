import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Sale.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { ArrowLeft } from 'lucide-react';



const Sale = () => {
    const orders = [
        {
            id: "#1243",
            date: "20 Apr 2025 03:25 pm",
            status: "Delivered",
            price: "₹ 1200",
            productCount: "03",
            paymentMethod: "COD",
        },
        {
            id: "#1243",
            date: "20 Apr 2025 03:25 pm",
            status: "Delivered",
            price: "₹ 1200",
            productCount: "03",
            paymentMethod: "COD",
        },
        {
            id: "#1248",
            date: "20 Apr 2025 03:25 pm",
            status: "Canceled",
            price: "₹ 750",
            productCount: "01",
            paymentMethod: "COD",
        },
        {
            id: "#1243",
            date: "20 Apr 2025 03:25 pm",
            status: "Processing",
            price: "₹ 1200",
            productCount: "02",
            paymentMethod: "Credit Card",
        },
        {
            id: "#1243",
            date: "20 Apr 2025 03:25 pm",
            status: "Delivered",
            price: "₹ 1200",
            productCount: "05",
            paymentMethod: "UPI",
        },
    ];

    return (
        <div className='page'>
            <Sidebar />
            <div className="content">
                <Topbar />

                <div className="sale-container">
                    <div className="sale-header">
                        <ArrowLeft className="back-icon" />
                        <h2>Sale</h2>
                    </div>

                    <div className="sale-summary">
                        <div className="summary-box violet">
                            <MonetizationOnIcon className="summary-icon" />
                            <div>
                                <p>Total Sale</p>
                                <h3>₹ 85,000.</h3>
                            </div>
                        </div>

                        <div className="summary-box pink">
                            <Inventory2Icon className="summary-icon" />
                            <div>
                                <p>No of Orders</p>
                                <h3>12</h3>
                            </div>
                        </div>
                        <div className="summary-box red">
                            <AssessmentIcon className="summary-icon" />
                            <div>
                                <p>Avg Order Value</p>
                                <h3>₹ 85,000.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="order-table">
                        <h4>Order Break Down</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Order status</th>
                                    <th>Total Price</th>
                                    <th>Total Product</th>
                                    <th>Payment Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, idx) => (
                                    <tr key={idx}>
                                        <td>{order.id}</td>
                                        <td>{order.date}</td>
                                        <td className={`status ${order.status.toLowerCase()}`}>
                                            {order.status}
                                        </td>
                                        <td>{order.price}</td>
                                        <td className="bold">{order.productCount}</td>
                                        <td>{order.paymentMethod}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sale;
