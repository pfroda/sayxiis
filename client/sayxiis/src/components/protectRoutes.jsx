import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ProtectRoutes = () => {
    const { cookies } = useAuth();

    return cookies.token ? <Outlet/> : <Navigate to='/' exact/>
}