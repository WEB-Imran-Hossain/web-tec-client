import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const userLocation = useLocation();

    if (loading) {
        return <span className="loading loading-spinner loading-lg bg-[#7EBC12]"></span>
    }

    if (user) {
        return children;

    }else{
        return <Navigate state={userLocation.pathname} to="/login" replace></Navigate>
    }
    
};

export default PrivateRoutes;