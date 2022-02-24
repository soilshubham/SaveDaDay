import React, { useState, useEffect } from "react"
import AuthService from "../services/AuthService";
import Router from "next/router";

const withAuth = Component => {

    const AuthComponent = props => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            localStorage.getItem("isLoggedIn")
                ? AuthService.isAuthenticated().then(data => {
                    if (data.isAuthenticated) {
                        setIsAuthenticated(true);
                    } else {
                        localStorage.setItem("isLoggedIn", false);
                        Router.replace("/login");
                    }
                })
                : Router.replace("/login");
        }, [])

        return isAuthenticated && <Component {...props} />;
    }

    return AuthComponent;
}

export default withAuth;