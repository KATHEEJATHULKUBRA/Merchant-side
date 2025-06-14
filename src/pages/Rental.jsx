import React from 'react';
import './Rental.css';
import { FaDownload } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { useNavigate } from 'react-router-dom';


const Rental = () => {
  const navigate = useNavigate();
  const handlePayNow = () => {
    navigate('/payment');
  };
  return (
    <div className="page">
      <Sidebar />
      <div className="content">
        <Topbar />
        <div className="rental-container">
          <h2 className="rental-title">Rental Maintenance</h2>
          <h3 className="summary-heading">Rent Summary</h3>
          <table className="summary-table">
            <thead>
              <tr>
                <th>Label</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rent Due:</td>
                <td className="rent-amount">₹ 12,000</td>
              </tr>
              <tr>
                <td>Due Date:</td>
                <td className="due-date">
                  20 Apr 2025
                  <span className="due-soon">Due soon</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className='center'>
            <div className="rental-buttons">
              <button className="pay-button" onClick={handlePayNow}>Make Payment</button>
              <button className="download-button">
                <FaDownload className="download-icon" />
                Download Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rental;
