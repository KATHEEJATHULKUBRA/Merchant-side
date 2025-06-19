// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Sidebar.css";
import logo from "../assets/image/basket.png";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const Sidebar = () => {
    const { logout } = useAuth();

    return (
        <div className="sidebar">
            <div className="logo">
                {/* Logo image (adjust the path as needed) */}
                <img src={logo} alt="Kubra Market Logo" className="logo-image" />
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home icon"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/product" className="nav-link">
                            <i className="fas fa-box-open icon"></i>
                            <span>Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className="nav-link">
                            <i className="fas fa-store icon"></i>
                            <span>Shop</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/rental" className="nav-link">
                            <i className="fas fa-truck icon"></i>
                            <span>Rental</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/order" className="nav-link">
                            <i className="fas fa-box icon"></i>
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/return-order" className="nav-link">
                            <i className="fas fa-undo-alt icon"></i>
                            <span>Return Orders</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="logout" onClick={logout}>
                <i className="fas fa-sign-out-alt icon"></i>
                <span>Logout</span>
            </div>
        </div>
    );
};

export default Sidebar;
