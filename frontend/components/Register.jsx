import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import AuthService from "../services/AuthService";

export default () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const resetForm = () => {
    setName("");
    setUsername("");
    setPassword("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "" || name === "") {
      alert("Please fill all the fields");
      return;
    }
    AuthService.register({ name, username, password, role: "user" })
      .then((data) => {
        const { message, msgError } = data;
        alert(message);
        if (!msgError) {
          resetForm();
          router.push("/login");
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
          Sign up
        </h1>
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

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
          type=""
          className="w-full text-center py-3 rounded bg-primary md:hover:opacity-90 text-white hover:bg-green-dark focus:outline-none my-1"
          onClick={(e) => onSubmit(e)}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};
