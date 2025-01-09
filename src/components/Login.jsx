import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:3000/api/v1/user/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Store token in localStorage or a cookie
                localStorage.setItem("token", data.token);

                // Navigate to a protected page (e.g., dashboard)
                navigate("/dashboard");
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Failed to login");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                className="bg-white p-6 rounded shadow-md w-96"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Login</h2>

                {error && (
                    <div className="text-red-500 mb-4 text-sm">
                        {error}
                    </div>
                )}

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
