import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom"; // Use Navigate for redirecting

const PrivateRoute = ({ children }) => {
    // Get the token from localStorage
    const token = localStorage.getItem("token");

    // If no token is found, the user is not authenticated
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Decode the JWT token to extract user data
    const decodedToken = jwtDecode(token);
    
    // Check if the user has the 'admin' role (adjust the decoding logic based on your token structure)
    const isAdmin = decodedToken?.role === "admin";

    // If the user is not an admin, redirect to a different page (e.g., home page)
    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    // If the user is authenticated and is an admin, render the children (protected route)
    return <>{children}</>;
};

export default PrivateRoute;
