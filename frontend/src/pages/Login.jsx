import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { backendUrl, setToken, token } = useContext(AppContext);
  const [state, setState] = useState("Sign Up");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // prevent default form submission behavior

    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "api/user/register", {
          email,
          password,
          name,
        });
        setData(data);
      }
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "api/user/login", {
          email,
          password,
        });
        setData(data);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    if (data.success) {
      console.log(data);
      localStorage.setItem("token", data.token);
      console.log("finished seting local storage");
      setToken(data.token);
      console.log("befoe toast");
      toast.success(` ${state} successful `);
    } else {
      console.log("testing toast");
      toast.error(data.message);
    }
  }, [data]);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <form
      onSubmit={onSubmitHandler}
      action=""
      className="min-h-[80vh] flex items-center"
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-300 rounded-xl text-zinc-600 text-sm shadow-lg ">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account " : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up " : "log in"} to book
          appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>FullName</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#5F6FFF] text-white w-full py-2 rounded-md text-base"
        >
          {state === "Sign Up" ? "Create Account " : "Login"}
        </button>
        <p>
          {state === "Sign Up"
            ? "Already have an account? "
            : "Don't have an account? "}
          <span
            className="text-[#5F6FFF] cursor-pointer"
            onClick={() => {
              state === "Sign Up" ? setState("Login") : setState("Sign Up");
            }}
          >
            {state === "Sign Up" ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
