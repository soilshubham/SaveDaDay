import React, { useState, useEffect } from "react"
import AuthService from "../services/AuthService";
import Router from "next/router";

const withAuth = Component => {

    const AuthComponent = props => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            AuthService.isAuthenticated().then(data => {
                if (data.isAuthenticated) {
                    setIsAuthenticated(true);
                } else {
                    Router.replace("/login");
                }
            })
        }, [])

        return isAuthenticated ? <Component {...props} /> : "Loading...";
    }

    return AuthComponent;
}

export default withAuth;