import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toast";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import Head from "next/head";
import Router from "next/router";

const Admin = () => {
  const [loginData, setLoginData] = useState({
    username: null,
    password: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (window) {
      const isAdminLoggenIn =
        window?.sessionStorage?.getItem("isAdminLoggenIn");
      if (isAdminLoggenIn) {
        Router.push({
          pathname: "/admin/upload",
        });
      }
    }
  }, []);

  const [verifying, setVerifying] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setVerifying(true);
    if (loginData.username === null || loginData.password === null) {
      toast.error("Please fill the required fields to sign in");
      setVerifying(false);
      return;
    }
    await axios
      .post("/api/verify_admin", loginData, {
        headers: {
          Accept: "*/*",
        },
      })
      .then((response) => {
        const isAdmin = response.data.data;
        if (isAdmin) {
          window.sessionStorage.setItem("isAdminLoggenIn", true);
          setVerifying(false);
          Router.push({
            pathname: "/admin/upload",
          });
        } else {
          setVerifying(false);
          toast.error("Invalid Credentials");
        }
      })
      .catch((error) => {
        toast.error("Oops! Something went wrong");
        setVerifying(false);
      });
  };

  return (
    <>
      <Head>
        <title>Supersapiens Studio | Admin</title>
        <meta
          name="Supersapiens Studio"
          content="Proud Design Studio Since 2022"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="bg-white h-screen w-full flex flex-col justify-center items-center space-y-14 p-5 md:p-0">
        <div className="text-3xl">Admin Login</div>
        <div className="2xl:w-1/3 xl:w-2/5 flex flex-col space-y-5 ">
          <div className="flex space-x-5 w-full items-center justify-between">
            <p>Username</p>
            <input
              type="text"
              name="username"
              className="h-9 md:w-96 w-full border border-gray-400 rounded focus:outline-none p-2 text-sm"
              onChange={handleChange}
            />
          </div>
          <div className="flex space-x-5 w-full items-center justify-between">
            <p>Password</p>
            <input
              type="password"
              name="password"
              className="h-9 md:w-96 w-full border border-gray-400 rounded focus:outline-none p-3 text-sm"
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleLogin}
            className="py-2 bg-primary text-white rounded"
          >
            {verifying ? <ClipLoader color="#fff" size={16} /> : "Sign in"}
          </button>
        </div>
      </div>
      <ToastContainer delay={3000} position="top-right" />
    </>
  );
};

export default Admin;
