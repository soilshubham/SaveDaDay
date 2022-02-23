import React, { createContext, useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import AuthService from '../services/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    }, [])

    return (
        <div>
            {
                !isLoaded
                    ?
                    <div className="flex justify-center items-center min-h-screen">
                        <Spinner />
                    </div>
                    : <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
                        {children}
                    </AuthContext.Provider>
            }
        </div >
    )
}