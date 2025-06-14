import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
// import './Shop.css';
import './EditShop.css'

const EditShop = () => {
  const [shopName, setShopName] = useState('Taibah Enterprises');
  const [phoneNumber, setPhoneNumber] = useState('+91 98562 30587');
  const [address, setAddress] = useState('10, Jalal Road Abc Street, Ambur - 635802');
  const [banner, setBanner] = useState(null);
  const [logo, setLogo] = useState(null);

  const handleBannerChange = (e) => setBanner(URL.createObjectURL(e.target.files[0]));
  const handleLogoChange = (e) => setLogo(URL.createObjectURL(e.target.files[0]));

  const handleSave = () => {
    alert('Shop details updated successfully!');
    // Add your save logic here (API call, etc.)
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="content">
        <Topbar />
        <div className="edit-shop-container">
          <h2>Edit Shop</h2>
          <div className='overall-edit'>
            <div className="form-group">
              <label>Shop Name</label>
              <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Upload Shop Banner</label>
              <div className="image-upload">
                <input type="file" onChange={handleBannerChange} />
                {banner && <img src={banner} alt="Shop Banner" className="preview-banner" />}
              </div>
            </div>

            <div className="form-group">
              <label>Upload Logo</label>
              <div className="image-upload small">
                <input type="file" onChange={handleLogoChange} />
                {logo && <img src={logo} alt="Logo" className="preview-logo" />}
              </div>
            </div>

            <div className="btn-group">
              <button className="save-btn" onClick={handleSave}>Save</button>
              <br />
              <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditShop;
