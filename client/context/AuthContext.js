import React, { createContext, useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import AuthService from '../services/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [bdays, setBdays] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchBirthdays = () => {
        if (localStorage.getItem("isLoggedIn")) {
            AuthService.getBirthdays().then(data => {
                if (!data.msgError)
                    setBdays(data.birthdays);
            })
        }
        else {
            setUser({ name: "", username: "", role: "" }),
                setIsAuthenticated(false),
                setIsLoaded(true)
        }
    }

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn")) {
            AuthService.isAuthenticated().then(data => {
                setUser(data.user);
                setIsAuthenticated(data.isAuthenticated);
                setIsLoaded(true);
            })
        }
        else {
            setUser({ name: "", username: "", role: "" }),
                setIsAuthenticated(false),
                setIsLoaded(true)
        }
    }, [])

    useEffect(() => {
        fetchBirthdays();
    }, [])

    return (
        <div>
            {
                !isLoaded
                    ?
                    <div className="flex justify-center items-center min-h-screen">
                        <Spinner />
                    </div>
                    : <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, bdays, setBdays, fetchBirthdays }}>
                        {children}
                    </AuthContext.Provider>
            }
        </div >
    )
}