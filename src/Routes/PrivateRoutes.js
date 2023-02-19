import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';


const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);

    return <div>

    </div>;
};

export default PrivateRoutes;