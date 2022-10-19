import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='flex justify-center min-h-screen items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#018F9B]"></div>
        </div>

    }

    if (user && user.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;