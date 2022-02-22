import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import AuthService from "../services/AuthService";
import { AuthContext } from "../context/AuthContext";

export default (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useContext(AuthContext);
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login({ username, password })
      .then((data) => {
        const { isAuthenticated, user, message } = data;
        if (isAuthenticated) {
          authContext.setUser(user);
          authContext.setIsAuthenticated(true);
          router.push("/dashboard");
        } else {
          alert(message);
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded-lg shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl md:text-2xl font-medium text-center">
          Log in
        </h1>
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full text-center py-3 rounded bg-primary md:hover:opacity-90 text-white hover:bg-green-dark focus:outline-none my-1"
          onClick={(e) => onSubmit(e)}
        >
          Log in
        </button>
      </div>
    </div>
  );
};
