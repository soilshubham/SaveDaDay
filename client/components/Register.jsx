import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AuthService from "../services/AuthService";
import { AuthContext } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";
import Toast from "./Toast";
import Link from "next/link";

export default () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useContext(AuthContext);
  const router = useRouter();

  const resetForm = () => {
    setName("");
    setUsername("");
    setPassword("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "" || name === "") {
      Toast.incompleteFieldsError("Please fill all the fields");
      return;
    } else if (username.length > 20 || username.length < 6) {
      Toast.invalidUsername("Username must be between 6 and 20 characters");
      return;
    } else if (password.length > 24 || password.length < 6) {
      Toast.invalidPassword("Password must be between 6 and 24 characters");
      return;
    }

    AuthService.register({ name, username, password })
      .then((data) => {
        const { message, msgError } = data;
        if (!msgError) {
          resetForm();
          Toast.success(message);
          router.push("/login");
        } else {
          Toast.error(message);
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (authContext.isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [authContext.isAuthenticated]);

  return (
    <>
      <Toaster />
      {!authContext.isAuthenticated && (
        <>
          <h1 className="my-8 text-center text-xl font-semibold mb-10">
            Create an account with SaveDaDay
          </h1>
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl md:text-2xl font-medium text-center">
                Sign up
              </h1>
              <input
                type="text"
                value={name}
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                value={username}
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="password"
                value={password}
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

              <div className="text-center text-fadedColor mt-4">
                Already have an account?{" "}
                <span className="text-primary hover:underline">
                  <Link href="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
