// import React, { useState } from 'react';
// import { Bell, User } from 'lucide-react';
// import './Home.css';

// const lowStockProducts = [
//     { name: 'Wrist Watch', desc: 'Quartz Wrist Watch for women', stock: '02', image: '🕒' },
//     { name: 'Hand Bag', desc: 'Handbags for women', stock: '03', image: '👜' },
//     { name: 'Wicker Basket', desc: 'Vintage Wicker Gathering Basket', stock: '02', image: '🧺' },
//     { name: 'Ceramic Cups', desc: 'Home Appliances', stock: '01', image: '☕' },
//     { name: 'Ceramic Bowls', desc: 'Home Appliances', stock: '01', image: '🥣' },
//     { name: 'Sun Glasses', desc: 'Sunglasses for women', stock: '01', image: '🕶️' },
//     { name: 'Black ceramic plates', desc: 'Home Appliances', stock: '03', image: '🍽️' },
//     { name: 'Ceramic Plate set', desc: 'Home Appliances', stock: '01', image: '🍽️' },
// ];

// const Home = () => {
//     const [showNotifications, setShowNotifications] = useState(false);
//     const [showProfile, setShowProfile] = useState(false);

//     return (
//         <div className="home-page">
//             {/* Sidebar */}
//             <aside className="sidebar">
//                 <h2 className="logo">
//                     KUBRA <span>market</span>
//                 </h2>
//                 <nav>
//                     <a className="active" href="#home">
//                         🏠 Home
//                     </a>
//                     <a href="#products">🛍 Products</a>
//                     <a href="#shop">🏬 Shop</a>
//                     <a href="#rental">🔄 Rental</a>
//                     <a href="#orders">📦 Orders</a>
//                 </nav>
//             </aside>

//             {/* Main Content */}
//             <main className="main-content">
//                 {/* Top Bar */}
//                 <header className="top-bar">
//                     <div className="welcome-msg">
//                         <h3>Hi John,</h3>
//                         <p>Welcome back</p>
//                     </div>
//                     <div className="top-icons">
//                         <div
//                             className="icon-wrapper"
//                             onClick={() => {
//                                 setShowNotifications(!showNotifications);
//                                 if (showProfile) setShowProfile(false);
//                             }}
//                             tabIndex={0}
//                             role="button"
//                             aria-label="Toggle notifications"
//                             onKeyDown={(e) => e.key === 'Enter' && setShowNotifications(!showNotifications)}
//                         >
//                             <Bell size={20} />
//                             {showNotifications && <div className="dropdown">No new notifications</div>}
//                         </div>

//                         <div
//                             className="icon-wrapper"
//                             onClick={() => {
//                                 setShowProfile(!showProfile);
//                                 if (showNotifications) setShowNotifications(false);
//                             }}
//                             tabIndex={0}
//                             role="button"
//                             aria-label="Toggle profile menu"
//                             onKeyDown={(e) => e.key === 'Enter' && setShowProfile(!showProfile)}
//                         >
//                             <User size={20} />
//                             {showProfile && (
//                                 <div className="dropdown profile-dropdown">
//                                     <img src="https://via.placeholder.com/40" alt="Profile" />
//                                     <span>John Doe</span>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </header>

//                 {/* Sales Overview */}
//                 <section className="sales-overview">
//                     <div className="sales-card daily">
//                         <p>Daily Sales</p>
//                         <h3>₹ 3,000.</h3>
//                     </div>
//                     <div className="sales-card total">
//                         <p>Total Sales</p>
//                         <h3>12</h3>
//                     </div>
//                 </section>

//                 {/* Low Stock Products */}
//                 <section className="low-stock">
//                     <h4>Low Stock Products</h4>
//                     <div className="product-list">
//                         {lowStockProducts.map((product, i) => (
//                             <div className="product-card" key={i}>
//                                 <div className="product-info">
//                                     <span className="product-img" aria-label={`${product.name} icon`}>
//                                         {product.image}
//                                     </span>
//                                     <div>
//                                         <h5>{product.name}</h5>
//                                         <p>{product.desc}</p>
//                                     </div>
//                                 </div>
//                                 <div className="stock-badge">On stock {product.stock}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default Home;


import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import money from '../assets/image/money.png'
import vector from '../assets/image/Vector.png'
import './Home.css';

const lowStockProducts = [
    { name: 'Wrist Watch', desc: 'Quartz Wrist Watch for women', stock: '02', image: '/images/watch.png' },
    { name: 'Hand Bag', desc: 'Handbags for women', stock: '03', image: '/images/bag.png' },
    { name: 'Wicker Basket', desc: 'Vintage Wicker Gathering Basket', stock: '02', image: '/images/basket.png' },
    { name: 'Ceramic Cups', desc: 'Home Appliances', stock: '01', image: '/images/cup.png' },
    { name: 'Ceramic Bowls', desc: 'Home Appliances', stock: '01', image: '/images/bowl.png' },
    { name: 'Sun Glasses', desc: 'Sunglasses for women', stock: '01', image: '/images/glass.png' },
    { name: 'Black ceramic plates', desc: 'Home Appliances', stock: '03', image: '/images/plate-b.png' },
    { name: 'Ceramic Plate set', desc: 'Home Appliances', stock: '01', image: '/images/plate.png' },
];

const Home = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

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
                        {lowStockProducts.map((product, i) => (
                            <div className="product-card" key={i}>
                                <div className="product-info">
                                    <img
                                        className="product-img"
                                        src={product.image}
                                        alt={`${product.name} image`}
                                    />
                                    <div>
                                        <h5>{product.name}</h5>
                                        <p>{product.desc}</p>
                                    </div>
                                </div>
                                <div className="stock-badge">On stock <br /><span>{product.stock}</span></div>
                            </div>
                        ))}
                    </div>

                </section>
            </main>
        </div>
    );
};

export default Home;
