import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [purchases, setPurchases] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPurchases = async () => {
            const token = localStorage.getItem("token"); // Retrieve the token from localStorage

            if (!token) {
                setError("You need to log in to view your dashboard.");
                return;
            }

            try {
                const response = await fetch("http://localhost:5000/api/v1/purchases/my-purchases", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setPurchases(data.purchases); // Update state with fetched purchases
                } else {
                    const errorData = await response.json();
                    setError(errorData.message || "Failed to fetch purchases");
                }
            } catch (err) {
                console.error("Error fetching purchases:", err);
                setError("An error occurred while fetching your purchases.");
            }
        };

        fetchPurchases();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">My Purchased Courses</h1>
            
            {error && (
                <div className="text-red-500 mb-4 text-sm">
                    {error}
                </div>
            )}

            {purchases.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {purchases.map((purchase) => (
                        <div 
                            key={purchase.courseId._id} 
                            className="p-4 bg-white shadow-md rounded-lg"
                        >
                            <h2 className="text-lg font-bold text-gray-800">{purchase.courseId.name}</h2>
                            <p className="text-sm text-gray-600 mt-2">{purchase.courseId.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                !error && <p className="text-gray-600">You haven't purchased any courses yet.</p>
            )}
        </div>
    );
};

export default Dashboard;
