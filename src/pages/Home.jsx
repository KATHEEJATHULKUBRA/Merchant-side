// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Topbar from '../components/Topbar';
// import money from '../assets/image/money.png'
// import vector from '../assets/image/Vector.png'
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const lowStockProducts = [
//     { name: 'Wrist Watch', desc: 'Quartz Wrist Watch for women', stock: '02', image: '/images/watch.png' },
//     { name: 'Hand Bag', desc: 'Handbags for women', stock: '03', image: '/images/bag.png' },
//     { name: 'Wicker Basket', desc: 'Vintage Wicker Gathering Basket', stock: '02', image: '/images/basket.png' },
//     { name: 'Ceramic Cups', desc: 'Home Appliances', stock: '01', image: '/images/cup.png' },
//     { name: 'Ceramic Bowls', desc: 'Home Appliances', stock: '01', image: '/images/bowl.png' },
//     { name: 'Sun Glasses', desc: 'Sunglasses for women', stock: '01', image: '/images/glass.png' },
//     { name: 'Black ceramic plates', desc: 'Home Appliances', stock: '03', image: '/images/plate-b.png' },
//     { name: 'Ceramic Plate set', desc: 'Home Appliances', stock: '01', image: '/images/plate.png' },
// ];

// const Home = () => {
//     const [showNotifications, setShowNotifications] = useState(false);
//     const [showProfile, setShowProfile] = useState(false);
//      const navigate = useNavigate();


//     return (
//         <div className="home-page">
//             <Sidebar />
//             <main className="main-content">
//                 <Topbar
//                     showNotifications={showNotifications}
//                     setShowNotifications={setShowNotifications}
//                     showProfile={showProfile}
//                     setShowProfile={setShowProfile}
//                 />

//                 <div className="welcome-msg">
//                     <h3>Hi John,</h3>
//                     <p>Welcome back</p>
//                 </div>

//                 <div className="report" onClick={() => navigate("/sale")} style={{ cursor: 'pointer' }}>
//                     <p>View Sales Report</p>
//                 </div>

//                 <section className="sales-overview">
//                     <div className="sales-card daily">
//                         <div className='left'>
//                             <img src={money} alt="icon" className="icon" />
//                         </div>
//                         <div className='right'>
//                             <p>Daily Sales</p>
//                             <h3>₹ 3,000.</h3>
//                         </div>
//                     </div>
//                     <div className="sales-card total">

//                         <div className='left'>
//                             <img src={vector} alt="icon" className="icon" />
//                         </div>
//                         <div className='right'>
//                             <p>Total Sales</p>
//                             <h3>12</h3>
//                         </div>

//                     </div>
//                 </section>

//                 <section className="low-stock">
//                     <h4>Low Stock Products</h4>
//                     <div className="product-list">
//                         {lowStockProducts.map((product, i) => (
//                             <div className="product-card" key={i}>
//                                 <div className="product-info">
//                                     <img
//                                         className="product-img"
//                                         src={product.image}
//                                         alt={`${product.name} image`}
//                                     />
//                                     <div>
//                                         <h5>{product.name}</h5>
//                                         <p>{product.desc}</p>
//                                     </div>
//                                 </div>
//                                 <div className="stock-badge">On stock <br /><span>{product.stock}</span></div>
//                             </div>
//                         ))}
//                     </div>

//                 </section>
//             </main>
//         </div>
//     );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import money from '../assets/image/money.png';
import vector from '../assets/image/Vector.png';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [lowStockProducts, setLowStockProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLowStockProducts = async () => {
            try {
                const response = await fetch('https://kubramarket-be.onrender.com/api/product/');
                const data = await response.json();

                const productsArray = Array.isArray(data)
                    ? data
                    : data.products || [];

                const filtered = productsArray.filter(product => Number(product.stock) <= 10);
                setLowStockProducts(filtered);
            } catch (error) {
                console.error('Failed to fetch low stock products:', error);
            }
        };

        fetchLowStockProducts();
    }, []);

    return (
        <div className="home-page">
            <Sidebar />
            <main className="main-content">
                <Topbar
                    showNotifications={showNotifications}
                    setShowNotifications={setShowNotifications}
                    showProfile={showProfile}
                    setShowProfile={setShowProfile}
                />

                <div className="welcome-msg">
                    <h3>Hi John,</h3>
                    <p>Welcome back</p>
                </div>

                <div className="report" onClick={() => navigate("/sale")} style={{ cursor: 'pointer' }}>
                    <p>View Sales Report</p>
                </div>

                <section className="sales-overview">
                    <div className="sales-card daily">
                        <div className='left'>
                            <img src={money} alt="icon" className="icon" />
                        </div>
                        <div className='right'>
                            <p>Daily Sales</p>
                            <h3>₹ 3,000.</h3>
                        </div>
                    </div>
                    <div className="sales-card total">
                        <div className='left'>
                            <img src={vector} alt="icon" className="icon" />
                        </div>
                        <div className='right'>
                            <p>Total Sales</p>
                            <h3>12</h3>
                        </div>
                    </div>
                </section>

                <section className="low-stock">
                    <h4>Low Stock Products</h4>
                    <div className="product-list">
                        {lowStockProducts.length > 0 ? (
                            lowStockProducts.map((product, index) => (
                                <div className="product-card" key={index}>
                                    <div className="product-info">
                                        {/* Loop through gallery images */}
                                        <div className="product-images">
                                            {product.gallery?.length > 0 ? (
                                                product.gallery.map((imageObj, imgIndex) => (
                                                    <img
                                                        key={imgIndex}
                                                        className="product-img"
                                                        src={imageObj.card || '/images/placeholder.png'}
                                                        alt={`${product.name || product.title} image ${imgIndex + 1}`}
                                                    />
                                                ))
                                            ) : (
                                                <img
                                                    className="product-img"
                                                    src="/images/placeholder.png"
                                                    alt="not"
                                                />
                                            )}
                                        </div>

                                        <div>
                                            <h5>{product.name || product.title}</h5>
                                            <p>{product.description || 'No description available'}</p>
                                        </div>
                                    </div>

                                    <div className="stock-badge">
                                        On stock <br /><span>{product.stock}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No low stock products found.</p>
                        )}
                    </div>


                </section>
            </main>
        </div>
    );
};

export default Home;
