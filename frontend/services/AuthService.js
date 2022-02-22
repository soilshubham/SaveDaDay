export default {
    login: user => {
        return fetch(`http://localhost:5000/user/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json()).then(data => data)
    },
    register: user => {
        return fetch(`http://localhost:5000/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(res => res.json()).then(data => data)
    },
    logout: () => {
        return fetch(`http://localhost:5000/user/logout`).then(res => res.json()).then(data => data)
    },
    isAuthenticated: () => {
        return fetch(`http://localhost:5000/user/authenticated`).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data)
            else
                return { isAuthenticated: false, user: { username: "", role: "" } }

        }).catch(err => { return { isAuthenticated: false, user: { username: "", role: "" } } })
    }
}