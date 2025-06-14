// Notification.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { FaBell, FaArrowLeft } from "react-icons/fa";
import "./Notification.css";

const notifications = [
    {
        title: "Order Request",
        message: "You Got 2 New Order",
        time: "2h ago",
    },
    {
        title: "Order Shipped",
        message: "Order #1234 has been Shipped",
        time: "2d ago",
    },
    {
        title: "Rental Due",
        message: "Your rental payment is due on 12 Apr",
        time: "1d ago",
    },
    {
        title: "Order Delivered",
        message: "Order#1245 has been Delivered",
        time: "2d ago",
    },
    {
        title: "Order Delivered",
        message: "Order#1245 has been Delivered",
        time: "2d ago",
    },
    {
        title: "Order Delivered",
        message: "Order#1245 has been Delivered",
        time: "2d ago",
    },
];

const Notification = () => {
    return (
        <div className="page">
            <Sidebar />
            <div className="content">
                <Topbar />

                <div className="notification-page">
                    <div className="notification-header">
                        <FaArrowLeft className="back-icon" />
                        <span>Notifications</span>
                    </div>

                    <div className="notification-list">
                        {notifications.map((item, index) => (
                            <div key={index} className="notification-card animate-fade-slide">
                                <div className="notification-card-main">
                                    <div className="notification-icon">
                                        <FaBell />
                                    </div>
                                    <div className="notification-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.message}</p>
                                    </div>
                                </div>
                                <div className="notification-time">{item.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
