// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import "./Login.css";
// import logo from "../assets/image/basket.png";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

// const Signup = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const { signup } = useAuth();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         signup({ name, email });
//         navigate("/");
//     };

//     return (
//         <div className="container">
//             <form className="login-box" onSubmit={handleSubmit}>
//                 <div className="logo-container">
//                     <img src={logo} alt="Kubra Market" className="logo" />
//                 </div>
//                 <h2>
//                     Sign Up
//                 </h2>

//                 <div className="input-group">
//                     <FaUser className="input-icon" />
//                     <input
//                         type="text"
//                         placeholder="Full Name"
//                         className="input"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>

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

//                 <button type="submit" className="btn">
//                     Sign Up
//                 </button>
//                 <p className="account-text">
//                     Already have an account?
//                     <Link to="/login" className="link">
//                         Log In
//                     </Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import logo from "../assets/image/basket.png";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("https://kubramarket-be.onrender.com/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong!");
            }

            alert("Signup successful!");
            navigate("/login");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <form className="login-box" onSubmit={handleSubmit}>
                <div className="logo-container">
                    <img src={logo} alt="Kubra Market" className="logo" />
                </div>
                <h2>Sign Up</h2>

                {error && <p className="error-text">{error}</p>}

                <div className="input-group">
                    <FaUser className="input-icon" />
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

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

                <button type="submit" className="btn" disabled={loading}>
                    {loading ? "Signing Up..." : "Sign Up"}
                </button>

                <p className="account-text">
                    Already have an account?{" "}
                    <Link to="/login" className="link">
                        Log In
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;

