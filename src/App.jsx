// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Rental from './pages/Rental';
import Order from './pages/Order';
import EditShop from './pages/EditShop';
import Payment from './pages/Payment';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';



const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>} />
        <Route path="/shop" element={<ProtectedRoute><Shop /></ProtectedRoute>} />
        <Route path="/rental" element={<ProtectedRoute><Rental /></ProtectedRoute>} />
        <Route path="/order" element={<ProtectedRoute><Order /></ProtectedRoute>} />
        <Route path="/edit-shop" element={<EditShop />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;