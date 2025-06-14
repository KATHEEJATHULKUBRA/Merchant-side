import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";
import logo from "../assets/image/basket.png";

// Icons
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email });
        navigate("/");
    };

    return (
        <div className="container">
            <form className="login-box" onSubmit={handleSubmit}>
                <div className="logo-container">
                    <img src={logo} alt="Kubra Market" className="logo" />
                </div>
                <h2>
                    Log In
                </h2>

                <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <FaLock className="input-icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn">Log In</button>

                <Link to="/forgot" className="link">Forget password?</Link>

                <p className="account-text">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import "./Login.css";
// import logo from "../assets/image/basket.png";

// // Icons
// import { FaEnvelope, FaLock } from "react-icons/fa";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();
//     const { login } = useAuth();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError("");
//         setLoading(true);

//         try {
//             const res = await fetch("https://kubramarket-be.onrender.com/api/auth/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await res.json();

//             if (!res.ok) {
//                 throw new Error(data.message || "Login failed. Please try again.");
//             }

//             // Optionally store token in localStorage or context
//             localStorage.setItem("token", data.token);

//             login({ email }); // Update context if needed
//             navigate("/");
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container">
//             <form className="login-box" onSubmit={handleSubmit}>
//                 <div className="logo-container">
//                     <img src={logo} alt="Kubra Market" className="logo" />
//                 </div>
//                 <h2>Log In</h2>

//                 {error && <p className="error-text">{error}</p>}

//                 <div className="input-group">
//                     <FaEnvelope className="input-icon" />
//                     <input
//                         type="email"
//                         placeholder="E-mail"
//                         className="input"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="input-group">
//                     <FaLock className="input-icon" />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         className="input"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="btn" disabled={loading}>
//                     {loading ? "Logging in..." : "Log In"}
//                 </button>

//                 <Link to="/forgot" className="link">Forget password?</Link>

//                 <p className="account-text">
//                     Don't have an account? <Link to="/signup">Sign Up</Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Login;
