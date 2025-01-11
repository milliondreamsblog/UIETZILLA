import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [role, setRole] = useState("user"); // Default role is 'user'
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            // Choose the route based on the selected role
            const route =
                role === "admin"
                    ? "https://uietzilla.onrender.com/api/v1/admin/signup"
                    : "https://uietzilla.onrender.com/api/v1/admin/signup";

            const response = await fetch(route, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, firstname, lastname }),
            });

            if (response.ok) {
                const data = await response.json();
                setSuccess(data.message || "Signup successful!");

                // Redirect to login page after successful registration
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Failed to register");
            }
        } catch (err) {
            console.error("Signup error:", err);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="bg-white p-6 rounded shadow-md w-96"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Register</h2>

                {error && (
                    <div className="text-red-500 mb-4 text-sm">{error}</div>
                )}
                {success && (
                    <div className="text-green-500 mb-4 text-sm">{success}</div>
                )}

                <div className="mb-4">
                    <label htmlFor="firstname" className="block text-gray-600 mb-2">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="lastname" className="block text-gray-600 mb-2">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

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

                <div className="mb-4">
                    <label htmlFor="role" className="block text-gray-600 mb-2">
                        Role
                    </label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
